import React from 'react'
import Avatar from '../images/avatar.jpg'

export default function navbar() {
    return (
        <div>
            <nav class="navbar sticky-top navbar-light bg-light" style={{ zIndex: -1 }}>
                <span class="navbar-text" style={{ textAlign: "center", position: "relative", left: "39%" }}>
                    <h1 style={{ fontFamily: "Verdana", fontWeight: "bold", letterSpacing: "4px", fontSize: 14 }}>COVID-19 CASE</h1>
                    <h1 style={{ fontFamily: "Verdana", fontWeight: "bold", letterSpacing: "4px", fontSize: 14 }}>MANAGER</h1>
                    <h6 style={{ letterSpacing: "6px", fontSize: 10 }}>ONLINE DIAGNOSTIC SYSTEM</h6>
                </span>
                <div class="c-dropdown avatar_dropdown">
                    <div class="c-avatar has-dropdown dropdown-toggle" id="dropdownMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="avatar__img" src={Avatar} alt="Name" />
                    </div>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAvatar" style={{ background: "#373a47" }}>
                        <a class="dropdown-item" href="#">Edit Profile</a>
                        <a class="dropdown-item" href="#">Account Settings</a>
                        <a class="dropdown-item" href="#">Log out</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
