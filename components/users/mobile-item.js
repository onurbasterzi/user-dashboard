
import classes from "./styles/mobile-item.module.css";
import { confirmDialog } from "../ui/confirmDialog";
import ActionButtons from "../ui/actionButtons";

function MobileItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;


  return (
    <li className={classes.item}>
      <div>{name + " " + lastname}</div>
      <ActionButtons onDelete={props.onDelete} items={props} />
    </li>
  );
}

export default MobileItem;
