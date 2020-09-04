import React, { Component } from 'react'

import Sidebar from './sidebar'
import Navbar from '../navbar'
import Footer from '../footer'
// import {Link} from 'react-router-dom'

import TestPage1 from '../TestPages/Test1'
import TestPage2 from '../TestPages/Test2'
import TestPage3 from '../TestPages/Test3'
import TestPage4 from '../TestPages/Test4'
import TestPage5 from '../TestPages/Test5'
import TestPage6 from '../TestPages/Test6'
import TestResult from '../TestPages/ResultPage'

export default class TestPageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0
        }
    }
    next = (e) => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }
    prev = (e) => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }
 

    render() {
        switch (this.state.step) {
            case 0:

                return (
                    <div>
                        <Navbar />
                        <div style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
                            <h3 style={{ marginBottom: 30, marginLeft: 150 }}>COVID-19 Online Test</h3>
                            <p style={{ paddingLeft: 150, paddingRight: 100 }}>The test will take 10 minutes and provide instant results. Please answer ALL questions.</p>
                            <p style={{ paddingLeft: 150, paddingRight: 100 }}> Disclaimer: This is not an official COVID-19 test. For an official test, please contact a nearby hospital or testing center. </p>
                            <div style={{ marginTop: 60 }}>
                                <p style={{ paddingLeft: 150, paddingRight: 100 }}> Click below to start your test!</p>
                            </div>
                            <div style={{ textAlign: "center", marginTop: 50 }}>
                                <button type="submit" class="btn btn-primary btn-lg" onClick={this.next}>Take Test</button>
                            </div>
                        </div>
                        <Footer />
                    </div>

                );
            case 1:
                return (
                    <TestPage1 next={this.next} prev={this.prev} />
                );
            case 2:
                return (
                    <TestPage2 next={this.next} prev={this.prev} />
                );
            case 3:
                return (
                    <TestPage3 next={this.next} prev={this.prev} />
                );
            case 4:
                return (
                    <TestPage4 next={this.next} prev={this.prev} />
                )
            case 5:
                return (
                    <TestPage5 next={this.next} prev={this.prev} />
                );
            case 6:
                return (
                    <TestPage6 next={this.next} prev={this.prev} />
                );
            case 7:
                return (
                    <TestResult next={this.next} prev={this.prev} />
                );
        }
    }
}
