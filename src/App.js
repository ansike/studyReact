import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
// import logo from "./logo.svg";
import "./App.css";

import Home from './components/homes';
import About from './components/about';
import Inbox from './components/inbox';
let ro = [
    {
        path: "/home",
        name: "homes",
        exact:false,
        component: Home
    },
    {
        path: "/sabouts",
        name: "about",
        exact: true,
        component: About
    },
    {
        path: "/sinboxs",
        name: "inbox",
        exact: true,
        component: Inbox
    }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height:'100%' }}>  
          <div >
            <Route path="/" render={()=><Redirect to="/home"/>}/>
            {ro.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
                />
            ))}
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
