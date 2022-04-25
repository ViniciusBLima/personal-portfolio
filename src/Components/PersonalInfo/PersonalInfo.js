import React from "react";
import './PersonalInfo.css'

export default function PersonalInfo(props){

    return(
        <div className="primaryInfoHolder">
            <div className="infoHolder">
                <img className="personalPhoto" alt="Vinicius Lima" src='https://avatars.githubusercontent.com/u/61070094'/>
                <div className="textInfo">
                    <h1>Vinicius Lima</h1>
                    <h3>FullStack Developer</h3>
                    <p>Age: 21</p>
                    <p>Location: São Paulo - Brazil</p>
                    <p>Email: <a className="email" href="mailto: viniciusdelima54@gmail.com">viniciusdelima54@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}