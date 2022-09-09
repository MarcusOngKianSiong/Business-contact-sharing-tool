import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import React,{useState,useEffect,useRef} from 'react';
import InputValues from './items/input'
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



export default function Profile(prop){

    const [currentSavedValues, setCurrentSavedValues] = useState({
        profileImage: prop.profileImage,
        name: prop.name,
        email: prop.email,
        contact: prop.contact,
        editOrSave: "edit"
    })

    const checkValuesAndSave = () => {
        console.log()
    }

    const inputEmailReference = useRef();
    const inputNameReference = useRef();
    const inputContactReference = useRef();
    
    const handleSubmit = async () => {


        if(currentSavedValues.editOrSave === "save"){
            await fetch(`http://localhost:3000/save?email=${inputEmailReference}&name=${inputNameReference}&contact=${inputContactReference}`)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                if(res.DataSavedSuccessfully === true){
                    // Change save to edit
                }
            
        
                if(res.DataSavedSuccessfully === false){
                    // Add a new message in the form
                
                }
            })
        }
        
        if(currentSavedValues === "edit"){
            setCurrentSavedValues((current)=>{
                current.editOrSave = "save";
                return current;
            })
            // create a new button
        }

    }

    return(
        <form>
            <img id="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png" alt="Lalalala"/>
            <InputValues valueName="name" reference={inputNameReference}/>
            <InputValues valueName="Contact" reference={inputContactReference}/>
            <InputValues valueName="email" reference={inputEmailReference}/>
            <input type="button" value={currentSavedValues.editOrSave} onClick={handleSubmit}/>
        </form>
    )
}



