import React from 'react';
import Navbar2 from './navbar2';
import Footer from '../footer';

export default function HealthProfProfileComponent() {
    return (
        <div>
            <Navbar2 />
            <div class="container" style={{ marginTop: 180, marginBottom: 60 }}>
                <h3 style={{ marginBottom: 30, marginLeft: 200 }}>Health Personnel Profile</h3>
                <form>
                    <div class="row" style={{ paddingRight: 200, paddingLeft: 200 }}>
                        <div class="col-lg-12 col-md-12 col-sm-12" >
                            <div class="form-group">

                                <label style={{ fontWeight: "bold" }} className="form-titles">Institution Name</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <label style={{ fontWeight: "bold" }} className="form-titles">Address</label>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="City" />
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Country" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <label style={{ fontWeight: "bold" }} className="form-titles">Personnel Name</label>
                        </div>
                        <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First name" />
                            </div>
                        </div>
                        <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last name" />
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12" >
                            <div class="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Job Title</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Email</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Phone Number</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        {/* <div style={{ textAlign: "center", marginTop: 20 }}>
                            <a href="/portallogin"><button type="button" class="btn btn-info">Save</button></a>
                        </div> */}
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
                    </div>
                </form>
            </div>
            <Footer />
        </div >
    )
}
