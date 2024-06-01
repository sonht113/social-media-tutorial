import {
  BiCalendar,
  BiCart,
  BiGroup,
  BiHome,
  BiMessage,
  BiVideo,
} from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi2';

import {
  HOME_PATH,
  FRIEND_PATH,
  GROUP_PATH,
  MARKET_PATH,
  MESSAGE_PATH,
  COLLECTION_PATH,
  VIDEO_PATH,
} from '@/data';

export const leftNavBar = [
  {
    icon: <BiHome />,
    link: HOME_PATH,
  },
  {
    icon: <BiGroup />,
    link: FRIEND_PATH,
  },
  {
    icon: <HiOutlineUserGroup />,
    link: GROUP_PATH,
  },
  {
    icon: <BiCart />,
    link: MARKET_PATH,
  },
  {
    icon: <BiMessage />,
    link: MESSAGE_PATH,
  },
  {
    icon: <BiVideo />,
    link: VIDEO_PATH,
  },
  {
    icon: <BiCalendar />,
    link: COLLECTION_PATH,
  },
];
