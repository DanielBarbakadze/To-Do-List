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
    return(
       <div>

        <input 
        name = {props.name} 
        type = {props.type}
        placeholder ={props.name}
        className = {props.name}
        onChange ={((e) => handleChange(e))}
         />
        </div>

    )
}



export default InputReg;