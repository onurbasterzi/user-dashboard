import UserList from "../components/users/user-list";
import MobileList from '../components/users/mobile-list'
import {  deleteUser, GET_USERS } from "../api/queries";
import { withApollo } from "@apollo/react-hoc";
import Loading from "../components/ui/loading";





function Home({ client }) {

  let data = client.readQuery({ query: GET_USERS });
  const [deleteUserHandler,{loading}] = deleteUser(onDeleteSuccess);

  if(loading){
    return <Loading/>
  }


  function isMobile() {
    return (  window.innerWidth <= 768  );
  }

  function onDeleteSuccess(returned_data) {

    // let newdata = [];
    // for (let i = 0; i < data.users.length; i++) {
    //   const element = data.users[i];
    //   if (element.id != returned_data.delete_users_by_pk.id) {
    //     newdata.push(element);
    //   }
    // }
    // client.writeQuery({
    //   query: GET_USERS,
    //   data: {
    //     users: newdata,
    //   },
    // });
  }


  function onDelete(id) {
    deleteUserHandler({ variables: { id } });
       let newdata = [];
    for (let i = 0; i < data.users.length; i++) {
      const element = data.users[i];
      if (element.id != id) {
        newdata.push(element);
      }
    }
    client.writeQuery({
      query: GET_USERS,
      data: {
        users: newdata,
      },
    });
   
  }

  return (


    <div>
      <h1>User List</h1>
      {isMobile()?<MobileList onDelete={onDelete} items={data.users}></MobileList>:<UserList onDelete={onDelete} items={data.users}></UserList>}
      
    </div>
  );
}

export default withApollo(Home);
