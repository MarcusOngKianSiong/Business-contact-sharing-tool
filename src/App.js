import logo from './logo.svg';
import './App.css';
import Login from './account/login';
import Register from './account/register'
import HomePage from './products/homePage'
import Profile from './account/profile'
import React,{useState,useEffect,useRef} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useHistory
} from "react-router-dom";

function App() {
  // Login state
  const [loginResponse,setLoginResponse] = useState({});
  // const [newAccountCreationSuccess,determineNewAccountCreationSuccess] = useState("");

  // registration state
  const [registrationResponse,setRegistrationResponse] = useState({});

  // Login
  const emailReference = useRef();
  const passwordReference = useRef();
  const submitLoginDetails = async () => {
    
    const email = emailReference.current.value;
    const password = passwordReference.current.value;

    // 1. Send the data to the backend to check
    
    await fetch(`http://localhost:3000/login?email=${email}&password=${password}`)
      .then((res)=>{
        return res.json();
      })
      .then((res)=>{
        setLoginResponse(res);
      })
    
  }

  // Register
  const registerEmail = useRef();
  const registerPassword = useRef();
  const registerRFID = useRef();
  const registerPasswordConfirmation = useRef();
  const registerName = useRef();
  const registerContact = useRef();
  const registerAgreeToTermsAndCondition = useRef();
  const submitRegistrationDetails = async () => {
    const email = registerEmail.current.value;
    const password = registerPassword.current.value
    const RFID = registerRFID.current.value
    const passwordConfirmation= registerPasswordConfirmation.current.value
    const name = registerName.current.value;
    const contact = registerContact.current.value
    const agreeToTermsAndCondition = registerAgreeToTermsAndCondition.current.value
    await fetch(`http://localhost:3000/register?email=${email}&password=${password}&RFID=${RFID}&passwordconfirmation=${passwordConfirmation}&name=${name}&contact=${contact}&termsAndCondition=${agreeToTermsAndCondition}`)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      // recieve registration status from the server: success, failure
      // pass data to the state
      setRegistrationResponse(res);
      
    })
  }

  useEffect(()=>{
    const loginOutcome = loginResponse.loginSuccess
    // const history = useHistory();
    if(loginOutcome === true){
      // history.push("/profile"
    }
    
  },[loginResponse])

  useEffect(()=>{
    const registrationOutcome = registrationResponse.registrationOutcome
    
    if(registrationOutcome === true){
      
    }
  },[registrationResponse])

  return (
    <div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/Profile">Profile</Link>
        
      </div>

      <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={
          <Login 
            submitLoginDetails={submitLoginDetails} 
            emailReference={emailReference} 
            passwordReference={passwordReference}
            loginSuccess={loginResponse.loginSuccess}
          />}
        />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/register" element={
          <Register
            registerEmail={registerEmail} 
            registerPassword={registerPassword}
            registerContact={registerContact}
            registerPasswordConfirmation={registerPasswordConfirmation}
            registerName={registerName}
            registerRFID={registerRFID}
            registerAgreeToTermsAndCondition={registerAgreeToTermsAndCondition}
            submitRegistrationDetails={submitRegistrationDetails}
            registrationOutcome={registrationResponse.registrationOutcome}
          />}
        />
        
      </Routes>

    </div>
  );
}

export default App;
