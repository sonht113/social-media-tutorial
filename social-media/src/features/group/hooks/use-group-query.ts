import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';

import {
  ACCEPT_MEMBE_REQ_JOIN_GROUP,
  CREATE_GROUP,
  DELETE_GROUP,
  GET_GROUPS,
  GET_GROUP_BY_ID,
  JOIN_GROUP,
  LEAVE_GROUP,
} from '../graphql';
import {
  GroupInput,
  GroupType,
  GroupUpdateType,
  ResPaginationGroupData,
} from '../service/type';

export const useCreateGroup = () =>
  useMutation<
    { createGroup: { status: string; body: GroupInput } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(CREATE_GROUP);

export const useGetGroups = (filter = {}, limit: number, page: number) => {
  return useQuery<{ getGroups: ResPaginationGroupData }, OperationVariables>(
    GET_GROUPS,
    {
      variables: {
        filter: filter,
        limit: limit,
        page: page,
      },
    },
  );
};

export const useGetGroupById = (id: string) => {
  return useQuery<{ getGroupById: GroupType }, OperationVariables>(
    GET_GROUP_BY_ID,
    {
      variables: {
        id: id,
      },
    },
  );
};
export const useJoinGroup = () =>
  useMutation<
    { joinGroup: { status: string; message: string } },
    OperationVariables
  >(JOIN_GROUP);

export const useAcceptMemberJoinGroup = () =>
  useMutation<
    { acceptMemberJoinGroup: { status: string; message: string } },
    OperationVariables
  >(ACCEPT_MEMBE_REQ_JOIN_GROUP);

export const useLeaveGroup = () =>
  useMutation<{ leaveGroup: { status: string } }, OperationVariables>(
    LEAVE_GROUP,
  );

export const useDeleteGroup = () =>
  useMutation<{ deleteGroup: { status: string } }, OperationVariables>(
    DELETE_GROUP,
  );

export const useUpdateGroup = () =>
  useMutation<{ updateGroup: { id: string; body: GroupUpdateType } }>;
