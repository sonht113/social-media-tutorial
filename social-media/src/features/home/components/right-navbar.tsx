import { Box, Divider, IconButton, Text } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

import { Contact } from '@/components';
import { useGetAllRoom, useQueryInfoUser } from '@/features';
import { useEffect, useMemo } from 'react';

type Props = {
  className?: string;
};

export const RightNavBar = ({ className }: Props) => {
  const { data: userData, loading } = useQueryInfoUser();
  const [getAllRoom, { data }] = useGetAllRoom();

  const getRooms = async () => {
    return await getAllRoom({
      variables: { idUser: userData?.getInfoUser.id },
    });
  };

  useEffect(() => {
    if (!loading) {
      void getRooms();
    }
  }, [loading, userData]);

  const totalRoom = useMemo(() => {
    return data?.getAllRoom.length;
  }, [data]);

  function chooseRoom(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Box className={`bg-white p-4 w-2/12 hidden xl:block ${className}`}>
      <Box className="flex justify-between rooms-center">
        <Text className="font-bold">Contact</Text>
        <IconButton
          aria-label="Search database"
          icon={<LuSearch />}
          size="sm"
        />
      </Box>
      <Divider className="my-4" />
      <Text fontSize="sm" className="text-gray-500">
        Online - {totalRoom}
      </Text>
      <Box className=" overflow-y-scroll no-scrollbar">
        {data?.getAllRoom.map((item: any) => (
          <Contact
            key={item.id}
            members={item.members}
            idUser={userData?.getInfoUser.id!}
            idRoom={item.id}
            clickRoom={() => chooseRoom()}
          />
        ))}
      </Box>
    </Box>
  );
};
