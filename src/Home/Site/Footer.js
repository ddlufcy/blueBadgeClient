import React, {useState, useEffect} from 'react';
import Logout from '../../components/Logout';

const Footer = (props) => {

    const mainStyle={
        display: "flex",
        justifyContent: "space-between",
        padding: "1em"

    }

    return(
        <div style={mainStyle} className="main">
            <Logout token={props.token}  logout={props.logout}/>
            <p>Daniel Lufcy 2019</p>     
        </div>
    )
}

export default Footer;