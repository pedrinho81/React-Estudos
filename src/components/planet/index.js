import React, { useState, Fragment, useEffect } from "react"
import Form from "./form"

import GrayImg from "../shared/gray-img"
import DescriptionWithLink from "../shared/descriptionWithLink/index"


async function getSatelites(id) {
    let response = await fetch(`http://localhost:3001/api/${id}.json`)
    let data = await response.json()
    return data
} 




const Planet = (props) => {
    const [satelites, setSatelites] = useState([])
    
    useEffect(() => {
        getSatelites(props.id).then(data => {
            setSatelites(data["satellites"])
        })
    })
    //add metodo satelite
    const addSatellite = (new_satellite) => {
        setSatelites([...satelites, new_satellite])
}


    return (
        <Fragment>
            
            
            <h4>Planeta: {props.name}</h4>
            <p>{props.description}</p>
            <p><a href={props.link}>{props.link}</a></p>
            <img src={props.url}></img>
            <p>Lista de satélites</p>
            <hr/>
            <Form
            addSatellite={addSatellite}/>
            <hr/>
            <ul>

                {satelites.map((satelit, index) =>
                    <li key={index}>{satelit.name}</li>
                )}

            </ul>
        </Fragment>
    )
}

export default Planet