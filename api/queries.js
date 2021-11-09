import { useQuery, useMutation, gql } from "@apollo/client";

const GET_LAST_ID = gql`
  {
    users(limit: 1, order_by: { id: desc }) {
      id
    }
  }
`;


const DELETE_USER=gql`
mutation deleteUser($id: Int!) {
  delete_users_by_pk(id: $id) {
    id
  }
}
`

 const ADD_USER = gql`
  mutation addUser(
    $date_of_birth: date!
    $email: String!
    $id: Int!
    $lastname: String!
    $name: String!
    $phone: String!
  ) {
    insert_users_one(
      object: {
        id: $id
        email: $email
        date_of_birth: $date_of_birth
        lastname: $lastname
        name: $name
        phone: $phone
      }
    ) {
      id
    }
  }
`;

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

const GET_USER_BY_ID = gql`
  query user($id: Int!) {
    users_by_pk(id: $id) {
      date_of_birth
      email
      id
      lastname
      name
      phone
    }
  }
`;

export function getAllUsers() {
  return useQuery(GET_USERS);
}

export function getUserById(id) {
  return useQuery(GET_USER_BY_ID, { variables: { id: id } });
}

export function addNewUser(callback) {
  return useMutation(ADD_USER,{onCompleted(data){
    if(callback){
      callback();
    }
    else{
      console.log('islem başarılı');
    }
    
  }})
 
}

// export function AddNewUser() {
//   const { loading,error,data } = getLastId()
//   const _id=0

//   if( !loading && !error){
//     if(data){
//       _id=data["users"][0].id;
//       console.log(_id);
//     }

//     return useMutation(ADD_USER,{variables:{id:_id}});
//     //console.log('sadsads');

//   }

// }

export function getLastId() {
  return useQuery(GET_LAST_ID);
}
