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
export default function Profile(prop){

    // replace with prop.[]
    const name = "bob"
    const contact = 12345
    const email = "bob@gmail.com"

    const [editOrSave,setEditOrSave] = useState({
        next: "save",
        editPersonalDetails: ""
    });

    const changeEditToSaveAndViceVersa = () => {
        if(editOrSave.next === "edit"){
            setEditOrSave({next: "save",editPersonalDetails: ""})
        }else{
            setEditOrSave({next: "edit", editPersonalDetails: "disabled"})
        }
    }

    useEffect(()=>{

    },[editOrSave])

    return(
        <form>
            <img id="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png" alt="Lalalala"/>
            <label for="name">Name</label>
            <input type="text" value="siometh" id="name"/>
            <label for="contact">Contact</label>
            <input type="text" value={contact} disabled={editOrSave.editPersonalDetails} id="contact"/>
            <label for="email">Email</label>
            <input type="text" value={email} disabled={editOrSave.editPersonalDetails} id="email"/>
            <input type="button" value={editOrSave.next} onClick={changeEditToSaveAndViceVersa}/>
        </form>
    )
}