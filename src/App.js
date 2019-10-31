import React, {useState, useEffect} from 'react';

//Components
import './App.css';

import Auth from './components/Auth/Auth';
import MainSite from './ProtectedSite.js/MainSite';



function App() {
 const [ sessionToken, setSessionToken] = useState(undefined);//session token

 const clearToken = () => {
   localStorage.clear();
   setSessionToken(undefined);
 }

 const viewConductor = () => {
 return sessionToken !== undefined ? <MainSite logout={clearToken} token={sessionToken} /> : <Auth setSession ={setSessionToken}/>
 }
 return (
   <div className="App">
     {viewConductor()}
   </div>
 );
}
export default App;
