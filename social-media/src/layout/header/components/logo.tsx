import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { logo } from '@/assets';
import { HOME_PATH } from '@/data';

const Logo = () => {
  return (
    <Link to={HOME_PATH}>
      <Box className="flex justify-center items-center gap-4 cursor-pointer">
        <Image src={logo} className="w-8 h-8 lg:w-14 lg:!h-14 rounded-lg" />
        <Text fontSize="lg" className="hidden lg:block font-bold">
          Social Media
        </Text>
      </Box>
    </Link>
  );
};

export default Logo;
