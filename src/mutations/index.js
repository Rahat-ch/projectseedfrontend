import { gql } from 'apollo-boost';

export const GOOGLE_AUTH_MUTATION = gql`
  mutation googleauth($input: AuthInput!){
    authGoogle(input:$input){
      token
      name
    }
  }
`