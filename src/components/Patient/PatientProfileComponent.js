import React from 'react';
import Navbar from '../navbar'
import Footer from '../footer'

export default function PatientProfileComponent() {
    return (
        <div>
            <Navbar />
       
            <div style={{ marginLeft: 350, marginRight: 350, marginTop: 180, marginBottom: 60 }}>
                <div>
                    <h3 style={{ marginBottom: 40 }}>My Profile</h3>
                    <div>
                        <form>
                            <h6 className="form-titles">Institution/Family Name</h6>
                            <input type="text" class="form-control" />
                            <h6 className="form-titles">Representative Name</h6>

                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <h6 className="form-titles">Address</h6>
                            <div class="form-group">
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div class="form-row">
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="City" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Country" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h6 className="form-titles">Email</h6>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col">
                                    <h6 className="form-titles">Phone Number</h6>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div style={{ textAlign: "center", marginTop: 20 }}>
                               <a href="/test"><button type="button" class="btn btn-info">Save</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}