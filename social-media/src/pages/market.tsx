import { Box, Grid, Text } from '@chakra-ui/react';

import NavbarLayout from '../layout/navbar-layout/index';
import { Category, CartSideBar, useGetProducts } from '@/features';
import { FILTER, LIMIT, PAGE } from '@/data';
import { useMemo } from 'react';

export const Market = () => {
  const { data, refetch } = useGetProducts(FILTER, LIMIT, PAGE);
  const products = useMemo(() => {
    return data?.getProducts.data;
  }, [data]);

  return (
    <NavbarLayout navBarChildren={<CartSideBar refetch={refetch} />}>
      <Box className="w-ful mx-2 ">
        <Text className="text-2xl font-bold my-2">Suggested to you</Text>
        <Grid
          templateColumns={{
            sm: 'repeat(2,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(4,1fr)',
            xl: 'repeat(5, 1fr)',
          }}
          gap={4}
        >
          {products?.map((item) => (
            <Category
              name={item.name}
              key={item.id}
              images={item.images}
              location={item.location}
              price={item.price}
              id={item.id}
              refetch={refetch}
            />
          ))}
        </Grid>
      </Box>
    </NavbarLayout>
  );
};
