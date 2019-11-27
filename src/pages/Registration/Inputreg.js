import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

  function InputReg(props){

    function handleChange(e){
        props.onChange(e);

    }
    function changePlaceHolder(name){
      if(name==="confirm password") return("Confirm password");
      else return("Enter " + name);
    }
    return(
       <div>
        <input 
        name = {props.name} 
        type = {props.type}
        placeholder ={changePlaceHolder(props.name)}
        className = {props.name}
        onChange ={((e) => handleChange(e))}
         />
        </div>

    )
}



export default InputReg;