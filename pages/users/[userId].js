import { useRouter } from "next/router";
import {getUserById} from "../../api/queries"
import UserDetails from "../../components/users/user-details";

function UserDetailsPage() {
  const router = useRouter();
  const userId = router.query.userId;
  console.log(userId);

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
    <div className='userdetails'>
      <h2>User Details ({user.id})</h2>
      <UserDetails details={user}/>
    </div>
  );
}

export default UserDetailsPage;
