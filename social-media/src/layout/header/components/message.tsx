import { Contact } from '@/components';
import { useGetAllRoom, useQueryInfoUser } from '@/features';
import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  WrapItem,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { MdMessage } from 'react-icons/md';

const Message = () => {
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

  function chooseRoom(): void {
    throw new Error('Function not implemented.');
  }
  return (
    <Popover>
      <PopoverTrigger>
        <Button px="0">
          <WrapItem className="bg-gray-500 p-2 rounded-full">
            <MdMessage className="text-md lg:text-xl text-white" />
          </WrapItem>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader className="font-bold">Messages</PopoverHeader>
        <PopoverBody>
          <Box className="overflow-y-scroll no-scrollbar [&>*:nth-child(odd)]:bg-red-200 [&>*:nth-child(even)]:bg-blue-200">
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
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Message;
