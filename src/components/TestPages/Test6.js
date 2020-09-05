import React, { Component } from "react";
import $ from "jquery"


import Navbar from '../navbar';
import Footer from '../footer'
import {Link} from 'react-router-dom'
// import SignaturePad from '../SignaturePad.js'

class Test6 extends Component {

  next = (e) => {
    //e.preventDefault();
    this.props.next();
  };
  back = (e) => {
    e.preventDefault();
    this.props.back();
  };
  cancel = (e) => {
    e.preventDefault();
    this.props.cancel();
  }

  componentDidMount = () =>{


      // alert("document ready")
      
     // $("#thc").on('click', function(){
       /// alert("fingers crossed")
    
        // let favorite = [];

        // $.each($("input[name='symptoms]:checked"),
        // function() {
          
        //   favorite.push($(this).val());
        // });


        // $.each(favorite, function (i, val){
        //   alert("faourite");
        //     if (val === "headache" || val === "skinrash"){
        //       // alert("yes plis")
              
        //     }
        // })
        // $("#the_arrow").animate({
        //   left: '60%'
        // });
     // })
    

  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" style={{marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%"}} >
            <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
              <div className="col">
                <div class="progress" style={{ width: "70%" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "80%", backgroundColor: "#388087" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
              <div className="col">
                <p style={{ marginBottom: 100, marginLeft: 150, marginTop: 50 }}>
                  <input type="radio" alt="submit" /> By submitting this test,
                    I confirm that <p>the information
                    provided is true, complete and accurate.
                 </p>
                </p>
              {/* <SignaturePad /> */}
              </div>
            </div>

            <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
              <div className="col">
                {/* <h5 style={{ marginLeft: 150 }} >Signature</h5>
                <textarea style={{ marginLeft: 150 }} className="border"></textarea>
                <button type="reset" className="rounded-0">clear</button> */}
                <div className="mt-3" style={{ marginLeft: 150, position: "relative", left: "12%" }}>
                <button id="thc" type="button" className="btn btn-primary btn-lg" style={{backgroundColor: "#388087"}} onClick={this.next}>Get Results</button>
                 {/* <button id="thc" type="submit" className="btn btn-primary btn-lg" style={{backgroundColor: "#388087"}}>Get Results</button> */}
                  <button type="submit" className="btn" style={{color: "blue"}} onClick={this.cancel}>Cancel</button>
                </div>
              </div>
            </div>

            {/* <div className="row" style={{ marginLeft: 150 }}>
              <div className="col">
                <div className=" mt-3">
                 
                </div>
              </div>
            </div> */}
          </div>
        <Footer />
      </div>
    );
  }
}
export default Test6;
