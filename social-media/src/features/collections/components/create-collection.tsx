import {
  Input,
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import {
  useCreateCollections,
  useGetSaved,
} from '../hooks/use-collections-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CollectionInputType } from '../service';
import toast from 'react-hot-toast';
import { CreateCollectionForm } from './create-collection-form';

const defaultValues = {
  name: '',
  avatar: '',
};

type Props = {
  refetch?: () => void;
};

export const CreateCollection = ({ refetch }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: saved } = useGetSaved();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CollectionInputType>({ defaultValues: defaultValues });

  const [createCollection, { loading }] = useCreateCollections();

  const onSubmit: SubmitHandler<CollectionInputType> = (data) => {
    data.saved = saved?.getSaved?.id;
    if (data.avatar) {
      void createCollection({
        variables: {
          body: {
            ...data,
            avatar: data.avatar[0],
          },
        },
        onCompleted: () => {
          reset(defaultValues);
          onClose();
          toast.success('Create collection successfully!');
          refetch && void refetch();
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      });
    }
  };

  return (
    <Box>
      <Button
        leftIcon={<BiPlus className="text-xl" />}
        className="my-2 bg-[#E7EFF7] !text-[#0F61AF]"
        onClick={onOpen}
      >
        Create new collection
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new collection</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <CreateCollectionForm
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
