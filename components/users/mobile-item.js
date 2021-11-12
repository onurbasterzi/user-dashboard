import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUserEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./styles/mobile-item.module.css";
import {confirmDialog} from '../ui/confirmDialog'

function MobileItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;

  function DeleteUser() {
    props.onDelete(id);
  }

  function confirm() {
      confirmDialog(DeleteUser,'Delete confirmation', `Are you sure you want to delete ${name} ${lastname} ?`)
  }

  return (
    <li className={classes.item}>
      <div>{name + " " + lastname}</div>
      <div>
        <Link href={"/users/" + id}>
        <span>
          <FontAwesomeIcon
            className={`${classes.icon_font} ${classes.btn} ${classes.btn_mobile} ${classes.btn_detail}`}
           
            icon={faEye}
          />
          </span>
        </Link>
        <Link href={"/users/update/" + id}>
        <span>
          <FontAwesomeIcon
            className={`${classes.icon_font} ${classes.btn} ${classes.btn_mobile} ${classes.btn_update}`}
          
            icon={faUserEdit}
          />
          </span>
        </Link>
        <button
          title="Delete"
          onClick={confirm}
          className={classes.reset_btn}
        >
          <span>
          <FontAwesomeIcon
            className={`${classes.icon_font} ${classes.btn} ${classes.btn_mobile}  ${classes.btn_delete}`}
            icon={faTrashAlt}
          />
          </span>
        </button>
      </div>
    </li>
  );
}

export default MobileItem;
