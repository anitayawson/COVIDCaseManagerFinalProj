import React, { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

// #F6F6F2

class PatientProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: "",
      firstname: "",
      lastname: "",
      address1: "",
      address2: "",
      city: "",
      country: "",
      email: "",
      phone: "",
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
      <div style={{ backgroundColor: "#F6F6F2" }}>
        <Navbar />

        {/* <div style={{ marginLeft: 350, marginRight: 350, marginTop: 180, marginBottom: 60 }}> */}

        <div className="container" style={{ marginTop: 180, marginBottom: 60 }}>
          <h3 style={{ marginBottom: 30, marginLeft: 200 }}>My Profile</h3>
          <form onSubmit={this.handleSubmit}>
            <div
              className="row"
              style={{ paddingRight: 200, paddingLeft: 200 }}
            >
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <label
                    htmlFor="institution"
                    style={{ fontWeight: "bold" }}
                    className="form-titles"
                  >
                    Institution Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.institution}
                    name="institution"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <label
                  htmlFor="representative"
                  style={{ fontWeight: "bold" }}
                  className="form-titles"
                >
                  Representative Name
                </label>
              </div>
              <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <label
                  htmlFor="address"
                  style={{ fontWeight: "bold" }}
                  className="form-titles"
                >
                  Address
                </label>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    name="address1"
                    value={this.state.address1}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                    value={this.state.address2}
                    name="address2"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={this.state.city}
                    name="city"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <label
                    htmlFor="email"
                    style={{ fontWeight: "bold" }}
                    className="form-titles"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <label
                    htmlFor="phonenumber"
                    style={{ fontWeight: "bold" }}
                    className="form-titles"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                  />
                </div>
              </div>

              <div style={{ textAlign: "center", marginTop: 20 }}>
                                    <a href="/test"><button type="button" class="btn btn-info">Save</button></a>
                                    </div> 
                                         
        {/* <button type="submit" className="rounded-pill">
          Save Changes
        </button> */}
    
        
            </div>
       
          </form>
        </div>


        <Footer />
      </div>
    );
  }
}

export default PatientProfileComponent;
