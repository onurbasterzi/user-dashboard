
import UserList from "../components/users/user-list";
import { getAllUsers, deleteUser, GET_USERS } from "../api/queries";
import { withApollo } from "@apollo/react-hoc";
import Loading from "../components/ui/loading";



function Home({ client }) {
  const { loading, error, data } = getAllUsers();
  const [deleteUserHandler] = deleteUser(onDeleteSuccess);

  if(loading) {
    return <Loading/>
  }

  if (error) {
    console.log("error");
    return <p>error</p>;
  }
 
  function onDeleteSuccess(rdata) {
    let newdata = [];
    for (let i = 0; i < data.users.length; i++) {
      const element = data.users[i];
      if (element.id != rdata["delete_users_by_pk"].id) {
        newdata.push(element);
      }
    }

    client.writeQuery({
      query:GET_USERS,
      data: {
        users: newdata,
      },
    });
   
  }

  function onDelete(id) {
    deleteUserHandler({ variables: { id } });
  }


  return (
    <div>
      <h1>User List</h1>
      <UserList onDelete={onDelete} items={data.users}></UserList>
    </div>
  );
}

export default withApollo(Home);
