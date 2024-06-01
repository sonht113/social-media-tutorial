import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($body: CreateCommentDto!) {
    createComment(body: $body) {
      id
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($limit: Float!, $page: Float!, $postId: String!) {
    getComments(limit: $limit, page: $page, postId: $postId) {
      page
      total
      data {
        author {
          avatar
          fullname
          id
        }
        postId
        content
        createdAt
        id
        images
        videos
        replies {
          author {
            avatar
            fullname
            id
          }
          content
          createdAt
          id
        }
      }
    }
  }
`;

export const CREATE_GET_COMMENT_REPLY = gql`
  mutation ReplyComment($body: CreateCommentDto!, $idCmtParent: String!) {
    replyComment(body: $body, idCmtParent: $idCmtParent) {
      message
      status
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: String!, $idCmtParent: String!) {
    deleteComment(id: $id, idCmtParent: $idCmtParent) {
      id
    }
  }
`;
