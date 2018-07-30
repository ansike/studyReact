import React,{Component} from 'react'
import {
    Route,
  } from 'react-router-dom';

import routes  from "../router";
import Header from "./header";
import Sider from "./sider";
export default class Homes extends Component{
    render(){
        return(
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
            
        )
    }
}