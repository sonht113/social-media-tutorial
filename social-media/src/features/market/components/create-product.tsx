import {
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
import { InputProductType } from '../service/type';
import { useCreateProduct } from '../hooks/use-market-query';
import toast from 'react-hot-toast';
import ProductForm from './product-form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiPlus } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';

type Props = {
  refetch?: () => void;
};

const CreateProduct = ({ refetch }: Props) => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createProduct, { loading }] = useCreateProduct();

  const handleChangeLocation = useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      },
    );
  }, []);

  const viewport = {
    latitude: latitude,
    longitude: longitude,
    width: '100%',
    height: '100px',
    zoom: 14,
  };

  const MAPBOX_TOKEN =
    'pk.eyJ1Ijoia2ltY3VvbmcyMDAyIiwiYSI6ImNsdnh6eXFscjA4NHEyam1lb2ozNnZ1bzQifQ.tWY8yh62AgoKqaEtjhi6yg';

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<InputProductType> = (data) => {
    console.log(data);
    data.category = parseFloat(data.category!.toString());
    void createProduct({
      variables: {
        body: data,
      },
      onCompleted: () => {
        toast.success('Create product successfully!');
        reset();
        onClose();
        refetch && void refetch();
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };
  return (
    <Box>
      <Button
        leftIcon={<BiPlus className="text-xl" />}
        className="my-2 !text-[#0F66BB] !w-full"
        onClick={() => {
          onOpen();
          handleChangeLocation;
        }}
      >
        Sale Item
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new product</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <ProductForm
                control={control}
                errors={errors}
                disable={loading}
              />
              {latitude && longitude ? (
                <ReactMapGL
                  {...viewport}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  mapboxAccessToken={MAPBOX_TOKEN}
                />
              ) : (
                <p>Đang tải vị trí...</p>
              )}
              <Divider className="mb-4" />
              <Button
                type="submit"
                className="!bg-[#1DA1F2] text-white cursor-pointer !w-full"
              >
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateProduct;
