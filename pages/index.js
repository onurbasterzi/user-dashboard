import UserList from "../components/users/user-list";
import { getAllUsers,deleteUser } from "../api/queries";



export default function Home() {

  const users = [];
  const { loading, error, data } = getAllUsers()
  const [deleteUserHandler]= deleteUser(onSuccess)

  function onSuccess() {
    window.location.reload()
  }

function onDelete(id){
  deleteUserHandler({variables:{id}})
}

  //const onDelete=(id)=>deleteUserHandler({variables:{id}})

  if (loading ) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }


  for (const key in data["users"]) {
    users.push({
      id: key,
      ...data["users"][key],
    });
  }
  
  return (
    <div className="container">
      <h1>User List</h1>
      <UserList onDelete={onDelete} items={users}>
      </UserList>

    </div>
  );
}
