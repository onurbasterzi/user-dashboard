
import NewUserForm from "../../components/users/new-user-form";
import { addNewUser } from "../../api/queries";

function NewUserPage() {
 
 
  const [addUser, { loading, error  }] =   addNewUser(onSuccess)


  function onSuccess(){
        console.log('aaa');
  }

  function addUserHandler(props) {
    const uniqueId=Date.now().toString().substring(Date.now().toString().length-9)
    
    if (loading) {
      return <p>loading</p>;
    }

    if (error) {
      return <p>error</p>;
    }

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
    <section>
      <NewUserForm onAddUser={addUserHandler} />
    </section>
  );
}

export default NewUserPage;
