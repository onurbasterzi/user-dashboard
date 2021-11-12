import { Fragment } from "react";
import Header from "./header";
import {getAllUsers} from '../../api/queries'
import Loading from "../ui/loading";

function Layout(props) {

  const { loading, error, data } = getAllUsers();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <Fragment>
        <Header/>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
