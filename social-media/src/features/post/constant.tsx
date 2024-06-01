import { BiImage, BiSend, BiSmile, BiVideo } from 'react-icons/bi';

export const optionInput = [
  {
    value: 'video/*',
    icon: <BiVideo />,
    id: 1,
    type: 'file',
    name: 'videos',
  },
  { value: 'image/*', icon: <BiImage />, id: 3 },
  { icon: <BiSmile />, id: 2, open: true, type: 'file' },
  { icon: <BiSend />, id: 4, type: 'submit' },
];
