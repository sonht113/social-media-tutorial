import { FC } from 'react';

import { Box, Image, Text, useDisclosure } from '@chakra-ui/react';
import { ProductType } from '../service/type';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import ProductDetail from './product-detail';
export const Category: FC<ProductType> = ({
  refetch,
  id,
  location,
  name,
  price,
  images,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        className="w-full bg-white rounded-xl border hover:cursor-pointer"
        onClick={onOpen}
      >
        <Image src={images![0]} className="w-full h-60 rounded-xl" />
        <Box className="p-3">
          <Text className="text-xl font-bold my-2">USD $ {price}</Text>
          <Text className="text-lg ">{name}</Text>
          <Text className="text-gray-500">{location}</Text>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <ProductDetail id={id} refetch={refetch} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
