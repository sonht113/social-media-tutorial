import { gql } from '@apollo/client';

export const CREATE_COLLECTION = gql`
  mutation CreateCollection($body: CreateCollectionDto!) {
    createCollection(body: $body) {
      id
      name
    }
  }
`;

export const GET_SAVED = gql`
  query GetSaved {
    getSaved {
      id
      markets
      posts {
        author {
          id
          fullname
          avatar
        }
        authorsPostShared {
          id
          fullname
          avatar
        }
        content
        createdAt
        id
        images
        topic {
          name
        }
        updatedAt
        usersLiked {
          id
          fullname
          avatar
        }
        videos
      }
    }
  }
`;

export const GET_COLLECTIONS = gql`
  query GetCollections($idSaved: String!, $limit: Float!, $page: Float!) {
    getCollections(idSaved: $idSaved, limit: $limit, page: $page) {
      page
      total
      data {
        id
        name
        avatar
      }
    }
  }
`;

export const UPDATE_COLLECTION = gql`
  mutation UpdateCollection($id: String!, $body: UpdateCollectionDto!) {
    updateCollection(id: $id, body: $body) {
      status
    }
  }
`;

export const DELETE_COLLECTION = gql`
  mutation DeleteCollection($id: String!) {
    deleteCollection(id: $id) {
      status
    }
  }
`;

export const UPDATE_POSTSAVED = gql`
  mutation UpdatePostSaved($idPost: String!, $idSaved: string!) {
    updatePostSaved(idPost: $idPost, idSaved: $idSaved) {
      status
      message
    }
  }
`;
