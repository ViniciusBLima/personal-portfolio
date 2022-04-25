import React from "react";
import './skillCard.css'


export default function SkillCard(props){

    const infos = props.infos?.map(i => {
        return(
            <tr key={i.language }>
                <td className="languageTd">{i.language }</td>
                <td className={i.interessed? "interessed" : "nInteressed"}>{i.interessed? "Interested": "Not interested"}</td>
                <td>
                    <span className={`fa fa-star ${i.expert >= 1? "checked": ''}`}></span>
                    <span className={`fa fa-star ${i.expert >= 2? "checked": ''}`}></span>
                    <span className={`fa fa-star ${i.expert >= 3? "checked": ''}`}></span>
                </td>
            </tr>
        )
    })

    return (
        <div className="card">
            <h1 className="skillTitle">{props.title}</h1>
            <table className="skillTable">
                <tbody>
                    {infos}
                </tbody>
            </table>
        </div>
    )
}