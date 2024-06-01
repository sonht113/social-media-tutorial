import { gql } from '@apollo/client';

export const CREATE_GROUP = gql`
  mutation createGroup($body: CreateGroupDto!) {
    createGroup(body: $body) {
      name
      avatar
      createdAt
    }
  }
`;

export const GET_GROUPS = gql`
  query GetGroups($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {
    getGroups(filter: $filter, page: $page, limit: $limit) {
      data {
        name
        id
        avatar
        description
      }
    }
  }
`;

export const GET_GROUP_BY_ID = gql`
  query GetGroupById($id: String!) {
    getGroupById(id: $id) {
      allFiles
      avatar
      coverImage
      createdAt
      description
      id
      name
      updatedAt
      isPrivate
      admins {
        fullname
        id
        avatar
      }
      members {
        fullname
        id
        avatar
      }
      membersReq {
        fullname
        id
        avatar
      }
      author {
        fullname
        id
        avatar
      }
    }
  }
`;

export const JOIN_GROUP = gql`
  mutation JoinGroup($id: String!) {
    joinGroup(id: $id) {
      status
      message
    }
  }
`;

export const ACCEPT_MEMBE_REQ_JOIN_GROUP = gql`
  mutation AcceptMemberReqJoinGroup($idGroup: String!, $idMemberReq: String!) {
    acceptMemberReqJoinGroup(idGroup: $idGroup, idMemberReq: $idMemberReq) {
      status
      message
    }
  }
`;

export const LEAVE_GROUP = gql`
  mutation LeaveGroup($id: String!) {
    leaveGroup(id: $id) {
      status
      message
    }
  }
`;

export const DELETE_GROUP = gql`
  mutation DeleteGroup($id: String!) {
    deleteGroup(id: $id) {
      status
      message
    }
  }
`;

export const UPDATE_GROUP = gql`
  mutation UpdateGroup($id: String!, $body: UpdateGroupDto!) {
    updateGroup(id: $id, body: $body) {
      status
      message
    }
  }
`;
