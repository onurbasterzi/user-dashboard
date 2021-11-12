import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUserEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { confirmDialog } from "../ui/confirmDialog";

function ActionButtons(props) {

    const user=props.items

    function DeleteUser() {
        props.onDelete(user.id);
      }

    function confirm() {
        //console.log('action',user.id);
        confirmDialog(
          DeleteUser,
          "Delete confirmation",
          `Are you sure you want to delete ${user.name} ${user.lastname} ?`
        );
      }
    
  return (<div>
    <Link href={"/users/" + user.id}>
      <span>
        <FontAwesomeIcon
          className="mini-icon-font btn btn-detail btn-small"
          title="Details"
          icon={faEye}
        />
      </span>
    </Link>
    <Link href={"/users/update/" + user.id}>
      <span>
        <FontAwesomeIcon
          className="mini-icon-font btn btn-update btn-small"
          title="Edit"
          icon={faUserEdit}
        />
      </span>
    </Link>
    <button
      className="btn btn-delete btn-small"
      title="Delete"
      onClick={confirm}
    >
      <FontAwesomeIcon className="mini-icon-font" icon={faTrashAlt} />
    </button>
  </div>)
}

export default ActionButtons;
