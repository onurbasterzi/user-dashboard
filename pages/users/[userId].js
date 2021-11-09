import { useRouter } from "next/router";
// import { getUserById } from "../../ORNEK_DATA";
import {getUserById} from "../../api/queries"

function UserDetailsPage() {
  const router = useRouter();
  const userId = router.query.userId;
  console.log(userId);
  //const user = getUserById(userId);

  const { loading, error, data } = getUserById(userId)

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  const user=data['users_by_pk']
  console.log(data['users_by_pk']);

  if (!data) {
    return <p>No user found!</p>;
  }

  return (
    <div>
      <h1>{user.name +' '+ user.lastname}</h1>
    </div>
  );
}

export default UserDetailsPage;
