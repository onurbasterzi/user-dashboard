import Link from "next/link";
function UserItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;

  function deleteUser(){
   console.log(id);
  } 

  return (
    <li>
      <Link href={"/users/" + id}>
        {id + " " + name + " " + lastname}
        </Link>
        <button onClick={deleteUser}>Delete User</button>
    </li>
  );
}

export default UserItem;
