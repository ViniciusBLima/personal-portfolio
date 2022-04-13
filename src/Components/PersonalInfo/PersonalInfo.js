import React from "react";
import './PersonalInfo.css'
import image from '../../shared/images/viniciusLima.jpg'

export default function PersonalInfo(props){

    return(
        <div>
            <div class="infoHolder">
            <img class="personalPhoto" alt="Vinicius Lima" src={image}/>
            <div class="textInfo">
                <h1>Vinicius Lima</h1>
                <h3>FullStack Developer</h3>
                <p>Age: 21</p>
                <p>Location: São Paulo - Brazil</p>
                <p>Email: <a class="email" href="mailto: viniciusdelima54@gmail.com">viniciusdelima54@gmail.com</a></p>
                <p>Skills</p>
            </div>
            </div>
        </div>
    )
}