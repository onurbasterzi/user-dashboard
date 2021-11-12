import MobileItem from "./mobile-item";


function MobileList(props) {
  const items = props.items;
  //console.log(items);

  return (
    <ul>
      {items.map((user) => (
        <MobileItem
          onDelete={props.onDelete}
          key={user.id}
          id={user.id}
          name={user.name}
          lastname={user.lastname}
          phone={user.phone}
          email={user.email}
          date_of_birth={user.date_of_birth}
        ></MobileItem>
      ))}
    </ul>
  );
}

export default MobileList;
