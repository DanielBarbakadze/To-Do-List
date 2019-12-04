import React from 'react';
import ListOfToDoList from './ListOfToDoList'
import './Mainbar.css';
import Page from './Page';
export default function Navbar() {
    return (
      <div className="Mainbar column">
        <div className="Workingbar">
          <h1>Main Bar </h1>
          <Page
          />
        </div>
      </div>
    )
  }