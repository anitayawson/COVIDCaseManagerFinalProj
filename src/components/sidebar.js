import React from "react";
import { stack as Menu } from "react-burger-menu";
import '../sidebar.css';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/profile">Profile</a>
            <a className="menu-item" href="/test">Test</a>
            <a className="menu-item" href="/resources">Resources & Support</a>
            <a className="menu-item" href="/settings">Settings</a>
            <a className="menu-item" href="/gethelp">Get Help</a>
            <a className="menu-item" href="/logout">Log out</a>
        </Menu>
    );
};