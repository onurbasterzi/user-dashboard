import {useRef} from 'react'

function UpdateForm(){

    const nameRef =useRef();
    const lastNameRef =useRef();
    const phoneRef =useRef();
    const birthDayRef =useRef();
    const emailRef =useRef();


    function updateUserSubmitHandler(event){
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

    return <div className='card'>
    <form onSubmit={updateUserSubmitHandler} className={classes.form}>
    <h1>Add New User</h1>
        <div>
            <input type="text" required className={classes.input} placeholder='Name' ref={nameRef}/>
        </div>
        <div>
            <input type="text" className={classes.input} placeholder='Lastname' ref={lastNameRef}/>
        </div>
        <div>
            <input  className={classes.input} placeholder='Phone Number' ref={phoneRef}/>
        </div>
        <div>
            <input type="date" className={classes.input} placeholder='Date of Birth' ref={birthDayRef}/>
        </div>
        <div>
            <input type="email" className={classes.input} required placeholder='Email Address' ref={emailRef}/>
        </div>
        <div>
            <button className='btn btn-full'> Add User</button>
        </div>
    </form>
</div>
}


export default UpdateForm;