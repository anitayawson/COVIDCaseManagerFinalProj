import React from 'react'
import Logo from '../images/logo.png'

export default function HomepageComponent() {
    return (
        <div className="homepage">
            <div className="homepage-left">
                <img src={Logo} className="App-logo" alt="logo" />
                <h1 style={{ fontFamily: "Verdana", fontWeight: "bold", letterSpacing: "4px" }}>COVID-19 CASE</h1>
                <h1 style={{ fontFamily: "Verdana", fontWeight: "bold", letterSpacing: "4px" }}>MANAGER</h1>
                <h6 style={{ letterSpacing: "6px" }}>ONLINE DIAGNOSTIC SYSTEM</h6>
            </div>
            <div className="homepage-divider"></div>
            <div className="login-section">
                <div class="login-wrap">
                    <div class="login-html">
                        <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Patient</label>
                        <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Health Professional</label>
                        <div class="login-form">
                            <div class="sign-in-htm">
                                <div class="group">
                                    <label for="user" class="label">Username</label>
                                    <input id="user" type="text" class="input" />
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Password</label>
                                    <input id="pass" type="password" class="input" data-type="password" />
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label class="form-check-label" for="defaultCheck1">
                                            Keep me signed in
                                        </label>
                                </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Sign In" />
                                    </div>
                                    <div class="hr"></div>
                                    <div class="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                        <p> Don't have an account? <a href="#signup">Sign up</a> </p>
                                    </div>
                                </div>
                                <div class="sign-up-htm">
                                    <div class="group">
                                        <label for="user" class="label">Hospital ID</label>
                                        <input id="user" type="text" class="input" />
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Email Address</label>
                                        <input id="pass" type="text" class="input" />
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Password</label>
                                        <input id="pass" type="password" class="input" data-type="password" />
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Keep me signed in
                                        </label>
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Sign In" />
                                    </div>
                                    <div class="hr"></div>
                                    <div class="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                        <p> Don't have an account? <a href="#signup">Sign up</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
