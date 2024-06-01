import { OperationVariables, useQuery } from '@apollo/client';
import { UserType } from '../services/type';
import { GET_USER_BY_ID } from '../graphql';

export const useGetUserById = (id: string) => {
  return useQuery<{ getUserById: UserType }, OperationVariables>(
    GET_USER_BY_ID,
    {
      variables: {
        id: id,
      },
    },
  );
};
