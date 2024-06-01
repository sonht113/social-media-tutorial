/* eslint-disable */
import { useEffect, useMemo } from 'react';

import { Box, Divider, Input, Text } from '@chakra-ui/react';

import { Contact } from '@/components';
import {
  useGetAllMessage,
  useGetAllRoom,
  useGetRoomById,
  useQueryInfoUser,
} from '@/features';
import LeftNavBar from '@/layout/navbar-layout/components/left-navbar';
import ContactDetail from '@/features/message/components/contact-detail';

export const Message = () => {
  const { data: userData, loading } = useQueryInfoUser();
  const [getAllRoom, { data }] = useGetAllRoom();
  const [getAllMessage, { data: allMessage, loading: loadingMessage }] =
    useGetAllMessage();
  const [getRoomById, { data: infoRoom }] = useGetRoomById();

  const totalRoom = useMemo(() => {
    return data?.getAllRoom.length;
  }, [data]);

  const getRooms = async () => {
    return await getAllRoom({
      variables: { idUser: userData?.getInfoUser.id },
    });
  };

  const userInfo = useMemo(() => {
    return userData?.getInfoUser;
  }, [userData]);

  const membersOfRoom = useMemo(() => {
    if (infoRoom) {
      return infoRoom.getRoomById.members;
    }
    return [];
  }, [infoRoom]);

  const chooseRoom = async (id: string) => {
    void getRoomById({ variables: { id: id } });
    void getAllMessage({ variables: { room: id } });
  };

  useEffect(() => {
    if (!loading) {
      void getRooms();
    }
  }, [loading, userData]);
  return (
    <Box className="flex">
      <LeftNavBar>
        <Box className="flex justify-between items-center">
          <Text className="font-bold" fontSize="2xl">
            Messages
          </Text>
          <Text className="font-bold">{totalRoom}</Text>
        </Box>
        <Divider className="my-4" />
        <Input placeholder="search" className="!bg-[#F6F6FE]" />
        <Box className="h-[77vh] overflow-y-scroll no-scrollbar">
          {data?.getAllRoom.map((item: any) => (
            <Contact
              key={item.id}
              members={item.members}
              idUser={userData?.getInfoUser.id!}
              idRoom={item.id}
              clickRoom={(idRoom: string) => chooseRoom(idRoom)}
            />
          ))}
        </Box>
      </LeftNavBar>
      <Box className="w-full">
        <ContactDetail
          loadingMessage={loadingMessage}
          userInfo={userInfo}
          membersOfRoom={membersOfRoom}
          idRoom={infoRoom?.getRoomById.id}
          allMessage={allMessage?.getAllMessage}
        />
      </Box>
    </Box>
  );
};
