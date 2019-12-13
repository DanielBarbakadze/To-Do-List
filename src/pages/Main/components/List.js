import React, { useState, useEffect } from 'react';
import '../../../../src/App.css';
function List(props){

    const [buttonName,setButtonName] = useState('Done')

    function handleClick(){
        let newList = props.list;
         newList = newList.map((el) => {
        if(el.id!=props.id) return el; 
        })
         newList = newList.filter((el) => el!=undefined);
       props.handleDelete(newList);
    }
    useEffect(() => {
        if(props.style!=undefined){
            if(props.style.textDecoration==="line-through"){
                setButtonName('Undo')
            }
            else{
                setButtonName('Done')
            }
        }
        },[handleLine]
    );
    

    function handleLine(){
        let tempList = props.list;
        tempList = tempList.map((el) => {
            if(el.id == props.id) {
                if(el.style && el.style.textDecoration==="line-through"){
                    el.style = {textDecoration : ""}
                    
                    
                }
                else el.style = {textDecoration : "line-through"};
                return el;
            }
            else {
                return el;
            }
        });
        props.handleLine(tempList);
        // console.log(tempList);
    }
return(
    <div>
        {<div style = {props.style} className="listElements"> {props.value} </div>}
              
        <button onClick = {() => handleClick()} >
            Delete
        </button>
        <button onClick = {() => handleLine() } >
            {buttonName} 
        </button>
    </div>

)
}

export default List;