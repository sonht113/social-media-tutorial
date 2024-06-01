import {
  Box,
  FormErrorMessage,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { Control, FieldErrors } from 'react-hook-form';
import { CollectionInputType } from '../service';
import { FC, useMemo } from 'react';
import { DataFieldInputType } from '@/ts/types';
import { FormCustom, Upload } from '@/components';

export type Props = {
  control: Control<CollectionInputType, unknown>;
  errors: FieldErrors<CollectionInputType>;
  disable: boolean;
};

export const CreateCollectionForm: FC<Props> = ({
  control,
  errors,
  disable = false,
}) => {
  const dataCollectionFormCustom: DataFieldInputType<CollectionInputType>[] =
    useMemo(
      () => [
        {
          isRequired: true,
          control,
          name: 'name',
          element: ({ field }) => (
            <Box className="mb-4 font-bold">
              <Text>Name</Text>
              <InputGroup>
                <Input {...field} id="name" disabled={disable} />
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
          name: 'avatar',
          element: ({ field }) => (
            <Box className="mb-4 font-bold">
              <Text>Image</Text>
              <Upload
                {...field}
                disable={disable}
                isMultiple={false}
                typeUpload="avatar"
              />
              {errors.avatar && (
                <FormErrorMessage>
                  {errors.avatar.message as string}
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
      <FormCustom data={dataCollectionFormCustom} />
    </Box>
  );
};
