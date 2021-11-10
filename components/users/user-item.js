import Link from "next/link";
import {deleteUser} from '../../api/queries'
function UserItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;

  function DeleteUser(){
    props.onDelete(id)
  }

  return (
    
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{date_of_birth}</td>
      <td>
      <Link  href={"/users/" + id}>
       <span className='btn btn-detail'>Details</span>
        </Link>
        <Link  href={"/users/" + id}>
       <span className='btn btn-update'>Update</span>
        </Link>
        <button className='btn btn-delete' onClick={DeleteUser}>Delete</button>
      </td>
    
    </tr>
  );
}

export default UserItem;
