import React from 'react';
import '../TrailStyles/TrailTemplate.css'

const Trail = (props) => {
    const tdStyles = {
        fontSize: '1.4em'
    }
    
    const handleSubmit = (e) => {
        console.log(props.testData)
        e.preventDefault();
        fetch("http://localhost:3001/userTrails/addTrail", {
            method: "POST",
            body: JSON.stringify(props.testData),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => console.log(res))
           .then((logData) => {    })
           .catch(err => console.log(err))
    }

    return(

            <tr>
                <td>{props.testData.name}</td>
                <td>{props.testData.distance}</td>
                <td>{props.testData.location}</td>
                <td>{props.testData.difficulty}</td>
                <td><button className="addButton" type="submit"data-toggle="popover" title="Popover title" data-content="And here's some amazing content" onClick={handleSubmit}>Add</button>  </td>
            </tr>
 
    )
}

export default Trail;