import React from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from '../navbar'
import Footer from '../footer'

export default function ResourcePageComponent() {
    return (
        <div style={{backgroundColor: "#9aa6a3"}}>
            <Navbar />
            <div style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: 60 }}>
                <div className="flex-container">
                    <div className="flexbox-item horizontal" style={{ display: "flex", flexDirection: "column" }}>
                        <h5>Ghana Health Service COVID-19 Tracker</h5>
                        <a href="https://ghanahealthservice.org/covid19/" target="_blank"><button type="button" class="btn btn-outline-light">Go to Tracker</button></a>
                    </div>
                    <div className="flexbox-item long-vertical" style={{ display: "flex", flexDirection: "column" }}>
                        <Typewriter 
                        // style={{size: 50}}
                        options={{
                            strings: ['Stay Home', 'Stay Safe', 'Stay Aware', 'Stay Calm'],
                            autoStart: true,
                            loop: true,
                        }} />
                    </div>
                    <div className="flexbox-item vertical" style={{ display: "flex", flexDirection: "column" }}>
                        <h6>World Health Organization (WHO) Coronivirus Disease Global Data</h6>
                        <a href="https://covid19.who.int/" target="_blank"><button type="button" class="btn btn-outline-danger">View</button></a>
                    </div>
                    <div className="flexbox-item vertical" style={{ display: "flex", flexDirection: "column" }}>
                        <h5>Emergency Numbers</h5>
                        <a href="112"> 112</a>
                        <a href="+233558439868">+233 55 843 9868</a>
                        <a href="+233509497700">+233 50 949 7700</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
