import React from 'react';
import Typewriter from 'typewriter-effect';

export default function ResourcePageComponent() {
    return (
        <div style={{ marginLeft: 200, marginTop: 30, marginRight: 200, marginBottom: 60 }}>
            <div>
                <h3 style={{ marginBottom: 50 }}>COVID-19 Resources and Support</h3>
            </div>
            <div className="flex-container">
                <div className="flexbox-item horizontal" style={{ display: "flex", flexDirection: "column" }}>
                    <h5>Ghana Health Service COVID-19 Tracker</h5>
                    <button type="button" class="btn btn-outline-light">Go to Tracker</button>
                </div>
                <div className="flexbox-item long-vertical" style={{ display: "flex", flexDirection: "column" }}>
                    <Typewriter options={{
                        strings: ['Stay Home', 'Stay Safe', 'Stay Aware', 'Stay Calm'],
                        autoStart: true,
                        loop: true,
                    }}/>
                </div>
                <div className="flexbox-item vertical" style={{ display: "flex", flexDirection: "column" }}>
                    <h6>World Health Organization (WHO) Coronivirus Disease Global Data</h6>
                    <button type="button" class="btn btn-outline-danger">View</button>
                </div>
                <div className="flexbox-item vertical" style={{ display: "flex", flexDirection: "column" }}>
                    <h5>Emergency Numbers</h5>
                    <a href="112"> 112</a>
                    <a href="+233558439868">+233 55 843 9868</a>
                    <a href="+233509497700">+233 50 949 7700</a>
                </div>
                <div className="flexbox-item long-horizontal">5</div>
            </div>
        </div>
    )
}
