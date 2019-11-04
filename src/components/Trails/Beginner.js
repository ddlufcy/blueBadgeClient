import React, {useState, useEffect} from 'react';
import Trail from '../Trails/Trail/TrailTemplate';
import APIURL from '../../../src/helpers/environment';


const B = (props) => {
    const [beginnerTrails, setBeginnerTrails] = useState([]);

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
        fetch(`${APIURL}/trails/B`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setBeginnerTrails(json)
        })
        .catch(err => console.log(err))
    },[])
    return(
        <div style={myStyle}>
            <h3>Beginner Trails</h3>
            <hr />
            <table className="mainSidebarTable">
                <tbody className="sidebarTable">
                    <Trail key={'column names'} testData={trailColumns} />  
                    {  
                        beginnerTrails ? 
                        beginnerTrails.map((trailInfo, index) => {
                            return<Trail key={index} testData={trailInfo} token={props.token}/>
                        }) : <p>No Info</p>
                    }
                </tbody>
            </table>
        </div>
    )
}   

export default B;