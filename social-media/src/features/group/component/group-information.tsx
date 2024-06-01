import { GroupType } from '@/features/group/service/type';
import { Avatar, Box, Button, Img, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import {
  IoArrowBackCircleOutline,
  IoEarthOutline,
  IoLockClosedOutline,
} from 'react-icons/io5';
import { useJoinGroup } from '../hooks/use-group-query';
import toast from 'react-hot-toast';
import { useQueryInfoUser } from '@/features/auth';

type Props = {
  groupInformation: GroupType;
  refetch: () => void;
};

export const GroupInformation: FC<Props> = ({
  groupInformation: data,
  refetch,
}) => {
  const [joinGroup] = useJoinGroup();
  const { data: userData } = useQueryInfoUser();

  const handleJoinGroup = () => {
    void joinGroup({
      variables: { id: data?.id },
      onCompleted: () => {
        void refetch();
        toast.success('Send request successfully!');
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };
  const goBackHandler = () => {
    window.history.back();
  };
  return (
    <Box className="bg-white my-8 rounded-lg">
      <Box className="flex items-center lg:hidden gap-2 p-4 ">
        <IoArrowBackCircleOutline
          className="text-4xl cursor-pointer"
          onClick={goBackHandler}
        />
        <img src={data?.avatar} alt="" className="w-8 h-8 rounded-xl " />
        <Text className="font-bold">{data?.name}</Text>
      </Box>
      <Img src={data?.coverImage} className="rounded-2xl w-full lg:h-96 fill" />
      <Box className="p-4">
        <Text className="text-2xl font-bold uppercase">{data?.name}</Text>
        <Box className="flex gap-4">
          {data?.isPrivate === true ? (
            <Box className="flex gap-1 items-center font-bold text-[#535353]">
              <IoLockClosedOutline />
              <Text>Private Group</Text>
            </Box>
          ) : (
            <Box className="flex gap-1 items-center font-bold text-[#535353]">
              <IoEarthOutline />
              <Text>Public Group</Text>
            </Box>
          )}
          <Box className="flex gap-1 items-center font-bold ">
            <HiOutlineUserGroup />
            <Text className="text-[#535353]">
              {data?.members?.length} members
            </Text>
          </Box>
        </Box>
        <Text className="my-4 text-[#7D7A89]">{data?.description}</Text>
        <Text>Author</Text>
        <Box className="flex items-center mt-2 mb-4">
          <Avatar src={data?.author?.avatar} />
        </Box>
        <Box className="flex justify-between items-center">
          <Box>
            <Text>Admins</Text>
            <Box className="flex items-center mt-2">
              {data?.admins &&
                data?.admins.map((admin) => (
                  <Avatar key={admin.id} src={admin.avatar} />
                ))}
            </Box>
          </Box>
          {data.members &&
          data.members.find(
            (member) => member.id === userData?.getInfoUser.id,
          ) ? (
            <></>
          ) : (
            <Button
              className="!bg-[#3182CE] !text-white font-bold"
              onClick={
                data.membersReq &&
                data.membersReq.find(
                  (member) => member.id === userData?.getInfoUser.id,
                )
                  ? () => {
                      toast.success('Wait for response');
                    }
                  : handleJoinGroup
              }
            >
              {data.membersReq &&
              data.membersReq.find(
                (member) => member.id === userData?.getInfoUser.id,
              )
                ? 'Wait for response'
                : 'Send Request'}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
