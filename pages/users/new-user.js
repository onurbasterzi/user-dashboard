import NewUserForm from "../../components/users/new-user-form";
import { addNewUser } from "../../api/queries";
import { withApollo } from "@apollo/react-hoc";
import { GET_USERS } from "../../api/queries";
import Loading from "../../components/ui/loading";
import {alertDialog} from '../../components/ui/alert'
function NewUserPage({ client }) {
  const [addUser, { loading, error }] = addNewUser(onSuccess);

  if (loading) {
    return (
      <section className="userdetails">
        <NewUserForm />
        <Loading />
      </section>
    );
  }

  function onSuccess(retrun_data) {
    addToCache(retrun_data.insert_users_one);
    alertDialog('User added successfully')
  }

  function addToCache(addedRow) {
    const data = client.readQuery({ query: GET_USERS });
    const inserted_data = {
      __typename: "users",
      id: addedRow.id,
      name: addedRow.name,
      lastname: addedRow.lastname,
      phone: addedRow.phone,
      email: addedRow.email,
      date_of_birth: addedRow.date_of_birth,
    };
    client.writeQuery({
      query: GET_USERS,
      data: {
        users: [...data.users, inserted_data],
      },
    });

    //console.log(data.users);
  }

  function addUserHandler(props) {
    const uniqueId = Date.now()
      .toString()
      .substring(Date.now().toString().length - 9);

    addUser({
      variables: {
        id: uniqueId,
        name: props.name,
        lastname: props.lastname,
        date_of_birth: props.date_of_birth,
        email: props.email,
        phone: props.phone,
      },
    });
  }

  return (
    <div>
      <section className="userdetails">
        <NewUserForm onAddUser={addUserHandler} />
      </section>
    </div>
  );
}

export default withApollo(NewUserPage);
