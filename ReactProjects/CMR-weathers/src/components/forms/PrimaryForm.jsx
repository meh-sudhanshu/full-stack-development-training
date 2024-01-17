import React, { useState } from "react";

import './primary-form.css'

const PrimaryForm = ()=>{

    const[value,setValue] = useState("")
    const clickHandler = (event)=>{
       event.preventDefault()
       console.log(value)
    }
    const changeHandler = (event)=>{
        setValue(event.target.value)
    }
    

    return(
        <form className="primary-form">
            <input type="text" placeholder="Enter city name" className="ip" onChange={changeHandler}/>
            <button type="submit" className="btn" onClick={clickHandler}>Show weather report</button>
        </form>
    )
}

export default PrimaryForm