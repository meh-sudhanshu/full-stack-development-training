

import React, { useState } from "react";


export const LoginPage = ()=>{

    const[username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const usernameChangeHandler = (event)=>{
        setUsername(event.target.value)
    }
    const passwordChangeHandler = (event)=>{
        setPassword(event.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        console.log(username,password)
        setPassword("")
        setUsername("")
    }

    return(
        <form className="login-form">

            <input className="ip-f" placeholder="username or email" type="text" 
                onChange={usernameChangeHandler}
                value={username}/>

            <input className="ip-f" placeholder="password" type="password" onChange={passwordChangeHandler}
                value={password}
            />
            
            <button className="login-btn" onClick={submitHandler}>Login</button>
        </form>
    )
}


