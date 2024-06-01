import { FC } from 'react';

import { Box, Image, Text, Avatar } from '@chakra-ui/react';

import { UserType } from '@/features/user';

type Props = {
  user: UserType | undefined;
};

const EditImage: FC<Props> = ({ user }) => {
  return (
    <Box className="w-full bg-gray-100 pb-4 rounded-xl">
      <Box className="w-full">
        <Box className="overflow-hidden">
          <Image
            src={user?.coverImage}
            alt="Image"
            className="mb-[-10%] rounded-t-xl w-full"
          />
        </Box>
        <Avatar
          src={user?.avatar}
          size="xl"
          className="absolute bottom-0 left-4 -translate-y-1/2"
        />
      </Box>
      <Box className="ml-4">
        <Text className="font-bold">Your Photo</Text>
        <Text>This will be displayed on your profile</Text>
      </Box>
    </Box>
  );
};

export default EditImage;
