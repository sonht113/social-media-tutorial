import { Box, Text, Divider } from '@chakra-ui/react';

import { SideBarButton } from '@/components';
import CreateGroup from './create-group';
import { groupSideBarButton } from '../service/constant';

type Props = {
  refetch?: () => void;
};

export const GroupSideBar = ({ refetch }: Props) => {
  return (
    <>
      <Text className="font-bold" fontSize="2xl">
        Groups
      </Text>
      <Divider className="my-4" />
      <Box className="flex flex-col">
        {groupSideBarButton.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
        <CreateGroup refetch={refetch} />
      </Box>
      <Divider className="my-4" />
    </>
  );
};
