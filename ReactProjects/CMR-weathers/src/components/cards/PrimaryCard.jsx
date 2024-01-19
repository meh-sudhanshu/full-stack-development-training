import React, { useEffect, useState } from "react";

import './primary-card.css'

const PrimaryCard = (props)=>{
    return(
        <div className="primary-card">
            {props.weatherResponseData !== null && <h2>{props.weatherResponseData.current.temp_c}</h2>}
        </div>
    )
}


export default PrimaryCard