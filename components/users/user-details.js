import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faEnvelopeOpenText,
  faBirthdayCake,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

function UserDetails(props) {
  const details = props.details;

  return (
    <div className="card">
      <ul>
        <li>
          <FontAwesomeIcon className="icon-font" icon={faUserAlt} />{" "}
          {details.name} {details.lastname}
        </li>
        <li>
          <FontAwesomeIcon className="icon-font" icon={faEnvelopeOpenText} />
          {details.email}
        </li>
        <li>
          <FontAwesomeIcon className="icon-font" icon={faBirthdayCake} />{" "}
          {details.date_of_birth}
        </li>
        <li>
          <FontAwesomeIcon className="icon-font" icon={faMobileAlt} />{" "}
          {details.phone}{" "}
        </li>
        
      </ul>
      
      <Link href={'/users/update/'+details.id}>
          <span className='btn btn-update btn-full'>Edit User</span>
          </Link>
      
    </div>
  );
}

export default UserDetails;
