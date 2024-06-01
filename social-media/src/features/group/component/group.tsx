import { FC } from 'react';

import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { GroupType } from '../service/type';

export const GroupComponent: FC<GroupType> = ({
  name,
  description,
  avatar,
  id,
}) => {
  return (
    <Box className="bg-white p-4 rounded-lg border mb-4 xs:mb-0">
      <Box className="flex mb-4 gap-4">
        <img src={avatar} alt="" className="w-20 h-20 rounded-lg" />
        <Box>
          <Text className="font-bold hover:underline cursor-pointer">
            {name}
          </Text>
          <Text className="text-[#2b2c2d]">{description}</Text>
        </Box>
      </Box>
      <Link to={`/group/${id}`}>
        <Button className="!bg-[#EBF5FE] !text-[#427FD9] w-full">
          View Group
        </Button>
      </Link>
    </Box>
  );
};
