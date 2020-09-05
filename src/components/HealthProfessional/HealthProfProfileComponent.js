import React from 'react';
import Navbar2 from './navbar2';
import Footer from '../footer';

import {Link} from 'react-router-dom'

export default function HealthProfProfileComponent() {
    return (
        <div>
            <Navbar2 />
            <div class="container profile">
                <h3 style={{ marginBottom: 30, textAlign: "center" }}>Health Personnel Profile</h3>
                <form>
                    <div class="row">
                        <div class="col-md-12" >
                            <div class="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Institution Name</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <label style={{ fontWeight: "bold" }} className="form-titles">Address</label>
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
                        <div class="col-lg-12">
                            <label style={{ fontWeight: "bold" }} className="form-titles">Personnel Name</label>
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
                            <div class="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Job Title</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Email</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label style={{ fontWeight: "bold" }} className="form-titles">Phone Number</label>
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
        </div >
    )
}
