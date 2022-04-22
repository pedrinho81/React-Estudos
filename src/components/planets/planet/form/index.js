import { Fragment, useState } from "react";

const initialState = {
    name:""
}

const Form = (props) => {

    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleSubmit = event => {
        props.addSatellite(fields)
        event.preventDefault()
        setFields(initialState)
    }

    return (
        <Fragment>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome do satélite: </label>
                    <input type="text" name="name" id="name" value={fields.name} onChange={handleFieldsChange}></input>
                </div>
                <br/>
                <input type="submit"></input>
            </form>

        </Fragment>
    )
}

export default Form