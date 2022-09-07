import React,{useRef} from "react";

export default function Register(prop){
    const registerEmail = prop.registerEmail;
    const registerPassword = prop.registerPassword;
    const registerRFID = prop.registerRFID;
    const registerPasswordConfirmation = prop.registerPasswordConfirmation;
    const registerName = prop.registerName;
    const registerContact = prop.registerContact;
    const registerAgreeToTermsAndCondition = prop.registerAgreeToTermsAndCondition;
    let registrationOutcome = null;
    
    if(prop.registrationOutcome === false){
        registrationOutcome = "Error in registering. Please try again."
    }
    
    console.log("outcome: ",prop.registrationOutcome)
    const submitRegistrationDetails = prop.submitRegistrationDetails;
    
    return(
        <form>
            <label for="RFID">RFID</label>
            <input type="text" id="RFID" ref={registerRFID}/>
            <label for="email">Email</label>
            <input type="text" id="email" ref={registerEmail}/>
            <label for="password">Password</label>
            <input type="text" id="password" ref={registerPassword}/>
            <label for="passwordConfirmation">Password Confirmation</label>
            <input type="text" id="passwordConfirmation" ref={registerPasswordConfirmation}/>
            <label for="name">Name</label>
            <input type="text" id="name" ref={registerName}/>
            <label for="contact">Contact</label>
            <input type="text" id="contact" ref={registerContact}/>
            <input type="checkbox" id="agreeToTermsAndConditions" ref={registerAgreeToTermsAndCondition}/>
            <input type="button" value="Submit" onClick={submitRegistrationDetails}/>
            
            <p>{registrationOutcome}</p>
        </form>
    )
}