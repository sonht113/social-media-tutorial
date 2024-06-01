import { Box, Divider, Input, Text } from '@chakra-ui/react';

import { useGetAllRoom } from '../hooks/use-messages-query';
import { Contact } from '@/components';
import { useQueryInfoUser } from '@/features/auth';

export const MessageSideBar = () => {
  const { data: userData } = useQueryInfoUser();
  const { data } = useGetAllRoom(userData?.getInfoUser.id!);
  const totalRoom = data?.getAllRoom.length;

  return (
    <>
      <Box className="flex justify-between items-center">
        <Text className="font-bold" fontSize="2xl">
          Messages
        </Text>
        <Text className="font-bold">{totalRoom}</Text>
      </Box>
      <Divider className="my-4" />
      <Input placeholder="search" className="!bg-[#F6F6FE]" />
      <Box className="h-[77vh] overflow-y-scroll no-scrollbar">
        {data?.getAllRoom.map((item) => (
          <Contact
            key={item.id}
            members={item.members}
            idUser={userData?.getInfoUser.id!}
            idRoom={item.id}
          />
        ))}
      </Box>
    </>
  );
};
