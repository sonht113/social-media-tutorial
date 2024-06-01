import { FC, ReactNode, useState } from 'react';

import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { leftNavBar } from './constant';

type Props = {
  children?: ReactNode;
  className?: string;
};

const LeftNavBar: FC<Props> = ({ children, className }) => {
  const currentPath = window.location.pathname;
  const [pathName, setPathName] = useState(currentPath);

  return (
    <Box className={`gap-1 w-3/12 hidden lg:flex ${className}`}>
      <Box className="flex flex-col gap-2 bg-white p-2  h-[calc(100vh-64px)]">
        {leftNavBar.map((item) => (
          <Link to={item.link} key={item.link}>
            <Button
              variant="ghost"
              fontSize="xl"
              className={
                pathName === item.link ? 'bg-[#3182CE] !text-white' : ''
              }
              onClick={() => setPathName(item.link)}
            >
              {item.icon}
            </Button>
          </Link>
        ))}
      </Box>
      <Box className="bg-white p-4 w-full">{children}</Box>
    </Box>
  );
};

export default LeftNavBar;
