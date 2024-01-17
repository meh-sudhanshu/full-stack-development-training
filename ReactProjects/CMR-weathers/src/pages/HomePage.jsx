import React from "react";

import PrimaryCard from '../components/cards/PrimaryCard'
import PrimaryForm from '../components/forms/PrimaryForm'

import './homepage.css'

const HomePage = ()=>{
    return(
        <div className="homepage">
            <PrimaryCard/>
            <PrimaryForm/>
        </div>
    )
}

export default HomePage