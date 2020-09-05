import React, { Component } from 'react';
import Navbar2 from './navbar2';
import Footer from '../footer';

class HealthProfProfileComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        institutionname: "",
        mainstreet: "",
        apartment: "",
       firstname : "",
       lastname: "",
       city: "",
       country: "",
        email: "",
        phone: "",
        jobtitle: "",
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

    render(){
    return (
        <div style={{ backgroundColor: "#F6F6F2" }}>
            <Navbar2 />
            <div class="container" style={{ marginTop: 180, marginBottom: 60 }}>
                <h3 style={{ marginBottom: 30, marginLeft: 200 }}>Health Personnel Profile</h3>
                <form onSubmit={this.handleSubmit}>
                    <div class="row" style={{ paddingRight: 200, paddingLeft: 200 }}>
                        <div class="col-lg-12 col-md-12 col-sm-12" >
                            <div class="form-group">

                                <label style={{ fontWeight: "bold" }} className="form-titles">Institution Name</label>
                                <input type="text" class="form-control"
                                   value={this.state.hospitalId}
                                   name="institutionname"
                                   onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <label style={{ fontWeight: "bold" }} className="form-titles">Address</label>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
                                    value={this.state.mainstreet}
                                    name="mainstreet"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                                    value={this.state.apartment}
                                    name="apartment"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="City"
                                    value={this.state.city}
                                    name="city"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Country"
                                    value={this.state.country}
                                    name="country"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <label style={{ fontWeight: "bold" }} className="form-titles">Personnel Name</label>
                        </div>
                        <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="First name"
                                    value={this.state.firstname}
                                    name="firstname"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Last name"
                                   value={this.state.lastname}
                                   name="lastname"
                                   onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12" >
                            <div className="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Job Title</label>
                                <input type="text" class="form-control"
                                  value={this.state.jobtitle}
                                  name="jobtitle"
                                  onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Email</label>
                                <input type="text" className="form-control"
                                   value={this.state.hospitalId}
                                   name="email"
                                   onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Phone Number</label>
                                <input type="text" className="form-control"
                                   value={this.state.phone}
                                   name="phone"
                                   onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        {/* <div style={{ textAlign: "center", marginTop: 20 }}>
                            <a href="/portallogin"><button type="button" class="btn btn-info">Save</button></a>
                        </div> */}

                   <link to= "/PortalLogin">   
                         <button
              type="submit"
              className="rounded-pill"
              style={{
                margin: 10,
                marginLeft: 300,
                background:"lightgreen",
                color:"black" ,
                marginTop:25
                
              }}
            >
              Save Changes
            </button>
            </link>
                    </div>
                </form>
            </div>
            <Footer />
        </div >
    )
}
}

export default HealthProfProfileComponent;
