import { Box } from '@chakra-ui/react';
import { BiGroup } from 'react-icons/bi';
import { IoMenuOutline, IoPersonAddOutline } from 'react-icons/io5';

import { SideBarButton } from '@/components';
import { useState } from 'react';

const friendsSideBar = [
  {
    name: 'Home',
    icon: <IoMenuOutline />,
    link: 'home',
  },
  {
    name: 'Friends request',
    icon: <IoPersonAddOutline />,
    link: 'friendsReq',
  },
  {
    name: 'All Friends',
    icon: <BiGroup />,
    link: 'allFriends',
  },
];

export const FriendSideBar = () => {
  const [element, setElement] = useState(friendsSideBar[0].link);

  return (
    <Box className="flex flex-col gap-2 !w-full">
      {friendsSideBar.map((item) => (
        <SideBarButton
          key={item.name}
          buttonIcon={item.icon}
          buttonName={item.name}
          link={item.link}
          onClick={() => setElement(item.link)}
          className={`${element === item.link ? 'bg-[#3182CE] text-white' : ''}`}
        />
      ))}
    </Box>
  );
};
