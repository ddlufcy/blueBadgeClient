import React, {useState, useEffect} from 'react';
import Trail from '../Trails/Trail/TrailTemplate';

const BeginnerIntermediate = (props) => {
	const [beginnerIntermediateTrails, setBeginnerIntermediateTrails] = useState([]);

 
    const myStyle ={
        width: '75vw',
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        color: '#101C28',
        fontFamily: 'Helvetica',
        fontSize: '1.1em',
        textAlign: 'center'
    }

    
    const trailColumns = {
        name: "Trail Name",
        distance: "Length",
        location: "Location",
        difficulty: "Difficulty",
    }

    useEffect(() => {
        console.log(props.token)
        fetch('http://localhost:3001/trails/BI', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setBeginnerIntermediateTrails(json)
        })
        .catch(err => console.log(err))
    },[])
    return(
        <div style={myStyle}>
            <h3>Beginner/Intermediate Trails</h3>
            <hr />
            <table>
                <tbody>
                    <Trail key={'column names'} testData={trailColumns} />  
                    {  
                        beginnerIntermediateTrails ? 
                        beginnerIntermediateTrails.map((trailInfo, index) => {
                            return<Trail key={index} testData={trailInfo} token={props.token}/>
                        }) : <p>No Info</p>
                    }
                </tbody>
            </table>
        </div>
    )
}   


export default BeginnerIntermediate;