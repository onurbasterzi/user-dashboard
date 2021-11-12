
import ActionButtons from "../ui/actionButtons";

function UserItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;

  const formatedDate = new Date(date_of_birth).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{formatedDate}</td>
      <td>
        <ActionButtons onDelete={props.onDelete} items={props} />
      </td>
    </tr>
  );
}

export default UserItem;
