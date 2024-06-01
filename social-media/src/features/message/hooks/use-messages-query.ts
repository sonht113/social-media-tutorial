import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useLazyQuery,
  useMutation,
} from '@apollo/client';

import {
  CREATE_MESSAGE,
  CREATE_ROOM,
  GET_ALL_MESSAGES,
  GET_ALL_ROOMS,
  GET_ROOM_BY_ID,
} from '../graphql';
import { MessageInputType, RoomCreateType } from '../service/type';

export const useCreateRoom = () =>
  useMutation<
    { createRoom: { body: RoomCreateType; id: string } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_ROOM);

export const useGetRoomById = () => {
  return useLazyQuery(GET_ROOM_BY_ID);
};

export const useCreateMessage = () =>
  useMutation<
    { createMessage: { body: MessageInputType; status: string } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_MESSAGE);

export const useGetAllMessage = () => {
  return useLazyQuery(GET_ALL_MESSAGES);
};

export const useGetAllRoom = () => {
  return useLazyQuery(GET_ALL_ROOMS);
};
