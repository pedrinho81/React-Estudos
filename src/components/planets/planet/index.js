import React, { useState, Fragment, useEffect } from "react"

import GrayImg from "../../shared/gray-img"
import DescriptionWithLink from "../../shared/descriptionWithLink/index"



const Planet = (props) => {
    return (
        <div>
            <h4>Planeta: {props.name}</h4>
            <p>{props.description}</p>
            <p><a href={props.link}>{props.link}</a></p>
            <img src={props.url}></img>
        </div>
    )
}



export default Planet 

// constructor(props) {
//     super(props);
//         this.state ={
//             satelites: []
//         }
// }


// componentDidMount() {
//     getSatelites(this.props.id).then(data => {(
//         this.setState(state => ({
//             satelites: data["satellites"]
//         }))
//     )})
// }