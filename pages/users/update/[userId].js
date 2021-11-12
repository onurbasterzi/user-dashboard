import { useRouter } from "next/router";
import UpdateForm from "../../../components/users/update-form";
import {  updateUserById,GET_USERS } from "../../../api/queries";
import { withApollo } from "@apollo/react-hoc";
import Loading from "../../../components/ui/loading";
import {alertDialog} from '../../../components/ui/alert'

function UpdateUserPage({client}) {
  const router = useRouter();
  const userId = router.query.userId;
  //console.log(userId);

  const [updateUser,{loading}] = updateUserById(onSuccess);

  if(loading){
    return <Loading/>
  }
  
  function onSuccess() {
    alertDialog('User updated successfully')
  }

  function getUserFromCache() {
    const data = client.readQuery({ query: GET_USERS });
    let cached_data = data.users.find(item => item.id === parseInt(userId));
    return cached_data
  }


  const user = getUserFromCache()
  //console.log(user);

  function updateUserHandler(props) {
    updateUser({
      variables: {
        id: userId,
        name: props.name,
        lastname: props.lastname,
        phone: props.phone,
        date_of_birth: props.date_of_birth,
        email: props.email,
      },
    });
  }

  return (
    <section className="userdetails">
      <UpdateForm onUpdateUser={updateUserHandler} details={user}></UpdateForm>
    </section>
  );
}

export default withApollo(UpdateUserPage);
