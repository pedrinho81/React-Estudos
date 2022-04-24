import React, { useState, Fragment, useEffect } from "react"
import Planet from "./planet"
import Form from "../planet/form"


//consome api

async function getPlanets() {
    let response = await fetch("http://localhost:3001/api/planets.json")
    let data = await response.json()
    return data
}



//LIFECYCLE PADRÃO-CLÁSSICO
// componentDidMount() {
//     getPlanets().then((data) => {
//         setState(state => ({
//             planets: data["planets"]
//         }))
//     })
// }   


const Planets = () => {

    const [planets, setPlanets] = useState([])
//LIFE CYCLE MODERNO
    useEffect(() => {
            getPlanets().then((data) => {
                setPlanets(data["planets"])
            })
    },[])

    const removeLast = () => {
        let new_planets = [...planets]

        new_planets.pop()

        setPlanets(new_planets)
    }

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1]
 
        setPlanets([...planets,last_planet])
    }

    const addPlanet = (new_planet) => {

            setPlanets([...planets, new_planet])

    }


    return (
        <Fragment>
            <h3>
                Planets List
            </h3>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr/>
            <button onClick={removeLast}>Remover ultimo</button>
            <button onClick={duplicateLastPlanet}>Duplicar ultimo</button>
            <hr />


            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    link={planet.link}
                    title_with_underline={true}
                    gray_img={true}
                    description={planet.description}
                    url={planet.img_url}
                    key={index}
                />


            )}
        </Fragment>
    )
}



export default Planets