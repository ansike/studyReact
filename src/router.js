import React,{Component} from 'react'
// 首先我们需要导入一些组件...
import { Switch,Router, Route, Link } from 'react-router'

import Home from './components/home';
import About from './components/about';
import Inbox from './components/inbox';

export default class Routers extends Component{

    render(){
        return (
            <Router>
                <Switch>
                <Route path="/" component={Home}>
                    <Route path="about" component={About} />
                    <Route path="inbox" component={Inbox} />
                </Route>
                </Switch>
            </Router>
        )
    }
}