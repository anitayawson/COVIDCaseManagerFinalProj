import React, { Component } from "react";
import Navbar2 from "./navbar2";
import Footer from "../footer";

class PortalLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffId: "",
      password: "",
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
        <Navbar2 />
        <div
          style={{
            marginLeft: 350,
            marginRight: 350,
            marginTop: 180,
            marginBottom: "8%",
            textAlign: "center",
          }}
        >
          <div>
            <p>
              Log in with your Staff ID to access patient information and manage
              consultation requests.
            </p>
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Staff ID"
              value={this.state.staffId}
              name="staffId"
              onChange={this.handleChange}
              style={{
                marginTop: 80,
                marginLeft: 185,
                marginBottom: 30,
                height: 50,
                width: 300,
                textAlign: "center",
                borderRadius: "25px",
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              style={{
                marginBottom: 30,
                marginLeft: 185,
                height: 50,
                width: 300,
                textAlign: "center",
                borderRadius: "25px",

              }}
            />
            <a href="/consultationrequests">
              <input
                type="submit"
                className="button"
                value="Log In"
                style={{
                  marginBottom: 30,
                  height: 50,
                  width: 300,
                  textAlign: "center",
                  borderRadius: "25px",
                  backgroundColor: "#388087",
                  color: "white",
                  borderStyle: "none",
                }}
              />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PortalLoginComponent;
