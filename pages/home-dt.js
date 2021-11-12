
import { deleteUser, GET_USERS } from "../api/queries";
import { withApollo } from "@apollo/react-hoc";
import Loading from "../components/ui/loading";
import DataTable,{ createTheme } from "react-data-table-component";
import ActionButtons from "../components/ui/actionButtons";
import {alertDialog} from '../components/ui/alert'


function HomeDt({ client }) {
  let data = client.readQuery({ query: GET_USERS });
  const [deleteUserHandler, { loading }] = deleteUser(onSuccess);

  function onSuccess() {
    alertDialog('User Deleted !')
  }

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Lastname",
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.date_of_birth,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => row.email,
      cell: row => <ActionButtons onDelete={onDelete} items={row} />,
     
    },
  ];

  createTheme('customTheme', {
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    background: {
      default: '#000',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#2FC27D',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');

  const tableData = data.users;


  if (loading) {
    return <Loading />;
  }



  function onDelete(id) {
    deleteUserHandler({ variables: { id } });
    let newdata = [];
    for (let i = 0; i < data.users.length; i++) {
      const element = data.users[i];
      if (element.id != id) {
        newdata.push(element);
      }
    }
    client.writeQuery({
      query: GET_USERS,
      data: {
        users: newdata,
      },
    });
  }

  return (
    <div>
      <h1>User List Data Tables</h1>
      
      <DataTable
        columns={columns}
        data={tableData}
        pagination
        theme="customTheme"
      
      />
     
    </div>
  );
}

export default withApollo(HomeDt);
