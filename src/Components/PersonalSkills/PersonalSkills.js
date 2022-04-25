import React from "react";
import './PersonalSkills.css'

import SkillCard from "../SkillCard/skillCard";

export default function PersonalSkills(props){

    const languages = [{
        language : 'C#',
        interessed: true,
        expert: 1
    },
    {
        language : 'JavaScript',
        interessed: true,
        expert: 3  
    },
    {
        language : 'React',
        interessed: true,
        expert: 2  
    },
    {
        language : 'Angular',
        interessed: true,
        expert: 2  
    },
    {
        language : 'TypeScript',
        interessed: true,
        expert: 2
    },
    {
        language : 'Node',
        interessed: true,
        expert: 3  
    },
    {
        language : 'PHP',
        interessed: false,
        expert: 1  
    },
    {
        language : 'Python',
        interessed: false,
        expert: 1  
    }]

    const other = [{
        language : 'Scrum',
        interessed: true,
        expert: 3
    },
    {
        language : 'REST',
        interessed: true,
        expert: 3  
    },
    {
        language : 'AWS',
        interessed: true,
        expert: 1  
    },
    {
        language : 'Docker',
        interessed: true,
        expert: 1  
    },
    {
        language : 'Microservices',
        interessed: true,
        expert: 2
    }]

    return(
        <div className="skillHolder">
            <h1 className="title" id="yourAnchorTag">Skills</h1>
            <div className="skillCard">
                <SkillCard className="card" title="Languages" infos={languages} hardSkill={true}/>
                <SkillCard className="card" title="Others"infos={other}/>
            </div>
        </div>
    )
}