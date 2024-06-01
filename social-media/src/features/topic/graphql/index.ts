import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
  query getTopics {
    topics {
      name
      color
      image
      rank
      id
    }
  }
`;
