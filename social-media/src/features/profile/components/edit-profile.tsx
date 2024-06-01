import { useMemo, useState } from 'react';

import { Box, useDisclosure, Text, Divider, Input } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import EditBio from './edit-bio';
import EditImage from './edit-image';
import EditInformation from './edit-information';
import { useUpdateProfile } from '../hooks/use-update-profile';
import { UpdateInput } from '../service/type';
import { useQueryInfoUser } from '@/features/auth';
import { UserType } from '@/features/user';
import { useParams } from 'react-router-dom';

type Props = {
  refetch: () => void;
};

export const EditProfile = ({ refetch }: Props) => {
  const [user, setUser] = useState<UserType>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useQueryInfoUser();
  const param = useParams();
  useMemo(() => {
    if (data) {
      setUser(data?.getInfoUser);
    }
  }, [data]);

  const defaultValue = {
    fullname: data?.getInfoUser.fullname,
    address: data?.getInfoUser.address,
    university: data?.getInfoUser.university,
    company: data?.getInfoUser.company,
    email: data?.getInfoUser.email,
    phone: data?.getInfoUser.phone,
    description: data?.getInfoUser.description,
    id: data?.getInfoUser.id,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateInput>({ defaultValues: defaultValue });

  const [update, { loading }] = useUpdateProfile();

  const onSubmit: SubmitHandler<UpdateInput> = (data) => {
    void update({
      variables: {
        body: {
          ...data,
        },
        id: user?.id,
      },
      onCompleted: () => {
        toast.success('Update profile is successfully!');
        onClose();
        reset();
        refetch && void refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Box>
      {param.id === user?.id && (
        <Text
          onClick={onOpen}
          className="text-green-900 font-bold cursor-pointer"
        >
          View Details
        </Text>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="!font-bold">Edit Details</ModalHeader>
          <ModalCloseButton />
          <ModalHeader className="text-gray-500 !text-sm !pt-0">
            Provide details about yourself and any other pertinent information.
          </ModalHeader>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Box className="flex gap-4">
                <Box className="w-1/2 flex flex-col gap-4">
                  <EditImage user={user} />
                  <EditBio
                    user={user}
                    control={control}
                    errors={errors}
                    disable={loading}
                  />
                </Box>
                <Box className="w-1/2">
                  <EditInformation
                    user={user}
                    control={control}
                    errors={errors}
                    disable={loading}
                  />
                </Box>
              </Box>
            </ModalBody>
            <Divider />
            <Input
              type="submit"
              className="cursor-pointer !bg-[#1877F2] mt-4 font-bold text-white"
            />
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};
