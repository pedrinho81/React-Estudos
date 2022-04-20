import { Fragment } from "react"

const DescriptionWithLink = (props) => {

    if(!props.description)
        return null 

    if (props.link) {
        return(
        <div>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
        </div>
        )
    } else {
       return(
        <div>
            <p><u>{props.description}</u></p>
        </div>
        ) 
    }
    
}

export default DescriptionWithLink