import React, {useState,useEffect}from 'react';
const ListOfToDoList=()=>{
   
    const [person,setPerson]=useState({
        'name':"sandro",
        'works': {
            'vabaco3': ["misvla","wasvla","mosvla"],
            'tsu1': ["gamocda"],
            'vabaco2': ["misvla","wasvla","mosvla"],
            'tsu2': ["gamocda"],
            'vabaco1': ["misvla","wasvla","mosvla"],
            'tsu3': ["gamocda"]
        }
    });
   
    const [checked,setChecked]=useState({
        'key' : undefined,
        'listText' : "",
        'target' : "",
        'id' : "",
        'previous': undefined
    });
    function handleCheck(event){
        // console.log(checked.listText,event.target.textContent)
        if(checked.listText==event.target.textContent){
            return;
        }
        else{
            event.target.className="listItem";
            // console.log('else here','/',event.target,'/',checked.previous)
            if(checked.previous!=undefined){
                checked.previous.className=""
            }
            setChecked({
                ...checked,
                key:event.target.value,
                listText:event.target.textContent,
                id: event.target.attributes[1].value,
                previous: event.target
            });
        }
    }
    function handleDelete(){
        console.log(checked)
        checked.previous.className=""
        delete person["works"][checked.listText];
        setChecked({...checked,key:undefined,listText:"",previous:undefined})
    }
    
    return(
       
        <div>
            <div>
            { Object.keys(person["works"]).map((elem,i)=> <li onClick={(e) => handleCheck(e)}  value={i}> {elem} </li>) }
             <button onClick={() => handleDelete()}>Delete List</button>
             </div>
        </div>
        
    );
}
export default ListOfToDoList;