import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Beginner from '../../components/Trails/Beginner';
import BeginnerIntermediate from '../../components/Trails/BeginnerIntermediate';
import Intermediate from '../../components/Trails/Intermediate';
import IntermediateAdvanced from '../../components/Trails/IntermediateAdvanced';
import Advanced from '../../components/Trails/Advanced';
import AdvancedExpert from '../../components/Trails/AdvancedExpert';
import Expert from '../../components/Trails/Expert';
import MyFavorites from '../../components/Trails/MyFavorites';


const Sidebar = (props) => {

    const nameStyle={
        height: "15px",
        marginLeft: ".4em"
    }
    
    return(
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/beginner">Beginner Trails<img style={nameStyle} src="https://cdn.apstatic.com/img/diff/green.svg" /></Link></li>
                <li><Link to="/beginnerIntermediate">Beginner/Intermediate Trails<img style={nameStyle} src="https://cdn.apstatic.com/img/diff/greenBlue.svg" /></Link></li>
                <li><Link to="/intermediate">Intermediate Trails <img style={nameStyle} src="https://cdn.apstatic.com/img/diff/blue.svg" /></Link></li>
                <li><Link to="/intermediateAdvanced">Intermediate/Advanced Trails <img style={nameStyle} src="https://cdn.apstatic.com/img/diff/blueBlack.svg" /></Link></li>
                <li><Link to="/advanced">Advanced Trails <img style={nameStyle} src="https://cdn.apstatic.com/img/diff/blueBlack.svg" /></Link></li>
                <li><Link to="/advancedExpert">Advanced/Expert Trails <img style={nameStyle} src="https://cdn.apstatic.com/img/diff/black.svg" /></Link></li>
                <li><Link to="/expert">Expert Trails <img style={nameStyle} src="https://cdn.apstatic.com/img/diff/dblack.svg" /></Link></li>
                <li><Link to="/myFavorites">My Favorites</Link></li> 
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/beginner"><Beginner token={props.token} /></Route>
                <Route exact path="/beginnerIntermediate"><BeginnerIntermediate token={props.token}/></Route>
                <Route exact path="/intermediate"><Intermediate token={props.token} /></Route>
                <Route exact path="/intermediateAdvanced"><IntermediateAdvanced token={props.token}/></Route>
                <Route exact path="/advanced"><Advanced token={props.token} /></Route>
                <Route exact path="/advancedExpert"><AdvancedExpert token={props.token}/></Route>
                <Route exact path="/expert"><Expert token={props.token}/></Route>
                <Route exact path="/myFavorites"><MyFavorites token={props.token} /></Route>
            </Switch>
        </div>
    </div>
    )
}

export default Sidebar;