import { FC, ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

import LeftNavBar from './components/left-navbar';

type Props = {
  children: ReactNode;
  navBarChildren: ReactNode;
};

const NavbarLayout: FC<Props> = ({ children, navBarChildren }) => {
  return (
    <Box className="flex justify-between h-[calc(100vh-64px)] ">
      <LeftNavBar>{navBarChildren}</LeftNavBar>
      <Box className="mx-2 w-full flex flex-col overflow-y-auto no-scrollbar lg:w-9/12 ">
        {children}
      </Box>
    </Box>
  );
};

export default NavbarLayout;
