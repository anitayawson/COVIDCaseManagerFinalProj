import React, { Component } from "react";
import Navbar from '../navbar';
import Footer from '../footer'
import { Link } from 'react-router-dom'

import Down from '../../images/down.svg'
import $ from "jquery"

export class ResultPage extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.next();
  };
  prev = (e) => {
    e.preventDefault();
    this.props.prev();
  };

  animateResult = () => {
    $("#the_arrow").animate({
      left: '60%'
    });
  }
  componentDidMount() {
    if (!this.props.result) return false;
    const percent = (this.props.result / 100) * 95;
    $(document).ready(() => {
      console.log(this.props);
      $("#the_arrow").animate({
        left: percent + '%'
      });
    })
  }

  

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <div class="progress" style={{ width: 650, marginBottom: 40 }}>
                <div class="progress-bar" role="progressbar" style={{ width: "100%", backgroundColor: "#388087" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <h4 style={{ position: "relative", left: "27%" }}>Your Test Results</h4>

              <div class="the_arrow" style={{ width: "660px", height: "120px" }}>
                <img id="the_arrow" src={Down} style={{ height: "35px", position: "relative", top: "30px" }} />


                <div class="progress" style={{ width: 650, marginTop: 30, height: 10 }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "33%", backgroundColor: "green" }} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="progress-bar" role="progressbar" style={{ width: "33%", backgroundColor: "orange" }} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="progress-bar" role="progressbar" style={{ width: "34%", backgroundColor: "red" }} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ paddingLeft: 150, paddingRight: 100 }}>
            <h6>Action Steps:</h6>
            <div className="mt-3" style={{ display: "flex", flexDirection: "row"}}>
              <span class="greencircle"></span>
              <p>Stay safe and keep following COVID-19 measures.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span class="orangecircle"></span>
              <p>Please request a consultation.</p>
              <div>
                <button type="button" class="btn" style={{ color: "blue", paddingTop: 0}} data-toggle="modal" data-target="#exampleModal">Click here</button>
              </div>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Consultation Request</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                   {/* <form onSubmit={this.handleSubmit}> */}
                    <div class="modal-body">
                      <p className="">Your profile information and test results will be sent to a Licensed Health Professional, who will contact you within
                      72 hours of your request. </p>
                      <p>If this is an emergency, please call 112.</p>
                      <textarea class="form-control form-control-sm" type="text" style={{ height: 100 }} placeholder="Please include any additional information here..." ></textarea>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.cancle}>Cancle</button>
                    {/* <a href="/resultpage"> */}
                      <button type="button" class="btn btn-primary"  data-dismiss="modal" onClick={this.cancle} style={{ backgroundColor: "#388087"  }}>Submit Request</button>
                      {/* </a> */}
                    </div>
                    {/* </form> */}
                  </div>
                  
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span class="redcircle"></span>
              <p>Please request a consultation.</p>
              <div>
                <button type="button" class="btn" style={{ color: "blue", paddingTop: 0 }} data-toggle="modal" data-target="#exampleModal">Click here</button>
              </div>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Consultation Request</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Your profile information and test results will be sent to a licenced health professionional, who will contact you within
                      72 hours of your request.</p>
                      <p>If this is an emergency, please call 112.</p>
                      <textarea class="form-control form-control-sm" style={{ height: 100 }} type="text" placeholder="Please include any additional information here..."></textarea>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.cancle}>Cancel</button>
                   {/* <a href="/resultpage">  */}
                   <button type="button" class="btn btn-primary"  data-dismiss="modal" onClick={this.cancle} style={{ backgroundColor: "#388087" }}>Submit Request</button>
                   {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 40 }}>
              <div className="col">
                <div className=" mt-3" style={{ position: "relative", left: "26%", marginTop: 10 }}>
                  <Link to="/resources"><button type="submit" style={{ backgroundColor: "#388087" }} className="btn btn-primary btn-lg">Go to Resources</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


// ResultPage.defaultProps = {
//   result: 100,
// };

export default ResultPage;
