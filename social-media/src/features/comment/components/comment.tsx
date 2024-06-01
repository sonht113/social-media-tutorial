import { FC, useState } from 'react';

import { Avatar, Box, Img, Text } from '@chakra-ui/react';
import { CommentType } from '../service';
import { durationTime } from '@/utils';
import { CreateReplyCmt } from './create-reply-comment';
import { useQueryInfoUser } from '@/features/auth';

export const Comment: FC<CommentType> = ({
  author,
  content,
  images,
  videos,
  createdAt,
  id,
  postId,
  replies,
  refetch,
}) => {
  const [repCmt, setRepCmt] = useState(false);
  const { data: authData } = useQueryInfoUser();
  return (
    <Box className="flex gap-2 my-4">
      <Avatar src={author?.avatar} />
      <Box>
        <>
          <Box className="bg-[#f0f0f1] py-1 px-2 rounded-lg">
            <Text className="font-medium">{author?.fullname}</Text>
            <Text>{content}</Text>
          </Box>
          <Box className="columns-2 mt-2 !space-y-4">
            {images?.map((img) => (
              <Img src={img} alt="" key={img} className="rounded-lg" />
            ))}
          </Box>
          <Box className="columns-2">
            {videos?.map((video) => <Img src={video} alt="" key={video} />)}
          </Box>
          <Box className="flex gap-2 text-xs">
            <Text>{durationTime(createdAt)}</Text>
            <Text className="font-bold cursor-pointer">Like</Text>
            <Text
              className="font-bold cursor-pointer"
              onClick={() => setRepCmt(!repCmt)}
            >
              Reply
            </Text>
            {author?.id === authData?.getInfoUser.id && (
              <Text className="font-bold cursor-pointer">Delete</Text>
            )}
          </Box>
          {repCmt && (
            <CreateReplyCmt
              idCmtParent={id}
              postId={postId}
              refetch={refetch}
            />
          )}
        </>
        <Box className="flex flex-col mt-2">
          {replies?.map((reply) => (
            <Box key={reply.id} className="flex gap-2">
              <Avatar src={reply.author?.avatar} />
              <Box>
                <Box className="bg-[#f0f0f1] py-1 px-2 rounded-lg">
                  <Text className="font-medium">{reply.author?.fullname}</Text>
                  <Text>{reply.content}</Text>
                </Box>
                <Box className="columns-2 mt-1">
                  {reply.images?.map((img) => (
                    <Img src={img} alt="" key={img} className="rounded-lg" />
                  ))}
                </Box>
                <Box className="columns-2">
                  {reply.videos?.map((video) => (
                    <Img src={video} alt="" key={video} />
                  ))}
                </Box>
                <Box className="flex gap-2 text-xs mb-4">
                  <Text className="text-xs">
                    {durationTime(reply.createdAt)}
                  </Text>
                  {reply.author?.id === authData?.getInfoUser.id && (
                    <Text className="font-bold cursor-pointer text-xs">
                      Delete
                    </Text>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
