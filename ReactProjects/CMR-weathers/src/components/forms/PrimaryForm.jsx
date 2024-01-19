import React, { useState } from "react";

import './primary-form.css'

const PrimaryForm = (props)=>{
    // console.log(props.updateWeatherResponse)
    const[value,setValue] = useState("")
    let BASE_URL = "http://api.weatherapi.com/v1/current.json?key=bc85ca2527114f0d86b65521241801&q="
    const clickHandler = (event)=>{
       event.preventDefault()
       BASE_URL = BASE_URL+value
       const response = fetch(BASE_URL)
       console.log(response)
       response.then(res => res.json())
       .then(data =>{
            props.updateWeatherResponse(data)
       }).catch(err =>{
             console.log(err)
       })
       setValue("")
    }
    const changeHandler = (event)=>{
        event.preventDefault()
        setValue(event.target.value)
    }
    return(
        <form className="primary-form">
            <input type="text" placeholder="Enter city name" className="ip" onChange={changeHandler} value={value}/>
            <button type="submit" className="btn" onClick={clickHandler}>Show weather report</button>
        </form>
    )
}

export default PrimaryForm


// 4ac0b7a67fc5479bab144944241701

// base url  http://api.weatherapi.com/v1

// http://api.weatherapi.com/v1/current.json?key=4ac0b7a67fc5479bab144944241701&q=hyderabad


// js -> event loop, shallow copy, deep copy, async await, promises, spread operator, methods on array,  closure and IIFE

// ES6 --> arrow function, hoisting, callback functions, callback hell, destructring

// loops in js, difference between arrow function and normal fucntion,



// hooks, redux, context API, functional component VS class based component

// 