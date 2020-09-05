import React, { Component } from 'react'

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
import $ from "jquery"


export default class TestPageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            finalResults: 0
        }
    }
    next = (e) => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }
    back = (e) => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }
    calculateResults = (scores) => {
        this.setState((prevState) => {
            console.log(scores, prevState.finalResults);
            return { finalResults: prevState.finalResults + scores}
        })
    }
    

    cancel = (e) => {
        const { step } = this.state
        this.setState({ step: 0 })
    }
    componentDidMount = () => {


        // alert("document ready")

        $("#thc").on('click', function () {
            alert("this is a test")

            //   let favorite = [];

            //   $.each($("input[name='symptoms']:checked"),
            //   function() {

            //     favorite.push($(this).val());
            //   });

            //   $.each(favorite, function (i, val){
            //     alert("faourite");
            //       if (val === "headache" || val === "skinrash"){
            //         alert("yes plis")
            //         // $("#the_arrow").animate({
            //         //   left: '60%'
            //         // });

            //       }
            //   })

        })

    }


    render() {
        console.log(this.state.finalResults);
        switch (this.state.step) {
            case 0:

                return (

                    <div style={{ backgroundColor: "#F6F6F2" }}>
                        <Navbar />
                        <div style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
                            <h3 style={{ marginBottom: 30, marginLeft: 350 }}>COVID-19 Online Test</h3>
                            <p style={{ paddingLeft: 150, paddingRight: 100 }}>The test will take 10 minutes and provide instant results. Please answer ALL questions.</p>
                            <p style={{ paddingLeft: 150, paddingRight: 100 }}> Disclaimer: This is not an official COVID-19 test. For an official test, please contact a nearby hospital or testing center. </p>
                            <div style={{ marginTop: 60 }}>
                                <p style={{ paddingLeft: 150, paddingRight: 100, position: "relative", left: "23%"}}> Click below to start your test!</p>
                            </div>
                            <div style={{ textAlign: "center", marginTop: 50 }}>
                                <button type="submit" class="btn btn-primary btn-lg" style={{backgroundColor: "#388087"}} onClick={this.next} >Take Test</button>
                            </div>
                        </div>
                        <Footer />
                    </div>
                    // <div style={{marginTop: 0}}>
                    //     <Navbar />
                    //     <section class="py-5">
                    //         <div class="covid_test">
                    //             <div class="container">
                    //                 <div class="info">
                    //                     <h3 class="text-center">COVID-19 Online Test</h3>
                    //                     <p class="text-left">The test will take 5 minutes and provide instant results. Please answer ALL questions.</p>
                    //                     <p class="text-left"> Disclaimer: This is not an official COVID-19 test. For an official test, please contact a nearby hospital or testing center. </p>
                    //                     <p class="text-left"> For emergencies, please call 112. </p>
                    //                 </div>
                    //                 <div class="text-center info_click" style={{ marginTop: 60 }}>
                    //                     <p> Click below to start your test!</p>
                    //                 </div>
                    //                 <div style={{ textAlign: "center", marginTop: 50 }}>
                    //                     <button type="submit" class="btn btn-primary btn-lg" style={{backgroundColor: "#388087"}} onClick={this.next}>Take Test</button>
                    //                 </div>

                    //             </div>
                    //         </div>
                    //     </section>

                    //     <Footer />

                    // </div>

                );
            case 1:
                return (
                    <TestPage1 next={this.next} cancel={this.cancel} calculateResults={this.calculateResults} />
                );
            case 2:
                return (
                    <TestPage2 next={this.next} back={this.back} cancel={this.cancel} calculateResults={this.calculateResults} />
                );
            case 3:
                return (
                    <TestPage3 next={this.next} back={this.back} cancel={this.cancel} calculateResults={this.calculateResults} />
                );
            case 4:
                return (
                    <TestPage4 next={this.next} back={this.back} cancel={this.cancel} calculateResults={this.calculateResults} />
                )
            case 5:
                return (
                    <TestPage5 next={this.next} back={this.back} cancel={this.cancel} calculateResults={this.calculateResults} />
                );
            case 6:
                return (
                    <TestPage6 cancel={this.cancel}  next={this.next} />
                );
            case 7:
                return (
                    <TestResult next={this.next} back={this.back} cancel={this.cancel}
                        result={this.state.finalResults}

                    />
                );
        }
    }
}
