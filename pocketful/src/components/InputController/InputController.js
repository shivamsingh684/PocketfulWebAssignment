import React from "react";

function InputController(props){
    return(
       
         <div className="inputContainer">
         {props.label && <lable>{props.label}</lable>}
         <input type="text"{...props}/>
         </div>
       
    )
}

export default InputController