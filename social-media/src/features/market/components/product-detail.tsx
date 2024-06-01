import { Avatar, Box, Button, IconButton, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { ProductType } from '../service/type';
import {
  useCreateRoom,
  useDeleteProduct,
  useGetProdcutById,
  useQueryInfoUser,
} from '@/features';
import { useMemo } from 'react';
import { CiCircleRemove, CiShare2, CiShoppingTag } from 'react-icons/ci';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { EffectCube, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import UpdateProduct from './update-product';

const ProductDetail = ({ id, refetch, onClose }: ProductType) => {
  const navigate = useNavigate();
  const { data } = useGetProdcutById(id!);
  const productDetail = useMemo(() => {
    return data?.getProductById;
  }, [data]);
  const { data: userData } = useQueryInfoUser();
  const [createRoom] = useCreateRoom();
  const [deleteProduct] = useDeleteProduct();

  const handleCreateRoom = () => {
    void createRoom({
      variables: {
        body: {
          members: [productDetail?.author?.id, userData?.getInfoUser.id],
          name: productDetail?.name,
        },
      },
      onCompleted: async (data) => {
        navigate(`/message/${data.createRoom.id}`);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const handleDeleteProduct = () => {
    void deleteProduct({
      variables: {
        id: productDetail?.id,
      },
      onCompleted: () => {
        onClose && void onClose();
        refetch && void refetch();
      },
    });
  };

  return (
    <>
      <Box className="flex gap-2 p-2">
        <Box className="w-6/12">
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {productDetail?.images?.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box className="w-6/12">
          <Text className="font-bold text-3xl">{productDetail?.name}</Text>
          <Box className="flex justify-between items-center">
            <Text className="text-[#147ADA] font-bold text-xl">
              ${productDetail?.price}
            </Text>
            <Box className="flex gap-2">
              <IconButton icon={<CiShare2 />} aria-label={''} />
              <IconButton icon={<CiShoppingTag />} aria-label="" />
              {productDetail?.author?.id === userData?.getInfoUser.id && (
                <IconButton
                  icon={<CiCircleRemove />}
                  aria-label=""
                  onClick={handleDeleteProduct}
                />
              )}
            </Box>
          </Box>
          <Text className="text-[#898694] mt-4 font-bold">Description</Text>
          <Text className="font-bold">{productDetail?.description}</Text>
          <Text className="text-[#898694] mt-4 font-bold">Location</Text>
          <Text className="font-bold">{productDetail?.location}</Text>
        </Box>
      </Box>
      {userData?.getInfoUser.id !== productDetail?.author?.id ? (
        <Box className="bg-[#F1F5F9] rounded-lg">
          <Box className="flex items-center gap-4 p-2">
            <IoChatbubbleEllipsesSharp className="text-[#6665F8]" />
            <Text>Send Message to seller</Text>
            <Link to={`/profile/${productDetail?.author?.id}`}>
              <Box className="flex items-center gap-2 cursor-pointer">
                <Avatar src={productDetail?.author?.avatar} />
                <Text className="font-bold">
                  {productDetail?.author?.fullname}
                </Text>
              </Box>
            </Link>
          </Box>
          <Button
            className="!bg-[#0B5FAE] !text-white w-full"
            onClick={handleCreateRoom}
          >
            Send Message
          </Button>
        </Box>
      ) : (
        <UpdateProduct />
      )}
    </>
  );
};

export default ProductDetail;
