import React, { Component } from "react";
import Navbar from '../navbar';
import Footer from '../footer'

class Test5 extends Component {
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
      
        <div className="container" style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
          <Navbar />
          <div className="row">
            <div className="col">
            <h3>COVID-19 ONLINE TEST</h3>

              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{width: "50%"}}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p>
                Are any individuals experiencing unexplained sores on soles of
                feet or discoloration of fingers/toes?
              </p>
              <button type="submit" className="rounded-pill">
                NO
              </button>

              <button type="submit" className="rounded-pill">
                YES
              </button>
            </div>
          </div>
          
          <div className="row">
              <div className="col">

                  <div className="mt-3">
              <button type="submit" className="btn btn-primary ">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-pill"
                  onClick={this.prev}
                >
                  prev
                </button>
                <button
                  type="submit"
                  className="rounded-pill"
                  onClick={this.next}
                >
                  Next
                </button>
                </div>
                </div>
                </div>
          <Footer />
        </div>
      
    );
  }
}
export default Test5;