import React from "react";

import { stack as Menu } from "react-burger-menu";
import '../../sidebar.css';
import Logo from '../../images/logo.png'

const sidebar2 = () => {
    return (
        <Menu>
            <a href="/"><img src={Logo} alt="Logo" class="sidebar-logo" style={{ height: 50, width: 50, marginBottom: 50 }} /></a>
            <a className="menu-item" href="/professionalprofile">Profile</a>
            <a className="menu-item" href="/portallogin">Portal</a>
            <a className="menu-item" href="/settings">Settings</a>
            <a className="menu-item" href="/gethelp">Get Help</a>
            <a className="menu-item" href="/">Log out</a>
        </Menu>
    )
}

export default sidebar2;