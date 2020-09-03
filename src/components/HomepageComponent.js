import React, { Component } from "react";
import Logo from "../images/logo.png";
import Footer from "./footer";
import { Link } from "react-router-dom";

class HomepageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      emailaddress: "",
      password: "",
      confirmpassword: "",
      hospitalId: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="homepage">
          <div className="homepage-left">
            <img src={Logo} className="App-logo" alt="logo" />
            <h1
              style={{
                fontFamily: "Verdana",
                fontWeight: "bold",
                letterSpacing: "4px",
              }}
            >
              COVID-19 CASE
            </h1>
            <h1
              style={{
                fontFamily: "Verdana",
                fontWeight: "bold",
                letterSpacing: "4px",
              }}
            >
              MANAGER
            </h1>
            <h6 style={{ letterSpacing: "6px" }}>ONLINE DIAGNOSTIC SYSTEM</h6>
          </div>
          <div className="homepage-divider"></div>
          <div className="login-section">
            <div className="login-wrap">
              <div className="login-html">
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  checked
                />
                <label for="tab-1" className="tab">
                  Patient
                </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label for="tab-2" className="tab">
                  Health Professional
                </label>
                <div className="login-form">
                  <div className="sign-in-htm">
                    <div class="group">
                      <label for="user" className="label">
                        Username
                      </label>
                      <input id="user" type="text" className="input input_anim"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleChange}
                      />
                      {/* <span class="focus-input_anim"></span> */}
                    </div>
                    <div className="group">
                      <label for="pass" className="label">
                        Password
                      </label>
                      <input
                        id="pass"
                        type="password"
                        className="input input_anim"
                        data-type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                      />
                      {/* <span class="focus-input_anim"></span> */}
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        Keep me signed in
                      </label>
                    </div>
                    <div class="group">
                      <Link to="">
                        <input type="submit" className="button" value="Sign In" />
                      </Link>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                      <a href="#forgot">Forgot Password?</a>
                      <p>
                        {" "}
                        Don't have an account? <Link to="/signup">
                          Sign up
                        </Link>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sign-up-htm">
                    <div className="group">
                      <label for="user" className="label">
                        Hospital ID
                      </label>
                      <input id="user" type="text" className="input input_anim"
                       value={this.state.hospitalId}
                       name="hospitalId"
                       onChange={this.handleChange}
                      
                      />
                    </div>
                    <div class="group">
                      <label for="pass" className="label">
                        Email Address
                      </label>
                      <input id="pass" type="email" className="input input_anim"
                         value={this.state.emailaddress}
                         name="emailaddress"
                         onChange={this.handleChange}
                      />
                    </div>
                    <div class="group">
                      <label for="pass" className="label">
                        Password
                      </label>
                      <input
                        id="pass"
                        type="password"
                        className="input input_anim"
                        data-type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        Keep me signed in
                      </label>
                    </div>
                    <div className="group">
                      <a href="/professionalprofile">
                        <input type="submit" className="button" value="Sign In" />
                      </a>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                      <a href="#forgot">Forgot Password?</a> Don't have account?
                      <Link to="/signup"> Sign up</Link>
                      {/* <p> Don't have an account?  </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomepageComponent;
