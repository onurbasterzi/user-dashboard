import UserItem from "./user-item";

function UserList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((user) => (
        <UserItem key={user.id} id={user.id} name={user.name} lastname={user.lastname}></UserItem>
      ))}
    </ul>
  );
}

export default UserList;
