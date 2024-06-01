import { gql } from '@apollo/client';

export const CREATE_ROOM = gql`
  mutation CreateRoom($body: CreateRoomDto!) {
    createRoom(body: $body) {
      id
    }
  }
`;

export const GET_ROOM_BY_ID = gql`
  query GetRoomById($id: String!) {
    getRoomById(id: $id) {
      id
      name
      author {
        fullname
        avatar
        id
      }
      members {
        fullname
        avatar
        id
      }
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($body: CreateMessageDto!) {
    createMessage(body: $body) {
      id
    }
  }
`;

export const GET_ALL_MESSAGES = gql`
  query GetAllMessage($room: String!) {
    getAllMessage(room: $room) {
      author {
        fullname
        id
        avatar
      }
      content
      id
      room
      typeMessage
    }
  }
`;

export const GET_ALL_ROOMS = gql`
  query getAllRoom($idUser: String!) {
    getAllRoom(idUser: $idUser) {
      author {
        fullname
        id
        avatar
      }
      createdAt
      id
      members {
        fullname
        id
        avatar
      }
      name
      updatedAt
    }
  }
`;
