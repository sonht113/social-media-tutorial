import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($body: LoginUserDto!) {
    login(body: $body) {
      user {
        fullname
        avatar
        dayOfBirth
        description
        gender
        id
        phone
        email
        role
        createdAt
      }
      access_token
    }
  }
`;

export const SIGN_UP = gql`
  mutation Signup($body: CreateUserDto!) {
    signup(body: $body) {
      username
      id
    }
  }
`;

export const GET_INFOR_USER = gql`
  query GetInfoUser {
    getInfoUser {
      avatar
      createdAt
      coverImage
      dayOfBirth
      description
      email
      address
      description
      company
      university
      relationship
      fullname
      gender
      id
      phone
    }
  }
`;
