import React, { useState } from "react";
import Button from "../components/buttons/Button";

import './homepage.css'

const HomePage = (props)=>{

    console.log(props.toggleOverlayState)

    const [value,setValue] = useState(0)

    function updateValue(updatedValue){
        setValue(updatedValue)

    }
    return(
        <div className="homepage">
            <h2 className="number">{value}</h2> 
            <div>
                <Button text="Increase" updateValue={updateValue} value={value} toggleOverlayState={props.toggleOverlayState}/>
                <Button text="Decrease" updateValue={updateValue} value={value} toggleOverlayState={props.toggleOverlayState}/>
            </div>
        </div>  

    )
}


export default HomePage