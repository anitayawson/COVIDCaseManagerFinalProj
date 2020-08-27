import React from "react";
import Avatar from '../../images/avatar.jpg'
import { stack as Menu } from "react-burger-menu";
import '../../navbar.css';
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

export default function navbar2(){
    return (
        <div class="row">
        <div class="container-fluid">
                <div class="col-xl-2 col-lg-2" style={{marginLeft:"-15px"}}>
                    <Menu>
                        <Link to="/"><img src={Logo} alt="Logo" class="sidebar-logo" style={{ height: "auto", width: 50, marginBottom: 50 }} /></Link>
                        <Link to="/profile" className="menu-item" >Profile</Link>
                        <Link to="/portal" className="menu-item">Portal</Link>
                        <Link to="/settings" href="menu-item">Settings</Link>
                        <Link to="/gethelp" class="menu-item">Get Help</Link>
                        <Link to="/" class="menu-item">Log out</Link>
                    </Menu>
                </div>
                
            <nav class="nav navbar navbar-light navigation">
                <div class="navbar-text col-lg-8 col-xl-8">
                    <h1>COVID-19 CASE</h1>
                    <h1>MANAGER</h1>
                    <h6>ONLINE DIAGNOSTIC SYSTEM</h6>
                </div>
                <div class="drop">
                    <div class="c-dropdown avatar_dropdown col-lg-2 col-xl-2">
                        <div class="c-avatar has-dropdown dropdown-toggle" id="dropdownMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img class="avatar__img" src={Avatar} alt="Name" />
                        </div>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAvatar">
                            <a class="dropdown-item" href="#">Edit Profile</a>
                            <a class="dropdown-item" href="#">Account Settings</a>
                            <a class="dropdown-item" href="#">Log out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    )
}

