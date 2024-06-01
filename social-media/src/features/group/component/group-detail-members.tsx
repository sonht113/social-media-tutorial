import { Box, Button, Img, Text } from '@chakra-ui/react';
import { GroupType } from '../service/type';
import { Link } from 'react-router-dom';

export type Props = {
  data: GroupType | undefined;
};

const GroupDetailMembers = ({ data }: Props) => {
  return (
    <Box className="grid grid-cols-4 ">
      {data?.members?.map((member) => (
        <Box
          className="flex flex-col gap-1 w-60 bg-white rounded-lg"
          key={member.id}
        >
          <Img src={member.avatar} alt="" className="h-64 rounded-t-lg" />
          <Box className="p-2">
            <Text className="font-bold">{member.fullname}</Text>
            <Link to={`/profile/${member.id}`}>
              <Button className="w-full my-2 !bg-[#0866FF] !text-white">
                View Profile
              </Button>
            </Link>
            <Button className="w-full">Delete</Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default GroupDetailMembers;
