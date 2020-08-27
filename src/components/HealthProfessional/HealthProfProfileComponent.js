import React from 'react';
import Sidebar2 from './sidebar2';
import Navbar from '../navbar';
import Footer from '../footer';

export default function HealthProfProfileComponent() {
    return (
        <div>
            <Sidebar2 />
            <Navbar />
            <div style={{ marginLeft: 350, marginRight: 350, marginTop: 25, marginBottom: 60 }}>
                <div>
                    <h3 style={{ marginBottom: 40 }}>Health Personnel Profile</h3>
                    <div>
                        <form>
                            <h6 className="form-titles">Institution Name</h6>
                            <input type="text" class="form-control" />
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
                            <h6 className="form-titles">Personnel Name</h6>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <h6 className="form-titles">Job Title</h6>
                            <input type="text" class="form-control" />
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
                                <a href="/portallogin"><button type="button" class="btn btn-info">Save</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
