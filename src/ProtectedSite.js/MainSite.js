import React, {useState, useEffect} from 'react';
import Sidebar from '../Home/Site/Sidebar';
import Footer from '../Home/Site/Footer';
import Header from '../Home/Site/TopHeader';
import {
    BrowserRouter as Router,
  } from 'react-router-dom';

const MainSite = (props) => {
    return(
    <div className="main">
        <Header />
        <Router>
        <Sidebar token={props.token}/>
        </Router>
        <Footer token={props.token} logout={props.logout} />
    </div>
    )
}

export default MainSite;