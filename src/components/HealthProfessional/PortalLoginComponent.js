import React from 'react'
import Navbar2 from './navbar2'
import Footer from '../footer'

export default function PortalLoginComponent() {
    return (
        <div>
            <Navbar2 />
            <div style={{ marginLeft: 350, marginRight: 350, marginTop: 65, marginBottom: 60, textAlign: "center"}}>
                <p>Log in with your Staff ID to access patient information and manage consultation requests.</p>
                <div style={{position: "fixed", left: "39%"}}>
                    <input type="text" class="form-control" placeholder="Staff ID" style={{marginTop: 80, marginBottom: 30, height: 50, width: 300, textAlign: "center", borderRadius: "25px"}}/>
                    <input type="password" class="form-control" placeholder="Password" style={{marginBottom: 30, height: 50, width: 300, textAlign: "center", borderRadius: "25px"}} />
                    <a href="/consultationrequests"><input type="submit" class="button" value="Log In" style={{marginBottom: 30, height: 50, width: 300, textAlign: "center", borderRadius: "25px", backgroundColor: "#388087", color: "white", borderStyle: "none"}}/></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
