import React from 'react';
import Navbar from '../navbar'
import Footer from '../footer'
import {Link} from 'react-router-dom'

// #F6F6F2

export default function PatientProfileComponent() {
    return (
        <div style={{backgroundColor: "#F6F6F2"}}>
            <Navbar />            
                <div class="container profile">
                    <h3 style={{ marginBottom: 30,textAlign: "center" }}>My Profile</h3>
                        <form class="">
                            <div class="row">
                                <div class="col-md-12" >
                                    <div class="form-group">
                                        <label style={{fontWeight:"bold"}} className="form-titles">Institution Name</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                <label style={{fontWeight:"bold"}} className="form-titles">Representative Name</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="First name" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                <label style={{fontWeight:"bold"}} className="form-titles">Address</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                </div>
                        
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="City" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Country" />
                                        </div>
                                    </div>  
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label style={{fontWeight:"bold"}} className="form-titles">Email</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label style={{fontWeight:"bold"}} className="form-titles">Phone Number</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12" style={{ textAlign: "center", marginTop: 20, position: "relative"}}>
                                    <Link to="/test"><button type="button" class="btn btn-info">Save</button></Link>
                                </div>
                            </div>
                            
                        </form>
                </div>
        
            <Footer />
        </div>
    )
}