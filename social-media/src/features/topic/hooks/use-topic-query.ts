import { OperationVariables, useQuery } from '@apollo/client';

import { GET_TOPICS } from '../graphql';
import { Topic } from '../services/type';

export const useGetAllTopic = () =>
  useQuery<{ topics: Topic[] }, OperationVariables>(GET_TOPICS);
