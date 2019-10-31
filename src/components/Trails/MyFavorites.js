import React, {useEffect, useState} from 'react';
import TrailIndex from '../Trails/MyTrails/TrailIndex'; 

const MyFavorites = (props) => {

    const myStyle ={
        width: '75vw',
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        color: '#101C28',
        fontFamily: 'Helvetica',
        fontSize: '1.1em',
        textAlign: 'center',
        borderRadius: '10px'
    }

    return(
        <div style={myStyle} className="main">
            <h3>My Favorites</h3>
            <TrailIndex token={props.token} />
        </div>
    )
}

export default MyFavorites;