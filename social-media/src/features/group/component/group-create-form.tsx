import { FC, useMemo } from 'react';

import {
  Box,
  Text,
  InputGroup,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Control, FieldErrors } from 'react-hook-form';

import { GroupInput } from '../service/type';
import { FormCustom, Upload } from '@/components';
import { DataFieldInputType } from '@/ts/types';

export type Props = {
  control: Control<GroupInput, unknown>;
  errors: FieldErrors<GroupInput>;
  disable: boolean;
};

const GroupCreateForm: FC<Props> = ({ control, errors, disable = false }) => {
  const dataGroupFormCustom: DataFieldInputType<GroupInput>[] = useMemo(
    () => [
      {
        isRequired: true,
        control,
        name: 'name',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Group Name</Text>
            <InputGroup>
              <Input {...field} disabled={disable} id="name" />
              {errors.name && (
                <FormErrorMessage>
                  {errors.name.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'description',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Description for your Group</Text>
            <InputGroup>
              <Input {...field} id="description" disabled={disable} />
              {errors.description && (
                <FormErrorMessage>
                  {errors.description.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'avatar',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Group Avatar</Text>
            <Upload
              {...field}
              disable={disable}
              typeUpload="avatar"
              isMultiple={false}
            />
            {errors.avatar && (
              <FormErrorMessage>
                {errors.avatar.message as string}
              </FormErrorMessage>
            )}
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'coverImage',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Group cover image</Text>
            <Upload
              {...field}
              disable={disable}
              typeUpload="coverImage"
              isMultiple={false}
            />
            {errors.coverImage && (
              <FormErrorMessage>
                {errors.coverImage.message as string}
              </FormErrorMessage>
            )}
          </Box>
        ),
      },
    ],
    [control, errors, disable],
  );
  return (
    <Box>
      <FormCustom data={dataGroupFormCustom} />
    </Box>
  );
};

export default GroupCreateForm;
