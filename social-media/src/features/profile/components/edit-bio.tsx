import { FC, useMemo } from 'react';

import { Box, Text, Textarea } from '@chakra-ui/react';

import { Props } from './edit-information';
import { UpdateInput } from '../service/type';
import { FormCustom } from '@/components';
import { ErrorShow } from '@/features';
import { DataFieldInputType } from '@/ts/types';

const EditBio: FC<Props> = ({ user, control, errors, disable = false }) => {
  const dataFormCustom: DataFieldInputType<UpdateInput>[] = useMemo(
    () => [
      {
        isRequired: false,
        control,
        name: 'description',
        element: ({ field }) => (
          <Box>
            <Textarea
              placeholder={user?.description}
              className="!bg-white"
              {...field}
              name="description"
              id="description"
              disabled={disable}
            />
            {errors.description && (
              <ErrorShow message={errors.description.message as string} />
            )}
          </Box>
        ),
      },
    ],
    [control, errors, disable, user],
  );

  return (
    <Box className="p-4 bg-gray-100 rounded-xl">
      <Text className="font-bold">Bio</Text>
      <FormCustom data={dataFormCustom} />
    </Box>
  );
};

export default EditBio;
