import React from "react";

import { useNavigate } from "react-router-dom";



const HomePage = ()=>{

    let navigate = useNavigate()

    const clickHandler = ()=>{
        navigate("/user-page")
    }

    return(
        <div>
            <h2>Homepage</h2>
            <button onClick={clickHandler}>user-page</button>
        </div>
    )
}


export default HomePage



// SPA --> single page react application

// MPA ---> multi page react application