import UserItem from "./user-item";
import classes from "./styles/user-list.module.css"

function UserList(props) {
  
   const items=props.items
   //console.log(items);

  return (
    <div className={classes.table_responsive}>
    <table className={classes.users}> 
      <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>LAST NAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>DATE OF BIRTH</th>
        <th>#ACTIONS</th>
      </tr>
      </thead>
      <tbody>{items.map((user) => (<UserItem onDelete={props.onDelete} key={user.id} id={user.id} name={user.name} lastname={user.lastname} phone={user.phone}  email={user.email} date_of_birth={user.date_of_birth}></UserItem>))}</tbody>
    </table>
    </div>
  );
}

export default UserList;
