import React from "react";
import { stack as Menu } from "react-burger-menu";
import '../../sidebar.css';
import Logo from '../../images/logo.png'

const sidebar = () => {
    return (
        <Menu>
            <a href="/"><img src={Logo} alt="Logo" class="sidebar-logo" style={{ height: 50, width: 50, marginBottom: 50 }} /></a>
            <a className="menu-item" href="/profile">Profile</a>
            <a className="menu-item" href="/test">Test</a>
            <a className="menu-item" href="/resources">Resources & Support</a>
            <a className="menu-item" href="/settings">Settings</a>
            <a className="menu-item" href="/gethelp">Get Help</a>
            <a className="menu-item" href="/">Log out</a>
        </Menu>
    )
}

export default sidebar;

// export default props => {
//     return (
//         <Menu>
//             <img src={Logo} alt="Logo" class="sidebar-logo" style={{height: 50, width: 50, marginBottom: 35}}/>
//             <a className="menu-item" href="/">Home</a>
//             <a className="menu-item" href="/profile">Profile</a>
//             <a className="menu-item" href="/test">Test</a>
//             <a className="menu-item" href="/resources">Resources & Support</a>
//             <a className="menu-item" href="/settings">Settings</a>
//             <a className="menu-item" href="/gethelp">Get Help</a>
//             <a className="menu-item" href="/logout">Log out</a>
//         </Menu>
//     );
// };