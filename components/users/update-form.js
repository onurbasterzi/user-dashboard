import { useRef } from "react";
import classes from "./styles/new-user-form.module.css";

function UpdateForm(props) {

 const details=props.details

  const nameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const birthDayRef = useRef();
  const emailRef = useRef();

  function updateUserSubmitHandler(event) {
    event.preventDefault();

    const userData = {
      name: nameRef.current.value,
      lastname: lastNameRef.current.value,
      phone: phoneRef.current.value,
      date_of_birth: birthDayRef.current.value,
      email: emailRef.current.value,
    };

    props.onUpdateUser(userData);
  }

  return (
    <div className="card">
         <h1>Update User</h1>
      <form onSubmit={updateUserSubmitHandler} className={classes.form}>
       
        <div>
          <input
            type="text"
            required
            className={classes.input}
            placeholder="Name"
            ref={nameRef}
            defaultValue={details.name}
          />
        </div>
        <div>
          <input
            type="text"
            className={classes.input}
            placeholder="Lastname"
            ref={lastNameRef}
            defaultValue={details.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            required
            className={classes.input}
            placeholder="Phone Number"
            ref={phoneRef}
            defaultValue={details.phone}
          />
        </div>
        <div>
          <input
            type="date"
            required
            className={classes.input}
            placeholder="Date of Birth"
            ref={birthDayRef}
            defaultValue={details.date_of_birth}
          />
        </div>
        <div>
          <input
            type="email"
            className={classes.input}
            required
            placeholder="Email Address"
            ref={emailRef}
            defaultValue={details.email}
          />
        </div>
        <div>
          <button className="btn btn-full"> Update User</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
