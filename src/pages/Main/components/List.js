import React from 'react';
function List(props){
    function handleClick(){
        let newList = props.list;
         newList = newList.map((el) => {
        if(el.id!=props.id) return el; 
        })
         newList = newList.filter((el) => el!=undefined);
       props.handleDelete(newList);
    }

    function handleLine(){
        let newList = props.list;
        newList = newList.map((el) => {
            if(el.id == props.id) {
                // el.style = {"text-decoration" : "line-through" };
                el.style = {"text-decoration" : "line-through"};
                console.log(el,el.style);
                return el;
            }
            else {
                return el;
            }
        });
        props.handleLine(newList);
        console.log(newList);
    }
return(
    <div>
      
        {<div style = {props.style} className="elements"> {props.value} </div>}
              
          
        <button onClick = {() => handleClick()} >
            Delete
        </button>
        <button onClick = {() => handleLine() } >
            Done 
        </button>
    </div>

)
}

export default List;