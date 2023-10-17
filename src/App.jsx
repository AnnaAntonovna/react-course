import React from "react";
import { HellolistApi } from "./components/hello-list-api";
import { AppContext } from "./components/AppContext";
import { FormNumber } from "./components/FormNumber";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HelloWorld } from "./components/hello-world";
import { HelloWorld2 } from "./components/hello-world-component";
//import "./global.css";

export function App() {
  const person = { name: "Anna", surname: "Baranova" };
  return (
    <Router>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/users' element={<HelloWorld2/>}></Route>
          <Route path='/' element={<HelloWorld/>}></Route>
        </Routes>
      </div>
      </Router>
  );
}
