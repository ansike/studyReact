import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import logo from "./logo.svg";
import "./App.css";
import routes  from "./router";
import Top from "./components/top";
import Sider from "./components/sider";

{/* <ul className="siderBar">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/inbox">Topics</Link></li>
</ul> */}

class App extends Component {
  render() {
    return (
      <Router>
        <div>  
          <Top />
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
