import React, { Component } from "react";
import Navbar from '../navbar';
import Footer from '../footer'

class Test3 extends Component {
  next = (e) => {
    e.preventDefault();
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
  render() {

    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <div class="progress" style={{ width: 650, marginBottom: 30 }}>

                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "32%", backgroundColor: "#388087" }}
                  aria-valuenow="32"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <h6>
                Have any individuals recently travelled to areas with known
                cases of COVID-19?
              </h6>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                <label class="form-check-label" for="exampleRadios1">
                  <h6>YES</h6>
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label class="form-check-label" for="exampleRadios2">
                  <h6>NO</h6>
                </label>
              </div>
            </div>
          </div>

          <div className="row" style={{marginTop: 100}}>
            <div className="col">
              <div className="mt-3" style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ position: "relative", left: "38%", marginTop: 10 }}>
                  <button type="submit" className="btn" style={{color: "blue"}} onClick={this.cancel}>Cancel</button>
                </div>
                <div style={{ position: "relative", left: "23%", marginTop: 10 }}>
                  <button type="submit" className="btn btn-primary" style={{backgroundColor: "#388087"}} onClick={this.back}>Back</button>
                </div>
                <div style={{ position: "relative", left: "36%", marginTop: 10 }}>
                  <button type="submit" className="btn btn-primary" style={{backgroundColor: "#388087"}} onClick={this.next}>Next</button>
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

export default Test3;
