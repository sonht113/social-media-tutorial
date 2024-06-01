import {
  GroupType,
  useAcceptMemberJoinGroup,
  useQueryInfoUser,
} from '@/features';
import { Box, Button, Img, Text } from '@chakra-ui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export type Props = {
  data: GroupType | undefined;
  refetch: () => void;
};

const GroupDetailMemberReq = ({ data, refetch }: Props) => {
  const [membersReq, setMembersReq] = useState(data?.membersReq || []);
  const [accept] = useAcceptMemberJoinGroup();
  const { data: authorData } = useQueryInfoUser();
  const admins = data?.admins;

  const handleAcceptMemberJoinGroup = ({
    idMemberReq,
  }: {
    idMemberReq: string;
  }) => {
    if (data?.membersReq) {
      void accept({
        variables: { idGroup: data?.id, idMemberReq },
        onCompleted: () => {
          toast.success('Accept member join group successfully!');
          setMembersReq(
            membersReq.filter((member) => member.id !== idMemberReq),
          );
          void refetch();
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      });
    }
  };
  return (
    <Box className="grid grid-cols-4 ">
      {membersReq?.map((member) => (
        <Box
          className="flex flex-col gap-1 w-60 bg-white rounded-lg"
          key={member.id}
        >
          <Img src={member.avatar} alt="" className="h-64 rounded-t-lg" />
          <Box className="p-2">
            <Text className="font-bold">{member.fullname}</Text>
            {admins &&
            admins?.filter((item) => item.id === authorData?.getInfoUser.id) ? (
              <Button
                className="w-full my-2 !bg-[#0866FF] !text-white"
                onClick={() =>
                  member.id &&
                  handleAcceptMemberJoinGroup({ idMemberReq: member.id })
                }
              >
                Accept
              </Button>
            ) : (
              <Button
                className="w-full my-2 !bg-[#0866FF] !text-white"
                onClick={() =>
                  member.id &&
                  handleAcceptMemberJoinGroup({ idMemberReq: member.id })
                }
              >
                View Profile
              </Button>
            )}
            <Button className="w-full">Delete</Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default GroupDetailMemberReq;
