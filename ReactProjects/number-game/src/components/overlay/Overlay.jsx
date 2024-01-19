
import React from "react";


import './overlay.css'


const Overlay = ()=>{
    return(
        <div className="overlay">
            <h2 className="message">Number Is Bounded to the range -10 to 10</h2>
            <button className="btn">OK</button>
        </div>
    )
}

export default Overlay