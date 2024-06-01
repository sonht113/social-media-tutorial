import {
  Box,
  Divider,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
} from '@chakra-ui/react';
import {} from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  files: string[] | undefined;
};

export const ListPhoto = ({ files }: Props) => {
  const [imgPreview, setImgPreview] = useState('');
  const featuredPhoto = files?.slice(0, 9);
  const [allFiles, setAllFiles] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imagePreview = (src: string) => {
    setImgPreview(src);
  };

  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex justify-between">
        <Text className="font-bold">Photos and Videos</Text>
        <Text
          className="text-green-900 font-bold cursor-pointer"
          onClick={() => setAllFiles(!allFiles)}
        >
          {allFiles === false ? 'See all' : 'See less'}
        </Text>
      </Box>
      <Divider className="my-2" />
      <Box className="w-full md:columns-3 !space-y-4">
        {allFiles === false
          ? featuredPhoto?.map((item) => (
              <Image
                key={item}
                src={item}
                className="bg-cover rounded-md cursor-pointer"
                onClick={() => {
                  onOpen();
                  imagePreview(item);
                }}
              />
            ))
          : files?.map((item) => (
              <Image
                key={item}
                src={item}
                className="bg-cover rounded-md cursor-pointer"
                onClick={() => {
                  onOpen();
                  imagePreview(item);
                }}
              />
            ))}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={imgPreview} className="w-full" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
