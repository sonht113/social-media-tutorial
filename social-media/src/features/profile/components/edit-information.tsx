import { FC, useMemo } from 'react';

import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { Control, FieldErrors } from 'react-hook-form';
import { BiPhone } from 'react-icons/bi';
import {
  MdOutlineAddHomeWork,
  MdOutlineBook,
  MdOutlineHome,
  MdOutlineMailOutline,
} from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

import { UpdateInput } from '../service/type';
import { FormCustom } from '@/components';
import { ErrorShow } from '@/features';
import { UserType } from '@/features/user';
import { DataFieldInputType } from '@/ts/types';

export type Props = {
  user: UserType | undefined;
  control: Control<UpdateInput, unknown>;
  errors: FieldErrors<UpdateInput>;
  disable: boolean;
};

const EditInformation: FC<Props> = ({
  user,
  control,
  errors,
  disable = false,
}) => {
  const dataFormCustom: DataFieldInputType<UpdateInput>[] = useMemo(
    () => [
      {
        isRequired: false,
        control,
        name: 'fullname',
        element: ({ field }) => (
          <Box>
            <Text>Full Name</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <RxAvatar color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder={user?.fullname}
                className="!bg-white"
                {...field}
                name="fullname"
                id="fullname"
                disabled={disable}
              />
              {errors.fullname && (
                <ErrorShow message={errors.fullname.message as string} />
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'address',
        element: ({ field }) => (
          <Box>
            <Text>Address</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineHome color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder={user?.address}
                className="!bg-white"
                {...field}
                name="address"
                id="address"
                disabled={disable}
              />
              {errors.address && (
                <ErrorShow message={errors.address.message as string} />
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'university',
        element: ({ field }) => (
          <Box>
            <Text>Study</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineBook color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder={user?.university}
                className="!bg-white"
                {...field}
                name="university"
                id="university"
                disabled={disable}
              />
              {errors.university && (
                <ErrorShow message={errors.university.message as string} />
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'company',
        element: ({ field }) => (
          <Box>
            <Text>Company</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineAddHomeWork color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder={user?.company}
                className="!bg-white"
                {...field}
                name="company"
                id="company"
                disabled={disable}
              />
              {errors.company && (
                <ErrorShow message={errors.company.message as string} />
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'email',
        element: ({ field }) => (
          <Box>
            <Text>Email</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdOutlineMailOutline color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder={user?.email}
                className="!bg-white"
                {...field}
                name="email"
                id="email"
                disabled={disable}
              />
              {errors.email && (
                <ErrorShow message={errors.email.message as string} />
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'phone',
        element: ({ field }) => (
          <Box>
            <Text>Phone number</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BiPhone color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder={user?.phone}
                className="!bg-white"
                {...field}
                name="phone"
                id="phone"
                disabled={disable}
              />
              {errors.phone && (
                <ErrorShow message={errors.phone.message as string} />
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'relationship',
        element: ({ field }) => (
          <Box>
            <Text>Relationship</Text>
            <Select
              id="relationship"
              disabled={disable}
              {...field}
              className="!bg-white"
            >
              <option value={0}>Single</option>
              <option value={1}>Date</option>
              <option value={2}>Married</option>
            </Select>
            {errors.relationship && (
              <ErrorShow message={errors.relationship.message as string} />
            )}
          </Box>
        ),
      },
      {
        isRequired: false,
        control,
        name: 'dayOfBirth',
        element: ({ field }) => (
          <Box>
            <Text>Date of birth</Text>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="date"
              id="dayOfBirth"
              disabled={disable}
              {...field}
              className="!bg-white"
            />
            {errors.dayOfBirth && (
              <ErrorShow message={errors.dayOfBirth.message as string} />
            )}
          </Box>
        ),
      },
    ],
    [control, errors, disable, user],
  );
  return (
    <Box className="bg-gray-100 p-4 rounded-xl">
      <Text className="font-bold mb-2">Personal information</Text>
      <FormCustom data={dataFormCustom} />
    </Box>
  );
};

export default EditInformation;
