

import React from "react";
import './button.css'

const Button = (props)=>{
    console.log(props)
    const clickHandler = ()=>{
        if(props.text === 'Increase'){
            if(props.value === 10){
                props.toggleOverlayState(true)
            }else{
                props.updateValue(props.value+1)
            }
        }else{
            if(props.value === -10){
                props.toggleOverlayState(true)
            }else{
                props.updateValue(props.value-1)
            }
            
        }
    }
    return(
        <button  className={props.text} onClick={clickHandler}>{props.text}</button>
    )
}


export default  Button;

// background-color