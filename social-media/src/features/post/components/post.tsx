import { FC, useEffect, useMemo, useState } from 'react';

import {
  Avatar,
  Box,
  Text,
  Divider,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { BsCopy } from 'react-icons/bs';
import { CiShoppingTag, CiEdit, CiTrash } from 'react-icons/ci';
import { FaRegComments } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { PiTelegramLogo } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import SharePostForm from './share-post-form';
import { LIMIT, PAGE } from '@/data';
import {
  Comment,
  CreateComment,
  PostType,
  useDeletePost,
  useGetCommentsQuery,
  useGetGroupById,
  useGhimPost,
  useLikePost,
  useQueryInfoUser,
} from '@/features';
import { converDateToString } from '@/utils';
import { useUpdateCollection } from '@/features/collections/hooks/use-collections-query';

export const Post: FC<PostType> = ({
  isPostToGroup,
  idPost,
  content,
  images,
  typePost,
  videoSrc,
  fullname,
  avatar,
  createdAt,
  usersLiked,
  topic,
  idAuthor,
  refetch,
}) => {
  const videoProps = {
    src: videoSrc,
    name: 'header',
    allowFullScreen: true,
    title: 'video',
  };
  const dateCreated = converDateToString(createdAt);
  const [likedPost, setLikedPost] = useState(false);
  const [countLiked, setCountLiked] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTruncated, setIsTruncated] = useState(true);
  const [likePost] = useLikePost();
  const [deletePost] = useDeletePost();
  const [ghimPost] = useGhimPost();
  const { data: userData } = useQueryInfoUser();
  const { data: comments, refetch: refetchComments } = useGetCommentsQuery(
    LIMIT,
    PAGE,
    idPost!,
  );
  const commentDemo = comments?.getComments.data.slice(0, 2);
  const { data: group } = useGetGroupById(isPostToGroup?.idGroup!);
  const [savePost] = useUpdateCollection();

  const handleSavePostToCollection = () => {
    void savePost({
      variables: {
        idPost: idPost,
        idSaved: userData?.getInfoUser.id,
      },
      onCompleted: () => {
        refetch && void refetch();
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  const handleLikePost = () => {
    void likePost({
      variables: {
        idPost: idPost,
        idUser: userData?.getInfoUser.id,
      },
      onCompleted: () => {
        refetch && void refetch();
        setLikedPost(!likedPost);
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  useEffect(() => {
    if (usersLiked && usersLiked.length > 0) {
      usersLiked.find((item) => item.id === userData?.getInfoUser.id)
        ? setLikedPost(true)
        : setLikedPost(false);
      setCountLiked(usersLiked.length);
    }
  }, [userData?.getInfoUser.id, usersLiked]);

  const color = useMemo(() => {
    if (topic) {
      return topic.color;
    }
  }, [topic]);

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  const handleDeletePost = () => {
    void deletePost({
      variables: {
        id: idPost,
      },
      onCompleted: () => {
        refetch && refetch();
        toast.success('Delete post successfully!');
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  const handleGhimPost = () => {
    void ghimPost({
      variables: {
        idPost: idPost,
      },
      onCompleted: () => {
        refetch && void refetch();
        toast.success('Ghim post successfully!');
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  return (
    <Box className="bg-white my-4 p-4 rounded-lg border-2">
      <Box className="flex justify-between">
        <Box className="flex items-center gap-2">
          <Box className="relative">
            {group?.getGroupById.avatar && (
              <Link to={`/group/${group?.getGroupById.id}`}>
                <Avatar
                  src={group?.getGroupById.avatar}
                  className="hover:cursor-pointer"
                />
              </Link>
            )}
            <Link to={`/profile/${idAuthor}`}>
              <Avatar
                src={avatar}
                className={`hover:cursor-pointer ${group?.getGroupById.avatar && 'absolute top-full right-0 -translate-x-full translate-y-full'}`}
                size={group?.getGroupById.avatar && 'xs'}
              />
            </Link>
          </Box>
          <Box>
            <Link to={`/group/${group?.getGroupById.id}`}>
              <Text className="font-bold cursor-pointer">
                {group?.getGroupById.name}
              </Text>
            </Link>
            <Box
              className={`${group?.getGroupById.name && 'flex items-center gap-2'}`}
            >
              <Link to={`/profile/${idAuthor}`}>
                <Text
                  className={`font-bold cursor-pointer ${group?.getGroupById.name ? 'text-[#4f4f50] ' : ''}`}
                >
                  {fullname}
                </Text>
              </Link>
              <Text fontSize="xs" className="text-gray-500">
                {dateCreated}
              </Text>
            </Box>
          </Box>
        </Box>
        <Popover>
          <PopoverTrigger>
            <IconButton
              aria-label="Add to friends"
              icon={<HiDotsHorizontal />}
              className="cursor-pointer text-2xl"
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              {userData?.getInfoUser.id === idAuthor && (
                <>
                  <Box
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={handleDeletePost}
                  >
                    <CiTrash className="text-2xl" />
                    <Text className="font-bold">Delete Post</Text>
                  </Box>
                  <Divider className="my-2" />
                  <Box
                    className="flex items-center gap-2 cursor-pointer font-bold"
                    onClick={handleGhimPost}
                  >
                    <CiShoppingTag className="text-2xl" />
                    <Text className="font-bold">Ghim Post</Text>
                  </Box>
                  <Divider className="my-2" />
                  <Link to={`/edit-post/${idPost}`}>
                    <Box className="flex items-center gap-2 cursor-pointer font-bold">
                      <CiEdit className="text-2xl" />
                      <Text className="font-bold">Edit Post</Text>
                    </Box>
                  </Link>
                </>
              )}
              {userData?.getInfoUser.id !== idAuthor && (
                <Box className="flex items-center gap-2 cursor-pointer font-bold">
                  <BsCopy className="text-2xl" />
                  <Text>Save Post</Text>
                </Box>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Box>
        <Text className={`${isTruncated ? 'truncate' : ''} mt-2 `}>
          {content}
        </Text>
        <button onClick={toggleTruncation} className="font-bold mb-2">
          {isTruncated ? 'See more' : 'Collapse'}
        </button>
      </Box>
      {topic && (
        <Box
          className={`rounded-sm p-1 inline py-1 px-2 font-bold bg-[#${color}]`}
        >
          #{topic.name}
        </Box>
      )}
      {typePost === 'video' ? (
        <video {...videoProps} controls>
          <track src="captions.vtt" kind="captions" label="English" default />
        </video>
      ) : (
        <Box className={`my-6 w-full columns-2 md:columns-3 !space-y-4`}>
          {images &&
            images.map((item) => (
              <Link to={`/posts/${idPost}`} key={item}>
                <img src={item} className="w-full py-2 !rounded-md" />
              </Link>
            ))}
        </Box>
      )}
      <Divider className="mb-4" />
      <Box className="flex justify-between items-center my-2">
        <Box className="w-full  flex justify-around">
          <Box className="flex items-center gap-1">
            {likedPost ? (
              <AiFillLike
                onClick={handleLikePost}
                className=" cursor-pointer text-2xl text-[#0566FF]"
              />
            ) : (
              <AiOutlineLike
                onClick={handleLikePost}
                className=" cursor-pointer text-2xl hover:scale-150"
              />
            )}
            <Box>{countLiked < 100 ? countLiked : '99+'}</Box>
          </Box>
          <Link to={`/posts/${idPost}`}>
            <FaRegComments className="text-2xl cursor-pointer" />
          </Link>
          <Box>
            <PiTelegramLogo
              onClick={onOpen}
              className="text-2xl cursor-pointer"
            />
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Share Post</ModalHeader>
                <Divider />
                <ModalCloseButton />
                <ModalBody>
                  <SharePostForm idPost={idPost} idUser={idAuthor} />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Box>
      <Divider className="mb-4" />
      {commentDemo?.map((comment: any) => (
        <Comment
          refetch={refetchComments}
          key={comment.id}
          author={comment.author}
          content={comment.content}
          id={comment.id}
          images={comment.images}
          replies={comment.replies}
          videos={comment.videos}
          createdAt={comment.createdAt}
          postId={comment.postId}
        />
      ))}
      <CreateComment postId={idPost as string} onRefetch={refetchComments} />
    </Box>
  );
};
