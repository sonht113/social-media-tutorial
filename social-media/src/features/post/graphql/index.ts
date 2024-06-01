import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetAllPost($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {
    getAllPost(filter: $filter, page: $page, limit: $limit) {
      page
      total
      data {
        id
        authorsPostShared {
          avatar
          id
        }
        author {
          avatar
          id
          fullname
        }
        content
        images
        topic {
          image
          name
          color
          id
        }
        isPostToGroup {
          status
          idGroup
          verified
        }
        createdAt
        updatedAt
        usersLiked {
          avatar
          id
        }
      }
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query GetPostById($id: String!) {
    getPostById(id: $id) {
      content
      createdAt
      id
      updatedAt
      images
      isGhim
      author {
        fullname
        id
        avatar
      }
      isPostToGroup {
        status
        idGroup
      }
      topic {
        name
      }
      usersLiked {
        avatar
        createdAt
        dayOfBirth
        description
        email
        fullname
        gender
        id
        phone
      }
      authorsPostShared {
        avatar
        createdAt
        dayOfBirth
        description
        email
        fullname
        gender
        id
        phone
      }
    }
  }
`;

export const GET_POST_BY_GROUP = gql`
  query GetPostsByGroup($idGroup: String!, $limit: Float!, $page: Float!) {
    getPostsByGroup(idGroup: $idGroup, limit: $limit, page: $page) {
      data {
        id
        author {
          fullname
          avatar
          id
        }
        content
        images
        topic {
          image
          name
          color
          id
        }
        createdAt
        updatedAt
        usersLiked {
          fullname
          avatar
          id
        }
      }
      page
      total
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: CreatePostDto!) {
    createPost(body: $body) {
      content
      createdAt
      id
      images
      isGhim
      updatedAt
      usersLiked {
        fullname
        avatar
      }
      authorsPostShared {
        fullname
        avatar
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($idPost: String!, $idUser: String!) {
    likePost(idPost: $idPost, idUser: $idUser) {
      message
      status
    }
  }
`;

export const GET_POST_PY_AUTHOR = gql`
  query GetPostByAuthor($idAuthor: String!, $limit: Float!, $page: Float!) {
    getPostByAuthor(idAuthor: $idAuthor, limit: $limit, page: $page) {
      page
      total
      data {
        id
        authorsPostShared {
          fullname
          avatar
          id
        }
        author {
          fullname
          avatar
          id
        }
        content
        images
        topic {
          image
          name
          color
          id
        }
        createdAt
        updatedAt
        usersLiked {
          fullname
          avatar
          id
        }
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: String!) {
    deletePost(id: $id) {
      message
      status
    }
  }
`;

export const GHIM_POST = gql`
  mutation ghimPost($idPost: String!) {
    ghimPost(idPost: $idPost) {
      message
      status
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: String!, $body: UpdatePostDto!) {
    updatePost(id: $id, body: $body) {
      status
      message
    }
  }
`;

export const SHARE_POST = gql`
  mutation sharePost($idPost: String!, $idUser: String!) {
    sharePost(idPost: $idPost, idUser: $idUser) {
      status
      message
    }
  }
`;
