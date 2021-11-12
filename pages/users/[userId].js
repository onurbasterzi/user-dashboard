import { useRouter } from "next/router";
import UserDetails from "../../components/users/user-details";
import { GET_USERS } from "../../api/queries";
import { withApollo } from "@apollo/react-hoc";

function UserDetailsPage({client}) {
  const router = useRouter();
  const userId = router.query.userId;
  console.log(userId);


  function getUserFromCache() {
    const data = client.readQuery({ query: GET_USERS });
    let cached_data = data.users.find(item => item.id === parseInt(userId));
    return cached_data
  }

  const user=getUserFromCache()
  console.log(user);


  return (
    <div className='userdetails'>
      <h2>User Details ({user.id})</h2>
      <UserDetails details={user}/>
    </div>
  );
}

export default withApollo(UserDetailsPage);
