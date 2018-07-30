
import Home from './components/home';
import About from './components/about';
import Inbox from './components/inbox';


export default [
    {
        path: "/home",
        name: "home",
        exact:true,
        component: Home
    },
    {
        path: "/home/about",
        name: "about",
        exact: false,
        component: About
    },
    {
        path: "/home/inbox",
        name: "inbox",
        exact: true,
        component: Inbox
    }
]