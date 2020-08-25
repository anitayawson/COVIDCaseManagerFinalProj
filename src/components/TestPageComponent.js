import React from 'react'
import Sidebar from './sidebar'
import Avatar from '../images/avatar.jpg'

export default function TestPageComponent() {
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
            <h3 style={{ marginBottom: 50 }}>COVID-19 Online Test</h3>
            <p>The test will take 10 minutes and provide instant results. Please answer ALL questions.</p>
            <p>Disclaimer: This is not an official COVID-19 test. For an official test, please contact a nearby hospital or testing center. </p>
            <div style={{ marginTop: 60 }}>
                <p> Click below to start your test!</p>
            </div>
            <div style={{textAlign: "center", marginTop: 50}}>
                <button type="button" class="btn btn-primary btn-lg">Take Test</button>
            </div>
        </div>
        </div>
    )
}
