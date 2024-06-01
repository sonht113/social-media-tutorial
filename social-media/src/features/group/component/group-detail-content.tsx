import { CreatePost } from '@/components';
import { Post, useGetPostByGroup } from '@/features';
import { Box, Button, Divider, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaInstagram, FaCopy } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const GroupDetailContent = () => {
  const currentPath = window.location.pathname;
  const param = useParams();
  const idGroup = param.id as string;
  const { data: posts, refetch: postGroupRefetch } = useGetPostByGroup(
    idGroup,
    10,
    1,
  );
  const listPosts = useMemo(() => {
    if (posts) {
      const result = posts.getPostsByGroup.data;
      return result;
    }
  }, [posts]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:5173${currentPath}`);
    toast.success('Copied!');
  };

  return (
    <Box className="lg:flex gap-2 mb-4">
      <Box className="w-full lg:w-9/12">
        <CreatePost isGroup={true} refetch={postGroupRefetch} />
        {listPosts?.map((post) => (
          <Post
            key={post.id}
            content={post.content}
            images={post.images}
            fullname={post.author.fullname}
            avatar={post.author.avatar}
            createdAt={post.createdAt as Date}
            idPost={post.id}
            usersLiked={post.usersLiked}
            topic={post.topic}
            idAuthor={post.author.id}
            refetch={postGroupRefetch}
          />
        ))}
      </Box>
      <Box className="w-full lg:w-3/12 bg-white mt-4 rounded-lg border-2 p-4">
        <Text className="font-bold">Share Group</Text>
        <Divider className="my-4" />
        <Box className="flex flex-wrap gap-2">
          <Button
            leftIcon={<FaFacebook />}
            className="!bg-[#E8F1FE] !text-[#1877F2]"
          >
            Facebook
          </Button>
          <Button
            leftIcon={<FaInstagram />}
            className="!bg-[#E8F1FE] !text-[#1DA1F2]"
          >
            Instagram
          </Button>
          <Button
            leftIcon={<FaCopy />}
            className="!bg-[#E8F1FE] !text-[#110D59]"
            onClick={handleCopy}
          >
            Copy
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupDetailContent;
