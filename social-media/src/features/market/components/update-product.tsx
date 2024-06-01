import { useUpdateProduct } from '@/features';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';

const UpdateProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateProduct] = useUpdateProduct();

  const onSubmit = () => {
    void updateProduct({
      variables: {},
    });
  };

  return (
    <Box>
      <Button className="!bg-[#0B5FAE] !text-white w-full" onClick={onOpen}>
        Update Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <Divider className="my-2" />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UpdateProduct;
