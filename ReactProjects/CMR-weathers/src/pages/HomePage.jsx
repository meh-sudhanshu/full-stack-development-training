import React, { useState } from "react";

import PrimaryCard from '../components/cards/PrimaryCard'
import PrimaryForm from '../components/forms/PrimaryForm'

import './homepage.css'

const HomePage = ()=>{
    const [weatherResponseData, setWeatherResponseData] = useState(null)
    const updateWeatherResponse = (data)=>{
        setWeatherResponseData(data)
    }
    return(
        <div className="homepage">
            <PrimaryCard weatherResponseData={weatherResponseData}/>
            <PrimaryForm updateWeatherResponse={updateWeatherResponse}/>
        </div>
            
    )
}

export default HomePage