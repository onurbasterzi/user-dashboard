import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  {
    users {
      id
      name
      lastname
      phone
      email
      date_of_birth
    }
  }
`;


export function getAllUsers(){
  return useQuery(GET_USERS);
}

