import { ReactNode } from 'react';

import { Box, Text } from '@chakra-ui/react';

type Props = {
  buttonName: string;
  buttonIcon: ReactNode;
  link?: string;
  onClick?: () => void;
  className?: string;
};

export const SideBarButton = ({
  buttonName,
  buttonIcon,
  onClick,
  className,
}: Props) => {
  return (
    <button
      className={`flex justify-start items-center gap-4 py-3 rounded-lg px-4 font-bold  hover:bg-[#D5ECF5] hover:text-[#44408A] ${className}`}
      onClick={onClick}
    >
      <Box className="text-[#44408A] text-2xl group-hover:!text-[#44408A]">
        {buttonIcon}
      </Box>
      <Text>{buttonName}</Text>
    </button>
  );
};
