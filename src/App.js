import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login, Registration, Main } from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Registration">Registration</Link>
            </li>
            <li>
              <Link to="/Main">Main</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Registration">
            <Registration />
          </Route>

          <Route path="/Main">
            <Main />
          </Route>

          {/* </Route> */}
          <Route path="/">
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
