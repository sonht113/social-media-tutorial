import { FC } from 'react';

import { Text } from '@chakra-ui/react';

type Props = {
  message: string;
};

export const ErrorShow: FC<Props> = ({ message }) => {
  return (
    <Text fontSize="sm" color="red">
      {message}
    </Text>
  );
};
