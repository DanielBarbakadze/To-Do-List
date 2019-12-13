import React, { useState } from 'react';

  function InputReg(props){

    function handleChange(e){
        props.onChange(e);

    }
    function changePlaceHolder(name){
      if(name==="confirm_password") return("Confirm password");
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