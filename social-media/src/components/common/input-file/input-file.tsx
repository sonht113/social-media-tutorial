import { FC, ReactNode } from 'react';

import { Box, Input } from '@chakra-ui/react';

export type Props = {
  icon: ReactNode;
  value: string;
};

export const InputFile: FC<Props> = ({ icon, value }) => {
  return (
    <label htmlFor="file">
      <Box>{icon}</Box>
      <Input type="file" id="file" className="hidden" value={value} />
    </label>
  );
};
