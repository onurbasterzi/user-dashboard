import Link from 'next/link'
function UserItem(props) {
  const { id, name, lastname, phone, email, date_of_birth } = props;

  return <li>
      <Link href={'/users/'+id}>{id+" "+name + " " + lastname}</Link>
  </li>;


  
}

export default UserItem;
