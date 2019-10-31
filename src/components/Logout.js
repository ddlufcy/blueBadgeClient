import React from 'react';
import './Logout.css';


const Logout = (props) => {
    console.log(props)

    const buttonStyle={
        width: "10vw",
        height: "4vh",
        borderRadius: "14px",
        border: "none"

    }

    return (
        <div>
            <button className="logoutButton" style={buttonStyle} onClick={props.logout} id="logout" className="logout" alt="logout">Logout</button>
        </div>
    )
}

export default Logout;