import React from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from '../navbar'
import Footer from '../footer'

export default function ResourcePageComponent() {
    return (
        <div>
            <Navbar />
            <div style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: 5 }}>
                <div className="flex-container">
                    <div className="flexbox-item horizontal" style={{ display: "flex", flexDirection: "column" }}>
                        <h5 style={{ color: "#fff", fontWeight: "bold" }}>Ghana Health Service COVID-19 Tracker</h5>
                        <a href="https://ghanahealthservice.org/covid19/" target="_blank"><button type="button" class="btn btn-danger" style={{marginTop: 25}}>Go to Tracker</button></a>
                    </div>
                    <div className="flexbox-item long-vertical" style={{ display: "flex", flexDirection: "column", fontSize: 40 }}>
                        <Typewriter className="typewriter-effect"
                            options={{
                                strings: ['Stay Home', 'Stay Safe', 'Stay Aware', 'Stay Calm'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className="flexbox-item vertical1" style={{ display: "flex", flexDirection: "column"}}>
                        <h5 style={{ color: "#388087", fontWeight: "bold" }}>World Health Organization (WHO) Coronavirus Disease Global Data</h5>
                        <a href="https://covid19.who.int/" target="_blank"><button type="button" class="btn btn-danger" style={{marginTop: 25}}>View</button></a>
                    </div>
                    <div className="flexbox-item vertical2" style={{ display: "flex", flexDirection: "column" }}>
                        <h5 style={{ color: "#388087", fontWeight: "bold", marginBottom: 25}}>Emergency Numbers</h5>
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
