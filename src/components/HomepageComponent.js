import React from 'react'

export default function HomepageComponent() {
    return (
        <div className="homepage">
            <div className="homepage-left">
                <h1>COVID-19 CASE MANAGER</h1>
                <h5>ONLINE DIAGNOSTIC SYSTEM</h5>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>
            <div className="login-section">
                <div className="login-titles">
                    <div>
                        <p>Patient</p>
                    </div>
                    <div>
                        <p>Health Professional</p>
                    </div>
                </div>
                <div className="login-form">
                    <div>
                        <input class="form-control" type="text" placeholder="email@address.com" />
                        <input class="form-control" type="text" placeholder="password" />
                    </div>
                    <div className="login-btn">
                        <button type="button" class="btn btn-primary btn-lg btn-block">Log in</button>
                    </div>
                    <div className="bottom-links">
                        <p>Forgot Password? </p>
                        <p> Don't have an account? Sign up</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
