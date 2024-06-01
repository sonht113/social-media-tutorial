import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query GetUserById($id: String!) {
    getUserById(id: $id) {
      id
      phone
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
      files
    }
  }
`;
