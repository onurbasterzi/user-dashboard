import {useRef} from 'react'
import classes from './new-user-form.module.css'

function NewUserForm(props){

    const nameRef =useRef();
    const lastNameRef =useRef();
    const phoneRef =useRef();
    const birthDayRef =useRef();
    const emailRef =useRef();
  

    function newUserSubmitHandler(event){
        event.preventDefault();
       
        const userData={
            name:nameRef.current.value,
            lastname:lastNameRef.current.value,
            phone:phoneRef.current.value,
            date_of_birth:birthDayRef.current.value,
            email:emailRef.current.value
        }

        props.onAddUser(userData)

    }


    return <div className='container'>
       
        <form onSubmit={newUserSubmitHandler} className={classes.form}>
        <h1>Add New User</h1>
            <div>
                <input type="text" required className={classes.input} placeholder='name' ref={nameRef}/>
            </div>
            <div>
                <input type="text" className={classes.input} placeholder='lastname' ref={lastNameRef}/>
            </div>
            <div>
                <input  className={classes.input} placeholder='phone' ref={phoneRef}/>
            </div>
            <div>
                <input type="date" className={classes.input} placeholder='birth day' ref={birthDayRef}/>
            </div>
            <div>
                <input type="email" className={classes.input} required placeholder='email' ref={emailRef}/>
            </div>
            <div>
                <button className='btn'> Add User</button>
            </div>
        </form>
    </div>
}

export default NewUserForm;