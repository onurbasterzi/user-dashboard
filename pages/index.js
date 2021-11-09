import UserList from "../components/users/user-list";
import { getAllUsers } from "../api/queries";



export default function Home() {


  const { loading, error, data } = getAllUsers()

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  const users = [];

  for (const key in data["users"]) {
    users.push({
      id: key,
      ...data["users"][key],
    });
  }
  
  return (
    <div className="container">
      <h1>USER LIST</h1>
      <UserList items={users}></UserList>
    </div>
  );
}
