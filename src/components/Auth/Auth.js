
import React, {useState} from 'react';
import {Label, Button, Form} from 'reactstrap';
import './Auth.css'
const Auth = (props) =>{

    const formStyle={
        textAlign: "center",

    }

   const [username, setUsername]= useState('');
   const [password, setPassword]= useState ('');
   const [login, setLogin] = useState(true);
   const title = ()=>{
       return login ? 'Login' : 'Signup';
   }
   const loginToggle = (event) => {
       event.preventDefault();
       setLogin(!login);
       setUsername('');
       setPassword('');
   }
   const signupFields = () => !login ?
   (
       <div>
        <p>Signup to find and share you favorite trails!</p>
       </div>
   ) : null;
   const handleSubmit = (e) => {
       e.preventDefault();
       const url = login ? 'http://localhost:3001/auth/signIn' : 'http://localhost:3001/auth/signUp'
       const bodyObj = login ? {
           username: username,
           password: password,
       } : {
           username: username,
           password : password,
       }
       fetch(url, {
           method: 'POST',
           body: JSON.stringify(bodyObj),
           headers: {
               'Content-Type': 'application/json'
           }
       })
       .then(res => res.json())
       .then(json => props.setSession(json.sessionToken))
       .catch(err => console.log(err))
   }
   return(
     <Form className="splashForm" style={formStyle} onSubmit= {handleSubmit}>
         <br/>
         <h1>{title()}</h1>
         {signupFields()}
         <br/>
         <Label htmlFor='username'>Username:</Label>
         <br/>
         <input style={{marginBottom: ".1em", borderRadius: "4px", height: '2.1em', border: "none"}} type='text' id = 'username' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
         <br/>
         <Label htmlFor='password'>Password:</Label>
         <br/>
         <input style={{marginBottom: ".1em", borderRadius: "4px", height: '2.1em', border: "none"}}type='password' id='password' placeholder='at least 6 letters' value={password}  pattern="(?=.*[a-z]).{6,12}" onChange={(e)=> setPassword(e.target.value)} required/>
         <br/>
         {/* <Label htmlFor='password'> Confirm Password:</Label> */}
         <br />
         <Button style={{marginBottom: ".4em"}} color="info" onClick={loginToggle}>Login/Signup</Button>
         <br/>
         <Button style={{marginBottom: ".8em"}} color="success" type='submit'>Submit</Button>
     </Form>
   )
}
export default Auth;