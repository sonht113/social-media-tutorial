import { useState } from 'react';

import {
  Box,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiCamera } from 'react-icons/bi';

import { useUpdateProfile } from '../hooks/use-update-profile';
import { Upload } from '@/components';
import { useQueryInfoUser } from '@/features/auth';
import { useParams } from 'react-router-dom';
import { useGetUserById } from '@/features/user/hooks/use-user-query';

export const CoverImage = () => {
  const [coverImage, setCoverImage] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();
  const { data, refetch } = useGetUserById(params.id as string);
  const { data: userData } = useQueryInfoUser();

  const [update] = useUpdateProfile();

  const { handleSubmit } = useForm();
  const updateCoverImage = () => {
    void update({
      variables: {
        body: {
          coverImage: coverImage[0],
        },
        id: data?.getUserById.id,
      },
      onCompleted: async () => {
        toast.success('Update profile is successfully!');
        onClose();
        await refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Box className="relative group">
      {data?.getUserById.coverImage ? (
        <Image
          alt=""
          className="w-full h-[500px] bg-cover group-hover:opacity-75"
          src={data.getUserById.coverImage}
        />
      ) : (
        <Image src="" alt="" className="w-full h-[500px] bg-cover" />
      )}
      {params.id === userData?.getInfoUser.id ? (
        <Box className="hidden absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute md:bottom-0 md:right-0 h-10 w-10 bg-gray-500 group-hover:flex justify-center items-center rounded-full cursor-pointer">
          <BiCamera
            className="text-2xl text-white  cursor-pointer"
            onClick={onOpen}
          />
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Change your cover image</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <form onSubmit={handleSubmit(updateCoverImage)}>
                  <Upload
                    typeUpload="coverImage"
                    onChange={(data: unknown) => setCoverImage(data as [])}
                  />
                  <Input
                    type="submit"
                    className="my-4 mb-2 cursor-pointer !bg-green-500"
                  />
                </form>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};
