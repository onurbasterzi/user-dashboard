import {useRef} from 'react'

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
        <h1>Add New User</h1>
        <form onSubmit={newUserSubmitHandler}>
           
            <div>
                <input type="text" placeholder='name' ref={nameRef}/>
            </div>
            <div>
                <input type="text" placeholder='lastname' ref={lastNameRef}/>
            </div>
            <div>
                <input type="text" placeholder='phone' ref={phoneRef}/>
            </div>
            <div>
                <input type="text" placeholder='birth day' ref={birthDayRef}/>
            </div>
            <div>
                <input type="text" placeholder='email' ref={emailRef}/>
            </div>
            <div>
                <button> Add User</button>
            </div>
        </form>
    </div>
}

export default NewUserForm;