import React,{useRef} from "react";

export default function Login(prop){
    const emailReference = prop.emailReference;
    const passwordReference = prop.passwordReference;
    const submitLoginDetails = prop.submitLoginDetails;

    let loginSuccess = "";
    
    if(prop.loginSuccess === false){
        loginSuccess = "invalid email or password. Try again.";
    }

    return(
        <form>
            {/* <label for="email">Email</label> */}
            <input type="text" id="email" ref={emailReference}/>
            {/* <label for="password">Password</label> */}
            <input type="password" id="password" ref={passwordReference}/>
            
            <input type="button" value="Submit" onClick={submitLoginDetails}/>
            <p>{loginSuccess}</p>
        </form> 
    )
}