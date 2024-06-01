import { OperationVariables, useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../graphql';
import { CategoryType } from '../service/type';

export const useQueryCategories = () =>
  useQuery<{ categories: CategoryType[] }, OperationVariables>(GET_CATEGORIES);
