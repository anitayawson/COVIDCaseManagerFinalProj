import React from 'react';
import Navbar2 from './navbar2';
import Footer from '../footer';

export default function ConsultRequestList() {
    return (
        <div>
            <Navbar2 />
            <div style={{ marginLeft: 300, marginRight: 200, marginTop: 180, marginBottom: 60, width: "60%"}}>
                <div>
                    <h3 style={{ marginBottom: 40 }}>Consultation Requests</h3>
                    <div class="container-fluid" style={{width: "100%", marginTop: "5%"}}>
                        <a href=""><div class="row" style={{height: "100px", color: "black"}}>
                            <div class="col-lg-8" style={{backgroundColor: "rgba(196,196,196,0.5)", textAlign: "left", paddingLeft:"40px", paddingTop: "15px", lineHeight: "15px"}}>
                                <p>Access bank, Cantonments Branch</p>
                                <p>Cantonments, Accra</p>
                                <p style={{color: "red"}}>5 suspected cases</p>
                            </div>
                            <div class="col-lg-4" style={{backgroundColor: "rgba(196,196,196,0.5)", textAlign: "right", paddingTop: "15px", lineHeight: "20px", paddingRight:"40px" }}>
                                <p>Requested by: Ama Mensah</p>
                                <p>2 hours ago</p>
                            </div>
                        </div></a>
                        <a href=""><div class="row" style={{height: "100px", color: "black"}}>
                            <div class="col-lg-8" style={{backgroundColor: "rgba(196,196,196,0.1)", textAlign: "left", paddingLeft:"40px", paddingTop: "15px", lineHeight: "15px"}}>
                                <p>Access bank, Cantonments Branch</p>
                                <p>Cantonments, Accra</p>
                                <p style={{color: "red"}}>5 suspected cases</p>
                            </div>
                            <div class="col-lg-4" style={{backgroundColor: "rgba(196,196,196,0.1)", textAlign: "right", paddingTop: "15px", lineHeight: "20px", paddingRight:"40px" }}>
                                <p>Requested by: Ama Mensah</p>
                                <p>2 hours ago</p>
                            </div>
                        </div></a>
                        <a href=""><div class="row" style={{height: "100px", color: "black"}}>
                            <div class="col-lg-8" style={{backgroundColor: "rgba(196,196,196,0.5)", textAlign: "left", paddingLeft:"40px", paddingTop: "15px", lineHeight: "15px"}}>
                                <p>Access bank, Cantonments Branch</p>
                                <p>Cantonments, Accra</p>
                                <p style={{color: "red"}}>5 suspected cases</p>
                            </div>
                            <div class="col-lg-4" style={{backgroundColor: "rgba(196,196,196,0.5)", textAlign: "right", paddingTop: "15px", lineHeight: "20px", paddingRight:"40px" }}>
                                <p>Requested by: Ama Mensah</p>
                                <p>2 hours ago</p>
                            </div>
                        </div></a>
                        <a href=""><div class="row" style={{height: "100px", color: "black"}}>
                            <div class="col-lg-8" style={{backgroundColor: "rgba(196,196,196,0.1)", textAlign: "left", paddingLeft:"40px", paddingTop: "15px", lineHeight: "15px"}}>
                                <p>Access bank, Cantonments Branch</p>
                                <p>Cantonments, Accra</p>
                                <p style={{color: "red"}}>5 suspected cases</p>
                            </div>
                            <div class="col-lg-4" style={{backgroundColor: "rgba(196,196,196,0.1)", textAlign: "right", paddingTop: "15px", lineHeight: "20px", paddingRight: "40px"}}>
                                <p>Requested by: Ama Mensah</p>
                                <p>2 hours ago</p>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
