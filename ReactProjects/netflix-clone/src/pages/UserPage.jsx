import React from "react";

import { useNavigate } from "react-router-dom";

export const UserPage = ()=>{
    let navigate = useNavigate()
    const clickHandler = ()=>{
        navigate("/")
    }

    return(
        <div>
            <h2>User page</h2>
            <button onClick={clickHandler}>homepage</button>
        </div>
    )
}


