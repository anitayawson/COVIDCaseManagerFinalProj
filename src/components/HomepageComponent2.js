import React, { Component } from "react";
import Logo from "../images/logo.png";
import Footer from "./footer";
import { Link } from "react-router-dom";

class HomepageComponent2 extends Component {
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
                <label htmlFor="tab-1" className="tab">
                  Patient
                </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                  Health Professional
                </label>
                <div className="login-form">
                  <div className="sign-in-htm">
                    <div className="group">
                      <label htmlFor="username" className="label">
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="input input_anim"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="emailaddress" className="label">
                        Email address
                      </label>
                      <input
                        id="emailaddress"
                        type="email"
                        className="input input_anim"
                        data-type="email"
                        value={this.state.emailaddress}
                        name="emailaddress"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="pass" className="label">
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
                    <div className="group">
                      <label htmlFor="pass" className="label">
                        Confirm Password
                      </label>
                      <input
                        id="pass"
                        type="password"
                        className="input input_anim"
                        data-type="password"
                        value={this.state.confirmpassword}
                        name="conformpassword"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="group">
                      <Link to="/profile">
                        <input
                          type="submit"
                          className="button"
                          value="Sign Up"
                        />
                      </Link>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                      <p>
                        {" "}
                        Already have an account? <Link to="/">
                          Sign in
                        </Link>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="sign-up-htm">
                    <div className="group">
                      <label htmlFor="user" class="label">
                        Hospital ID
                      </label>
                      <input
                        id="user"
                        type="text"
                        className="input input_anim"
                        value={this.state.hospitalId}
                        name="hospitalId"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="pass" className="label">
                        Email Address
                      </label>
                      <input
                        id="pass"
                        type="text"
                        className="input input_anim"
                        value={this.state.emailaddress}
                        name="emailaddress"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="pass" class="label">
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
                    <div className="group">
                      <label htmlFor="pass" className="label">
                        {" "}
                        Confirm Password
                      </label>
                      <input
                        id="pass"
                        type="password"
                        className="input input_anim"
                        data-type="password"
                        value={this.state.confirmpassword}
                        name="confirmpassword"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="group">
                      <a href="/professionalprofile">
                        <input type="submit" class="button" value="Sign Up" />
                      </a>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                      Already have an account?<Link to="/">Sign in</Link>
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

export default HomepageComponent2;