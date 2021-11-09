import { useRouter } from "next/router";
import { getUserById } from "../../ORNEK_DATA";

function UserDetailsPage() {
  const router = useRouter();
  const userId = router.query.userId;
  console.log(userId);
  const user = getUserById(userId);
  console.log(user);

  if (!user) {
    return <p>No user found!</p>;
  }

  return (
    <div>
      <h1>{user.name +' '+ user.lastname}</h1>
    </div>
  );
}

export default UserDetailsPage;
