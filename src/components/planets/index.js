import React, { Fragment } from "react"
import Planet from "./planet"

//consome api

async function getPlanets() {
    let response = await fetch("http://localhost:3001/api/planets.json")
    let data = await response.json()
    return data
}

getPlanets()

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [
            
            ]

        }
    }

    componentDidMount() {
        getPlanets().then((data) => {
            this.setState(state => ({
                planets: data["planets"]
            }))
        })
    }


    removeLast = () => {
        let new_planets = [...this.state.planets]

        new_planets.pop()

        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = () => {
        let lastPlanet = this.state.planets[this.state.planets.length -1]

        this.setState(state => ({
            planets: [...this.state.planets, lastPlanet]
        }))


       
    }


    render() {
        return (
            <Fragment>
                <h3>
                    Planets List
                </h3>
                <button onClick={this.removeLast}>Remover ultimo</button>
                <button onClick={this.duplicateLastPlanet}>Duplicar ultimo</button>
                <hr />

                
            {this.state.planets.map((planet,index) =>
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

}


export default Planets