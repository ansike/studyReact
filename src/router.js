
import Home from './components/home';
import About from './components/about';
import Inbox from './components/inbox';


export default [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/inbox",
        name: "inbox",
        component: Inbox
    }
]