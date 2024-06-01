import {
  Box,
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import GroupCreateForm from './group-create-form';
import { useCreateGroup } from '../hooks/use-group-query';
import { GroupInput } from '../service/type';
import { BiPlus } from 'react-icons/bi';

const defaultValueForm = {
  name: '',
  description: '',
  avatar: '',
  coverImage: '',
};

type Props = {
  refetch?: () => void;
};

const CreateGroup = ({ refetch }: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GroupInput>({ defaultValues: defaultValueForm });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [createGroup, { loading }] = useCreateGroup();

  const onSubmit: SubmitHandler<GroupInput> = (data) => {
    if (data.avatar && data.coverImage) {
      void createGroup({
        variables: {
          body: {
            ...data,
            coverImage: data.coverImage[0],
            avatar: data.avatar[0],
            isPrivate: false,
          },
        },
        onCompleted: () => {
          refetch && void refetch();
          reset(defaultValueForm);
          onClose();
          toast.success('Create group successfully!');
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      });
    }
  };

  return (
    <Box className="!w-full">
      <Button
        leftIcon={<BiPlus className="text-xl" />}
        className="my-2 !text-[#0F66BB] !w-full"
        onClick={onOpen}
      >
        Create new group
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new groups</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <GroupCreateForm
                control={control}
                errors={errors}
                disable={loading}
              />
              <Divider className="mb-4" />
              <Input
                type="submit"
                className="!bg-[#1DA1F2] text-white cursor-pointer"
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateGroup;
