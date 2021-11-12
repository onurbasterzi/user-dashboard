import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUserEdit,
  faEye
  
} from "@fortawesome/free-solid-svg-icons";
import {confirmDialog} from '../ui/confirmDialog'
import { deleteUser } from "../../api/queries";


function UserItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;


  function DeleteUser() {
    props.onDelete(id);
  }

  function confirm(){
    confirmDialog(DeleteUser)
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
        <Link href={"/users/" + id}>
         
          <FontAwesomeIcon className="mini-icon-font btn btn-detail btn-small" title='Details' icon={faEye} />
        </Link>
        <Link href={"/users/update/" + id}>
        <FontAwesomeIcon className="mini-icon-font btn btn-update btn-small" title='Edit' icon={faUserEdit} />
        </Link>
        <button className="btn btn-delete btn-small" title='Delete' onClick={confirm}>
        <FontAwesomeIcon className="mini-icon-font" icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
}

export default UserItem;
