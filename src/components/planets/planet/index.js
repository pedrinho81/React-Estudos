import React, { Fragment } from "react"
import GrayImg from "../../shared/gray-img"
import DescriptionWithLink from "../../shared/descriptionWithLink/index"

    async function getSatelites(id) {
        let response = await fetch(`http://localhost:3001/api/${id}.json`)
        let data = await response.json()
        return data
    }

    class Planet extends React.Component {
    constructor(props) {
        super(props);
            this.state ={
                satelites: []
            }
    }

    componentDidMount() {
        getSatelites(this.props.id).then(data => {(
            this.setState(state => ({
                satelites: data["satellites"]
            }))
        )})
    }

    render() {
            return (
            <Fragment>
              <h4>Planeta: {this.props.name}</h4>
              <p>{this.props.description}</p>
              <p><a href={this.props.link}>{this.props.link}</a></p>
              <img src={this.props.url}></img>
              <p>Lista de satélites</p>
              <ul> 
                   
                       {this.state.satelites.map((satelit, index) =>
                         <li key={index}>{satelit.name}</li>
                       )}
                       
               </ul>       
                    
              
            
          </Fragment>  
        )   
    }
}
export default Planet 