import React, {useState, useEffect} from 'react';
import Trail from '../Trails/Trail/TrailTemplate';
import APIURL from '../../../src/helpers/environment';

const Expert = (props) => {
    const [expertTrails, setExpertTrails] = useState([]);


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
        distance: "Distance",
        location: "Location",
        difficulty: "Difficulty",
    }

    useEffect(() => { //post data from button click
        console.log(props.token)
        fetch(`${APIURL}/trails/E`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setExpertTrails(json)
        })
        .catch(err => console.log(err))
    },[])
    return(
        <div style={myStyle}>
            <h3>Expert Trails</h3>
            <hr />
            <table className="mainSidebarTable">
                <tbody className="sidebarTable">
                    <Trail key={'column names'} testData={trailColumns} />  
                    {  
                       expertTrails ? 
                        expertTrails.map((trailInfo, index) => {
                            return<Trail key={index} testData={trailInfo} token={props.token}/>
                        }) : <p>No Info</p>
                    }
                </tbody>
            </table>
        </div>
    )
}   

export default Expert;