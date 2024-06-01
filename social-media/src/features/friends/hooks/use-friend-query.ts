import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';
import { CreateFriendType, ListFriendType } from '../service/type';
import {
  ACCEPT_FRIEND_REQUEST,
  DELETE_FRIEND,
  GET_USERS,
  GET_FRIENDS,
  REJECT_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST,
  CREATE_FRIEND,
} from '../graphql';
import { ResAllUserPagination } from '@/features/user';

export const useGetFriends = () => {
  return useQuery<{ getFriends: ListFriendType }>(GET_FRIENDS);
};

export const useSendReqFriend = () =>
  useMutation<
    { sendReqFriend: { status: string; message: string } },
    OperationVariables
  >(SEND_FRIEND_REQUEST);

export const useAcceptReqFriend = () =>
  useMutation<
    { acceptReqFriend: { status: string; message: string } },
    OperationVariables
  >(ACCEPT_FRIEND_REQUEST);

export const useDeleteFriend = () =>
  useMutation<
    { deleteFriend: { status: string; message: string } },
    OperationVariables
  >(DELETE_FRIEND);

export const useRejectReqFriend = () =>
  useMutation<
    { rejectReqFriend: { status: string; message: string } },
    OperationVariables
  >(REJECT_FRIEND_REQUEST);

export const useGetAllUser = (limit: number, page: number) => {
  return useQuery<{ users: ResAllUserPagination }, OperationVariables>(
    GET_USERS,
    {
      variables: {
        limit: limit,
        page: page,
      },
    },
  );
};

export const useCreateFriend = () =>
  useMutation<
    { createFriend: { body: CreateFriendType; idUser: string } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_FRIEND);
