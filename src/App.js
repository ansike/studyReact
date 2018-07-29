import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import logo from "./logo.svg";
import "./App.css";
import routes  from "./router";
import Header from "./components/header";
import Sider from "./components/sider";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height:'100%' }}>  
          <Header />
          <div className="body">
            <Sider />
            <div className="content">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
