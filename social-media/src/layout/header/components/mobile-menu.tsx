import { useEffect, useState, ReactNode } from 'react';

import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

import {
  CartSideBar,
  CollectionSideBar,
  FriendSideBar,
  GroupSideBar,
  HomeSideBar,
  VideoSideBar,
} from '@/features';
import LeftNavBar from '@/layout/navbar-layout/components/left-navbar';

const MobileMenu = () => {
  const [sidebarComponent, setSidebarComponent] = useState<ReactNode>();

  const currentPath = window.location.pathname;
  useEffect(() => {
    if (currentPath == '/home') {
      setSidebarComponent(<HomeSideBar />);
    } else if (currentPath == '/market') {
      setSidebarComponent(<CartSideBar />);
    } else if (currentPath == '/group') {
      setSidebarComponent(<GroupSideBar />);
    } else if (currentPath == '/friend') {
      setSidebarComponent(<FriendSideBar />);
    } else if (currentPath == '/video') {
      setSidebarComponent(<VideoSideBar />);
    } else if (currentPath == '/collections') {
      setSidebarComponent(<CollectionSideBar />);
    }
  }, [currentPath]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="lg:hidden">
      <Button px="0" onClick={onOpen}>
        <WrapItem className="bg-gray-500 p-2 rounded-full">
          <BiMenu className="text-md lg:text-xl text-white" />
        </WrapItem>
      </Button>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={{ xs: 'full', md: 'lg' }}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent className="!bg-[#F6F6F7]">
          <DrawerCloseButton />
          <LeftNavBar className="w-full !flex h-screen">
            {sidebarComponent}
          </LeftNavBar>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
