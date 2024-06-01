import { useEffect, useMemo, useState } from 'react';

import {
  Avatar,
  Box,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { PiTelegramLogo } from 'react-icons/pi';
import { useParams } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { LIMIT, PAGE } from '@/data';
import {
  Comment,
  CreateComment,
  useGetCommentsQuery,
  useGetPostDetail,
  useLikePost,
  useQueryInfoUser,
} from '@/features';
import { converDateToString } from '@/utils';
import toast from 'react-hot-toast';
import SharePostForm from '@/features/post/components/share-post-form';

export const PostDetail = () => {
  const [likedPost, setLikedPost] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(PAGE);
  const params = useParams();
  const postId = params.id;
  const { data: authorData } = useQueryInfoUser();

  const { data } = useGetPostDetail(params.id as string);
  const { data: comments, refetch } = useGetCommentsQuery(
    LIMIT,
    page,
    postId as string,
  );
  const [likePost] = useLikePost();

  const total = comments?.getComments.total || 0;
  const totalPage = Math.ceil(total / LIMIT);
  const postDetail = useMemo(() => {
    if (data) {
      const result = data.getPostById;
      return result;
    }
  }, [data]);
  const goBackHandler = () => {
    window.history.back();
  };

  const allComment = useMemo(() => {
    if (comments) {
      const result = comments.getComments.data;
      return result;
    }
  }, [comments]);

  const handleLikePost = () => {
    void likePost({
      variables: {
        idPost: postId as string,
        idUser: authorData?.getInfoUser.id,
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
    if (
      data?.getPostById.usersLiked &&
      data?.getPostById.usersLiked.length > 0
    ) {
      data?.getPostById.usersLiked.find(
        (item) => item.id === authorData?.getInfoUser.id,
      )
        ? setLikedPost(true)
        : setLikedPost(false);
    }
  }, [data?.getPostById.usersLiked]);

  return (
    <Box className="flex !bg-white h-[100vh]">
      {postDetail?.images && postDetail.images.length > 0 ? (
        <Box className="w-9/12 bg-black">
          <AiOutlineCloseCircle
            className="text-4xl text-white cursor-pointer"
            onClick={goBackHandler}
          />
          <Box className="p-4">
            {postDetail?.images && (
              <Swiper
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {postDetail?.images &&
                  postDetail.images.map((img: string) => (
                    <SwiperSlide key={img}>
                      <Box className="w-full flex justify-center items-center h-[89vh]">
                        <img
                          src={img}
                          loading="lazy"
                          alt=""
                          className="w-9/12"
                        />
                      </Box>
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </Box>
        </Box>
      ) : (
        ''
      )}
      <Box
        className={`${postDetail?.images && postDetail.images.length > 0 ? 'w-3/12 ' : 'w-full flex justify-center bg-black'}`}
      >
        <Box
          className={` ${postDetail?.images && postDetail.images.length > 0 ? '!h-[99vh] !p-4 overflow-y-scroll no-scrollbar' : 'w-5/12 bg-white p-4 border'}`}
        >
          <Box className="flex gap-2">
            <Avatar src={postDetail?.author.avatar} />
            <Box>
              <Text className="font-bold">{postDetail?.author.fullname}</Text>
              <Text className="font-bold text-[#6a6d70]">
                {converDateToString(postDetail?.createdAt as Date)}
              </Text>
            </Box>
          </Box>
          <Text className="my-2">{postDetail?.content}</Text>
          <Box className="w-full flex justify-between items-center">
            <Box className="flex gap-1">
              <BiLike className="bg-[#039DFC] text-white text-2xl p-1 rounded-full cursor-pointer" />
              <Text>{postDetail?.usersLiked?.length}</Text>
            </Box>
            <Box className="flex gap-1">
              <FaRegComments className="bg-[#039DFC] text-white text-2xl p-1 rounded-full" />
              <Text>{total}</Text>
            </Box>
          </Box>
          <Divider className="mt-2" />
          <Box className="flex justify-around items-center my-2 text-xl">
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
            <FaRegComments />
            <PiTelegramLogo onClick={onOpen} className="cursor-pointer" />
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Share Post</ModalHeader>
                <Divider />
                <ModalCloseButton />
                <ModalBody>
                  <SharePostForm
                    idPost={data?.getPostById.id}
                    idUser={authorData?.getInfoUser.id}
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          <Divider className="mb-2" />
          {allComment?.map((comment: any) => (
            <Comment
              key={comment.id}
              author={comment.author}
              content={comment.content}
              id={comment.id}
              images={comment.images}
              replies={comment.replies}
              videos={comment.videos}
              createdAt={comment.createdAt}
              postId={comment.postId}
              refetch={refetch}
            />
          ))}
          <Box className="flex justify-between mb-2 font-bold text-[##545659]">
            {page === 1 ? (
              <Box></Box>
            ) : (
              <p
                className="cursor-pointer"
                onClick={() => {
                  if (page > 1) setPage(page - 1);
                }}
              >
                Back
              </p>
            )}
            {page === totalPage ? (
              <Box></Box>
            ) : (
              <p
                className="cursor-pointer"
                onClick={() => {
                  if (page < totalPage) setPage(page + 1);
                }}
              >
                See more
              </p>
            )}
          </Box>
          <CreateComment
            postId={postId as string}
            onRefetch={() => refetch()}
          />
        </Box>
      </Box>
    </Box>
  );
};
