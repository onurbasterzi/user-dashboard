import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUserEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./mobile-item.module.css";
import {confirmDialog} from '../ui/confirmDialog'

function MobileItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;

  function DeleteUser() {
    props.onDelete(id);
  }

  function confirm() {
      confirmDialog(DeleteUser)
  }

  return (
    <li className={classes.item}>
      <div>{name + " " + lastname}</div>
      <div>
        <Link href={"/users/" + id}>
          <FontAwesomeIcon
            className={`${classes.icon_font} ${classes.btn} ${classes.btn_mobile} ${classes.btn_detail}`}
           
            icon={faEye}
          />
        </Link>
        <Link href={"/users/update/" + id}>
          <FontAwesomeIcon
            className={`${classes.icon_font} ${classes.btn} ${classes.btn_mobile} ${classes.btn_update}`}
          
            icon={faUserEdit}
          />
        </Link>
        <button
          title="Delete"
          onClick={confirm}
          className={classes.reset_btn}
        >
          <FontAwesomeIcon
            className={`${classes.icon_font} ${classes.btn} ${classes.btn_mobile}  ${classes.btn_delete}`}
            icon={faTrashAlt}
          />
        </button>
      </div>
    </li>
  );
}

export default MobileItem;
