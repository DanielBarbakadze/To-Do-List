import React, {useState,useEffect}from 'react';
import { stringify } from 'querystring';

const ListOfToDoList = () => {


    const [currentList,setCurrentList]=useState({
        currentList: []
    })

    const [person,setPerson]=useState({
        name:"sandro",
        works: {
            List1: ["item1-1","item1-2","item1-3",],
            List2: ["item2-1","item2-2","item2-3",],
            List3: ["item3-1","item3-2","item3-3",],
            List4: ["item4-1","item4-2","item4-3",],
            List5: ["item5-1","item5-2","item5-3",],
            List6: ["item6-1","item6-2","item6-3",],
        }
    });
   
    const [checked,setChecked]=useState({
        'key' : undefined,
        'listText' : "",
        'target' : "",
        'id' : "",
        'previous': undefined
    });

    useEffect(() => {
        let temp = checked.listText.toString()
        temp = temp.replace(' ','')
        temp = temp.replace(' ','')
        setCurrentList({
            currentList: person.works[temp]
        })
    }, [checked]);

    function handleCheck(event){
        if(checked.listText==event.target.textContent){
            return;
        }
        else{
            event.target.className="listItem";
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
        checked.previous.className=""
        let temp = checked.listText.toString()
            temp = temp.replace(' ','')
            temp = temp.replace(' ','')
        delete person["works"][temp];
        setChecked({...checked,key:undefined,listText:"",previous:undefined})
    }
    
    return(
       
        <div>
            <div>
                {Object.keys(person["works"]).map((elem,i)=> <li onClick={(e) => handleCheck(e)}  value={i}> {elem} </li>) }
                <button onClick={() => handleDelete()}>Delete List</button>
             </div>
             {currentList.currentList && currentList.currentList.map((e) => <li>{e}</li>)}

        </div>
        
    );
}
export default ListOfToDoList;