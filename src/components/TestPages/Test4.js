import React, { Component } from "react";
import Navbar from '../navbar';
import Footer from '../footer'

class Test4 extends Component {
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
        <div className="container" style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <div class="progress" style={{width: "70%"}}>
                
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{width: "50%", backgroundColor: "#388087"}}
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <p>
                Are any individuals experiencing chest pain or loss of speech
                and movement?
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
                  className="btn btn-primary ml-3"
                  onClick={this.prev}
                >
                  prev
                </button>
                <button
                  type="submit"
                  className="btn btn-primary ml-3"
                  onClick={this.next}
                >
                  Next
                </button> 
                </div>
                </div>
                <Footer />
                </div>
        </div>
        </div>
    );
  }
}
export default Test4;
