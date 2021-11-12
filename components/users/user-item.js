import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUserEdit,
  faEye
  
} from "@fortawesome/free-solid-svg-icons";
import {confirmDialog} from '../ui/confirmDialog'


function UserItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;


  function DeleteUser() {
    props.onDelete(id);
  }

  function confirm() {
    confirmDialog(DeleteUser,'Delete confirmation', `Are you sure you want to delete ${name} ${lastname} ?`)
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
        <span>
          <FontAwesomeIcon className="mini-icon-font btn btn-detail btn-small" title='Details' icon={faEye} />
          </span>
        </Link>
        <Link href={"/users/update/" + id}>
          <span>
        <FontAwesomeIcon className="mini-icon-font btn btn-update btn-small" title='Edit' icon={faUserEdit} />
        </span>
        </Link>
        <button className="btn btn-delete btn-small" title='Delete' onClick={confirm}>
        <FontAwesomeIcon className="mini-icon-font" icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
}

export default UserItem;
