import React from 'react'

export default function TestPageComponent() {
    return (
        <div style={{ marginLeft: 200, marginTop: 30, marginRight: 200, marginBottom: 60 }}>
            <h3 style={{ marginBottom: 50 }}>COVID-19 Online Test</h3>
            <p>The test will take 10 minutes and provide instant results. Please answer ALL questions.</p>
            <p>Disclaimer: This is not an official COVID-19 test. For an official test, please contact a nearby hospital or testing center. </p>
            <div style={{ marginTop: 60 }}>
                <p> Click below to start your test!</p>
            </div>
            <div style={{textAlign: "center", marginTop: 50}}>
                <button type="button" class="btn btn-primary btn-lg">Take Test</button>
            </div>
        </div>
    )
}
