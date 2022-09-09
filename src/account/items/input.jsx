import React,{useState} from "react";


export default function Input(prop){
    const valueName = prop.valueName;
    const reference = prop.reference;
    const [value,setValue] = useState("");
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    
    return(
        
        <div>
            <label for={valueName}>{valueName}</label>
            <input type="text" id={valueName} ref={reference} value={value} onChange={(event)=>handleChange(event)}/>
        </div>
        
    )
}

