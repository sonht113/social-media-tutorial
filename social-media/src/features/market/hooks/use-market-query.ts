import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';
import {
  InputProductType,
  ProductType,
  ResPaginationProductData,
} from '../service/type';
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_USER,
  GET_PRODUCT_BY_ID,
  UPDATE_PRODUCT,
} from '../graphql';

export const useCreateProduct = () =>
  useMutation<
    { createProduct: { body: InputProductType } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_PRODUCT);

export const useGetProducts = (filter = {}, limit: number, page: number) => {
  return useQuery<
    { getProducts: ResPaginationProductData },
    OperationVariables
  >(GET_PRODUCTS, {
    variables: {
      filter: filter,
      limit: limit,
      page: page,
    },
  });
};

export const useGetProdcutById = (id: string) => {
  return useQuery<{ getProductById: ProductType }>(GET_PRODUCT_BY_ID, {
    variables: {
      id: id,
    },
  });
};

export const useGetProductsByUser = (
  filter = {},
  limit: number,
  page: number,
) => {
  return useQuery<{ getProductByUser: ProductType[] }>(GET_PRODUCTS_BY_USER, {
    variables: {
      filter: filter,
      limit: limit,
      page: page,
    },
  });
};

export const useUpdateProduct = () =>
  useMutation<
    {
      updateProduct: { id: string; body: InputProductType };
    },
    OperationVariables
  >(UPDATE_PRODUCT);

export const useDeleteProduct = () =>
  useMutation<
    {
      deleteProduct: { status: string };
    },
    OperationVariables
  >(DELETE_PRODUCT);
