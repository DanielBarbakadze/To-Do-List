import React, {useState,useEffect}from 'react';
import { stringify } from 'querystring';

const ListOfToDoList = () => {
   
    const [currentList,setCurrentList]=useState({
        'currentList': []
    })

    const [person,setPerson]=useState({
        'name':"sandro",
        'works': {
            'List1': ["item1","item1","item1",],
            'List2': ["item2","item2","item2",],
            'List3': ["item3","item3","item3",],
            'List4': ["item4","item4","item4",],
            'List5': ["item5","item5","item5",],
            'List6': ["item6","item6","item6",],
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
            ...currentList,
            currentList: person.works[temp]
        })
    }, [checked]);

    function handleCheck(event){
        if(checked.listText==event.target.textContent){

            // don't delete please
            // let temp = checked.listText.toString()
            // temp = temp.replace(' ','')
            // temp = temp.replace(' ','')
            // console.log(person.works[temp])
            //
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
                {currentList.currentList}
             </div>
        </div>
        
    );
}
export default ListOfToDoList;