import React from "react";
import './AppComponent.css'

import PersonalInfo from "../PersonalInfo/PersonalInfo";
import PersonalSkills from "../PersonalSkills/PersonalSkills";

export default function App(props){
    return(
        <div>
            <PersonalInfo/>
            <PersonalSkills/>
        </div>
    )
}