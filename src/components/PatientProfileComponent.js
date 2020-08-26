import React from 'react';
import Sidebar from './sidebar'
import Navbar from './navbar'

export default function PatientProfileComponent() {
    return (
        <div>
            <Sidebar />
            <Navbar />
            {/* <nav class="navbar sticky-top navbar-light bg-light" style={{zIndex: -1}}>
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
            </nav> */}
            {/* <div class="topnav">
                    <h1 style={{ fontFamily: "Verdana", fontWeight: "bold", letterSpacing: "4px", fontSize: 14 }}>COVID-19 CASE</h1>
                    <h1 style={{ fontFamily: "Verdana", fontWeight: "bold", letterSpacing: "4px", fontSize: 14 }}>MANAGER</h1>
                    <h6 style={{ letterSpacing: "6px", fontSize: 10 }}>ONLINE DIAGNOSTIC SYSTEM</h6>
                </div>
                <div class="c-dropdown avatar_dropdown">
                    <div class="c-avatar has-dropdown dropdown-toggle" id="dropdownMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="avatar__img" src={Avatar} alt="Name" />
                    </div>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAvatar" style={{ background: "#373a47" }}>
                        <a class="dropdown-item" href="#">Edit Profile</a>
                        <a class="dropdown-item" href="#">Account Settings</a>
                        <a class="dropdown-item" href="#">Log out</a>
                    </div>
                </div> */}
            <div style={{ marginLeft: 350, marginRight: 350, marginTop: 25, marginBottom: 60 }}>
                <div>
                    <h3 style={{ marginBottom: 40 }}>My Profile</h3>
                    <div>
                        <form>
                            <h6 className="form-titles">Institution/Family Name</h6>
                            <input type="text" class="form-control" />
                            <h6 className="form-titles">Representative Name</h6>

                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <h6 className="form-titles">Address</h6>
                            <div class="form-group">
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div class="form-row">
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="City" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Country" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h6 className="form-titles">Email</h6>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col">
                                    <h6 className="form-titles">Phone Number</h6>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div style={{ textAlign: "center", marginTop: 20 }}>
                               <a href="/test"><button type="button" class="btn btn-info">Save</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}