import { useMemo } from 'react';

import { Box, Text } from '@chakra-ui/react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

import { GroupInformation, GroupNavbar, useGetGroupById } from '@/features';

export const GroupDetail = () => {
  const params = useParams();
  const { data, refetch } = useGetGroupById(params.id!);

  const groupDetail = useMemo(() => {
    if (data) {
      const result = data.getGroupById;
      return result;
    }
  }, [data]);

  const goBackHandler = () => {
    window.history.back();
  };

  return (
    <Box className="flex gap-4 justify-center">
      <Box className="hidden lg:w-3/12 lg:flex gap-2 p-4 ">
        <Box className="flex flex-col">
          <IoArrowBackCircleOutline
            className="text-4xl cursor-pointer"
            onClick={goBackHandler}
          />
          <img
            src={groupDetail?.avatar}
            alt=""
            className="w-16 h-16 rounded-xl "
          />
          <Text className="font-bold">{groupDetail?.name}</Text>
          <Box className="flex gap-2 font-bold text-gray-600 text-xs">
            <Text>
              {groupDetail?.isPrivate === true
                ? 'Private Group'
                : 'Public Group'}
            </Text>
            <Text>{groupDetail?.members?.length} members</Text>
          </Box>
        </Box>
      </Box>
      <Box className="w-full lg:w-9/12 bg-[#F1F2F4] flex justify-center items-center">
        <Box className="w-11/12 lg:w-10/12">
          {groupDetail && (
            <GroupInformation
              groupInformation={groupDetail}
              refetch={refetch}
            />
          )}
          <GroupNavbar data={groupDetail} refetch={refetch} />
        </Box>
      </Box>
    </Box>
  );
};
