import React from 'react'
import Sidebar from './sidebar'
import Navbar from '../navbar'
import Footer from '../footer'

export default function TestPageComponent() {
    return (
        <div>

            <Navbar />
            <div style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom:"20%"}}>
                <h3 style={{ marginBottom: 40 }}>COVID-19 Online Test</h3>
                <p>The test will take 10 minutes and provide instant results. Please answer ALL questions.</p>
                <p>Disclaimer: This is not an official COVID-19 test. For an official test, please contact a nearby hospital or testing center. </p>
                <div style={{ marginTop: 60 }}>
                    <p> Click below to start your test!</p>
                </div>
                <div style={{ textAlign: "center", marginTop: 50 }}>
                    <button type="button" class="btn btn-primary btn-lg">Take Test</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
