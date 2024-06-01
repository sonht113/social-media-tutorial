import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useGetPostDetail, useSharePost } from '../hooks/use-post-query';
import { converDateToString } from '@/utils';
import { FaRegCopy } from 'react-icons/fa';
import toast from 'react-hot-toast';

export type Props = {
  idPost?: string;
  idUser?: string;
};
const SharePostForm: FC<Props> = ({ idPost, idUser }) => {
  const { data } = useGetPostDetail(idPost as string);
  const currentPath = window.location.pathname;
  const [sharePost] = useSharePost();

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `http://localhost:5173${currentPath}/posts/${data?.getPostById.id}`,
    );
    toast.success('Copied!');
  };

  const handleShare = () => {
    void sharePost({
      variables: {
        idPost: idPost,
        idUser: idUser,
      },
      onCompleted: () => {
        toast.success('Share post successfully!');
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  return (
    <Box>
      <Box className="flex gap-2">
        <Avatar src={data?.getPostById.author.avatar} />
        <Box>
          <Text className="font-bold">{data?.getPostById.author.fullname}</Text>
          <Text>
            {data?.getPostById.createdAt &&
              converDateToString(data?.getPostById.createdAt)}
          </Text>
        </Box>
      </Box>
      <Text className="mt-4">{data?.getPostById.content}</Text>
      <Text className="font-bold mb-4">{`#${data?.getPostById.topic.name}`}</Text>
      <Box className="w-full columns-3 space-y-4">
        {data?.getPostById.images &&
          data?.getPostById.images.map((img) => (
            <Img src={img} alt="" className="w-full rounded-lg" />
          ))}
      </Box>
      <Divider className="mt-4" />
      <InputGroup size="md" className="my-4">
        <Input
          pr="4.5rem"
          value={`http://localhost:5173${currentPath}/posts/${data?.getPostById.id}`}
        />
        <InputRightElement>
          <IconButton
            aria-label="share post"
            icon={<FaRegCopy />}
            onClick={handleCopy}
          />
        </InputRightElement>
      </InputGroup>
      <Button onClick={handleShare}>Share to profile</Button>
    </Box>
  );
};

export default SharePostForm;
