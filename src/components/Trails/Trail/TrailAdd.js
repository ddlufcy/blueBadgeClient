import React from 'react'
import APIURL from '../../../helpers/environment'

const AddButton = (props) => {
    
    const handleSubmit = (e) => {
        console.log(props.data)
        e.preventDefault();
        fetch(`${APIURL}/userTrails/addTrail`, {
            method: "POST",
            body: JSON.stringify(props.data),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => console.log(res))
        .then((logData) => {
            console.log(logData);
        })
        .catch(err => console.log(err))
    }
    return(
            <button type="submit" onClick={() => handleSubmit}>Add</button>     
    )
}

export default AddButton;