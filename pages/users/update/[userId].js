import { useRouter } from "next/router";
import UpdateForm from "../../../components/users/update-form";
import { getUserById, updateUserById } from "../../../api/queries";
function UpdateUserPage() {
  const router = useRouter();
  const userId = router.query.userId;
  console.log(userId);

  const { loading, error, data } = getUserById(userId);
  const [updateUser] = updateUserById(onSuccess);

  function onSuccess() {
    console.log("update success");
  }

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }
  
  if (!data) {
    return <p>No user found!</p>;
  }

  const user = data["users_by_pk"];
  console.log(data["users_by_pk"]);

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

export default UpdateUserPage;
