import { gql } from 'apollo-boost';

export const ALL_USER_QUERY = gql`
  query AllUsers {
  users{
    id
    username
  }
} 
`