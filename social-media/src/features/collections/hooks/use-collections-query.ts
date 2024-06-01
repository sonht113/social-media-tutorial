import {
  ApolloCache,
  DefaultContext,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';
import {
  CollectionInputType,
  CollectionUpdateInputType,
  ResPaginationCollectionData,
  SavedType,
} from '../service';
import {
  CREATE_COLLECTION,
  DELETE_COLLECTION,
  GET_COLLECTIONS,
  GET_SAVED,
  UPDATE_COLLECTION,
  UPDATE_POSTSAVED,
} from '../graphql';

export const useCreateCollections = () =>
  useMutation<{ variables: { body: CollectionInputType } }, OperationVariables>(
    CREATE_COLLECTION,
  );

export const useGetSaved = () => {
  return useQuery<{ getSaved: SavedType }, OperationVariables>(GET_SAVED);
};

export const useGetCollections = (
  idSaved: string,
  limit: number,
  page: number,
) => {
  return useQuery<
    { getCollections: ResPaginationCollectionData },
    OperationVariables
  >(GET_COLLECTIONS, {
    variables: {
      idSaved: idSaved,
      limit: limit,
      page: page,
    },
  });
};

export const useUpdateCollection = () =>
  useMutation<
    { variables: { body: CollectionUpdateInputType; id: string } },
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >(UPDATE_COLLECTION);

export const useDeleteCollection = () =>
  useMutation<{ id: string }, OperationVariables>(DELETE_COLLECTION);

export const useUpdatePostSaved = () =>
  useMutation<{
    variables: {
      idPost: string;
      idUser: string;
    };
  }>(UPDATE_POSTSAVED);
