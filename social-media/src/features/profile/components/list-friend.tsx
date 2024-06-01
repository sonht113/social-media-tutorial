import { useGetFriends } from '@/features/friends/hooks/use-friend-query';
import { Avatar, Box, Divider, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ListFriend = () => {
  const { data: friends } = useGetFriends();
  const listFriends = friends?.getFriends.friends;

  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex justify-between">
        <Text className="font-bold">List friends</Text>
        <Text className="text-green-900 font-bold cursor-pointer">See all</Text>
      </Box>
      <Divider className="my-2" />
      {listFriends?.map((item) => (
        <Link to={`/profile/${item.id}`} key={item.id}>
          <Box className="flex gap-2 items-center cursor-pointer hover:bg-[#F0F0F1] p-1 rounded-lg">
            <Avatar src={item.avatar} />
            <Text className="font-bold">{item.fullname}</Text>
          </Box>
        </Link>
      ))}
    </Box>
  );
};
