
import Home from './components/home';
import About from './components/about';
import Inbox from './components/inbox';


export default [
    {
        path: "/",
        name: "home",
        exact:true,
        component: Home
    },
    {
        path: "/about",
        name: "about",
        exact: false,
        component: About
    },
    {
        path: "/inbox",
        name: "inbox",
        exact: false,
        component: Inbox
    }
]