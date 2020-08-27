import React from 'react';
import Sidebar2 from './sidebar2';
import Navbar from '../navbar';
import Footer from '../footer';

export default function ConsultRequestList() {
    return (
        <div>
            <Sidebar2 />
            <Navbar />
            <div style={{ marginLeft: 350, marginRight: 350, marginTop: 25, marginBottom: 60 }}>
                <div>
                    <h3 style={{ marginBottom: 40 }}>Consultation Requests</h3>
                    <ul class="striped-list">
                        <li>Apples</li>
                        <li>Oranges</li>
                        <li>Bananas</li>
                        <li>Pears</li>
                        <li>Plums</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
