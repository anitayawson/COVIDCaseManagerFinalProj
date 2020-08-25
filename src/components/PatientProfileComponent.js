import React from 'react';
import Sidebar from './sidebar'
import Avatar from '../images/avatar.jpg'

export default function PatientProfileComponent() {
    return (
        <div>
            <Sidebar />
            <div class="c-dropdown avatar_dropdown">
                <div class="c-avatar has-dropdown dropdown-toggle" id="dropdownMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="avatar__img" src={Avatar} alt="Name" />
                </div>
                <div class="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuAvatar">
                    <a class="c-dropdown__item dropdown-item" href="#">Edit Profile</a>
                    <a class="c-dropdown__item dropdown-item" href="#">Account Settings</a>
                    <a class="c-dropdown__item dropdown-item" href="#">Log out</a>
                </div>
            </div>
            <div style={{ marginLeft: 200, marginRight: 200, marginBottom: 60 }}>
                <div>
                    <h3 style={{ marginBottom: 50 }}>My Profile</h3>
                    <div>
                        <form>
                            <h6>Institution/Family Name</h6>
                            <input type="text" class="form-control" />
                            <h6>Representative Name</h6>

                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <h6>Address</h6>
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
                                    <h6>Email</h6>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col">
                                    <h6>Phone Number</h6>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <button type="button" class="btn btn-info">Save</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}