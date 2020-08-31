import React, { Component } from "react";
// import ESignature from '../ESignature';

import Navbar from '../navbar';
import Footer from '../footer'

class Test6 extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.next();
  };
  prev = (e) => {
    e.preventDefault();
    this.props.prev();
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="progress" style={{ width: "70%" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "50%", backgroundColor: "#388087" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">

              <p style={{ marginBottom: 30, marginLeft: 150, marginTop: 180 }}>
                < input type="radio" alt="submit" /> By submitting this test,<p>
                  I confirm that the information
                  provided is true, complete and accurate.
                 </p>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <h5 style={{ marginLeft: 150 }} >Signature</h5>

              <textarea style={{marginLeft: 150}} className="border"></textarea>
                  <button type="reset" className="rounded-0">
                
                 
                    clear
                  </button>
                  {/* <ESignature /> */}
                 <div className="mt-3" style={{ marginLeft: 150 }}>
                <button type="submit" className="rounded-0">
                  Get Result
                  </button>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginLeft: 150 }}>
            <div className="col">

              <div className=" mt-3">
                <button type="submit" className="btn btn-primary ">
                  Cancel
                </button>
              </div>
            </div>

          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Test6;
