
import { useState } from "react";
import UserList from "../components/users/user-list";
import { getAllUsers, deleteUser } from "../api/queries";

export default function Home() {
  
  let { loading, error, data } = getAllUsers(onGetSuccess);
  const [deleteUserHandler] = deleteUser(onDeleteSuccess);
  const [users,setUsers]=useState([])
 

  function onGetSuccess(){
      setUsers([...data['users']])
  }


  function onDeleteSuccess(rdata) {
    
    let newdata = [];
    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      if (element.id != rdata["delete_users_by_pk"].id) {
        console.log(element);
        newdata.push(element);
      }
    }
    // const newdata=users.splice(users.findIndex(function(i){return i.id === rdata["delete_users_by_pk"].id}), 1);
    setUsers(newdata)
  }

  function onDelete(id) {
    deleteUserHandler({ variables: { id } });
  }

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    setReload(true)
    return <p>error</p>;
  }
 

  return (
    <div>
      <h1>User List</h1>
      <UserList onDelete={onDelete}  items={users}></UserList>
    </div>
  );
}
