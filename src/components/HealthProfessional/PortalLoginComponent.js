import React from 'react'
import Navbar2 from './navbar2'
import Footer from '../footer'

export default function PortalLoginComponent() {
    return (
        <div>
            <Navbar2 />
            <div style={{ marginLeft: 350, marginRight: 350, marginTop: 180, marginBottom: "8%", textAlign: "center"}}>
                <div>
                <p>Log in with your Staff ID to access patient information and manage consultation requests.</p>
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Staff ID" style={{marginTop: 80, marginLeft: 185 ,marginBottom: 30, height: 50, width: 300, textAlign: "center", borderRadius: "25px"}}/>
                    <input type="password" class="form-control" placeholder="Password" style={{marginBottom: 30, marginLeft: 185, height: 50, width: 300, textAlign: "center", borderRadius: "25px"}} />
                    <a href="/consultationrequests"><input type="submit" class="button" value="Log In" style={{marginBottom: 30, height: 50, width: 300, textAlign: "center", borderRadius: "25px", backgroundColor: "#388087", color: "white", borderStyle: "none"}}/></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
