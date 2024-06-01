import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($body: CreateMarketDto!) {
    createProduct(body: $body) {
      id
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {
    getProducts(filter: $filter, page: $page, limit: $limit) {
      page
      total
      data {
        id
        name
        description
        price
        images
        videos
        location
        author {
          id
          fullname
          avatar
        }
        createdAt
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: String!) {
    getProductById(id: $id) {
      id
      name
      description
      price
      images
      videos
      location
      author {
        id
        fullname
        avatar
      }
      createdAt
    }
  }
`;

export const GET_PRODUCTS_BY_USER = gql`
  query GetProductsByUser(
    $filter: ParamsQueryDto!
    $limit: Float!
    $page: Float!
  ) {
    getProductsByUser(filter: $filter, page: $page, limit: $limit) {
      page
      total
      data {
        id
        name
        description
        price
        images
        videos
        location
        author {
          id
          fullname
          avatar
        }
        createdAt
      }
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: String!, $body: CreateMarketDto!) {
    updateProduct(id: $id, body: $body) {
      id
    }
  }
`;

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      id
      name
      rank
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
