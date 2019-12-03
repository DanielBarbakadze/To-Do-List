import React from 'react';
import ListOfToDoList from './ListOfToDoList'
import './Mainbar.css';
export default function Navbar() {
    return (
      <div className="Mainbar column">
        <div className="Workingbar">
          <h1>Main Bar </h1>
          <ListOfToDoList
            // {console.log(props)}
          />
        </div>
      </div>
    )
  }