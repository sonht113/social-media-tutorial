import { useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiCamera } from 'react-icons/bi';
import { FaFacebookMessenger } from 'react-icons/fa';

import { Upload } from '@/components';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useCreateRoom,
  useDeleteFriend,
  useGetFriends,
  useGetUserById,
  useQueryInfoUser,
  useSendReqFriend,
  useUpdateProfile,
} from '@/features';

export const ProfileAvatar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState([]);
  const [update] = useUpdateProfile();
  const param = useParams();
  const { data: authorData } = useQueryInfoUser();
  const { data: userData, refetch } = useGetUserById(param.id!);
  const [sendReqFriend] = useSendReqFriend();
  const { handleSubmit } = useForm();
  const [createRoom] = useCreateRoom();
  const navigate = useNavigate();
  const { data: friends } = useGetFriends();
  const [deleteFriend] = useDeleteFriend();

  const updateAvatar = () => {
    if (value.length > 0) {
      void update({
        variables: {
          body: {
            avatar: value[0],
          },
          id: authorData?.getInfoUser.id,
        },
        onCompleted: () => {
          toast.success('Update avatar is successfully!');
          onClose();
          refetch && void refetch();
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    }
  };

  const handleSendReqFriend = () => {
    void sendReqFriend({
      variables: {
        friendId: param.id,
      },
      onCompleted: async () => {
        toast.success('Send request is successfully!');
        await refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const handleDeleteFriend = () => {
    void deleteFriend({
      variables: {
        friendId: param.id,
      },
      onCompleted: async () => {
        toast.success('Delete friend is successfully!');
        await refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const result = [];
  result.push(authorData?.getInfoUser.id);
  result.push(userData?.getUserById.id);

  const idNameRoom = result.filter(
    (item) => item !== authorData?.getInfoUser.id,
  );
  const { data: nameRoom } = useGetUserById(idNameRoom[0]!);

  const handleCreateRoom = () => {
    void createRoom({
      variables: {
        body: {
          members: [param.id, authorData?.getInfoUser.id],
          name: nameRoom?.getUserById.fullname,
        },
      },
      onCompleted: async (data) => {
        navigate(`/message/${data.createRoom.id}`);
        await refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Box className="bg-white flex flex-col justify-center items-center w-full py-4 rounded-lg border-2 mt-4">
      <Box className="relative">
        <Avatar src={userData?.getUserById.avatar} size="2xl" />
        <BiCamera
          className="cursor-pointer bg-gray-300 p-1 text-2xl rounded-full absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2"
          onClick={onOpen}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change your avatar</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit(updateAvatar)}>
                <Upload
                  typeUpload="avatar"
                  onChange={(data) => setValue(data as [])}
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
      <Text className="font-bold mt-5" fontSize={{ base: 'md', lg: 'lg' }}>
        {userData?.getUserById.fullname}
      </Text>
      <Text className="text-gray-500 mt-2 mb-4" fontSize="sm">
        {userData?.getUserById.description}
      </Text>
      {authorData?.getInfoUser.id === param.id ? (
        ''
      ) : (
        <Box className="flex gap-4">
          {friends?.getFriends.friends.filter(
            (friend) => friend.id !== param.id,
          ) ? (
            <Button onClick={handleSendReqFriend}>Add Friend</Button>
          ) : (
            <Button onClick={handleDeleteFriend}>Delete Friend</Button>
          )}

          <IconButton
            aria-label="Add to friends"
            icon={<FaFacebookMessenger />}
            size={{ base: 'xs', lg: 'md' }}
            onClick={handleCreateRoom}
          />
        </Box>
      )}
    </Box>
  );
};
