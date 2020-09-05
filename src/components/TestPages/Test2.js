import React, { Component } from "react";
import Navbar from '../navbar';
import Footer from '../footer'

class Test2 extends Component {
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
        <div className="container covid_main" style={{ marginTop: 180, marginBottom: "20%" }}>
          <div className="row">
            <div className="col bar">
              <div class="progress prog_bar">
                <div class="progress-bar" role="progressbar" style={{ width: "16%", backgroundColor: "#388087" }} aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div class="tests">
          <div className="row">
            <div className="col-md-12 test2_head">
              <h6>
                In the past 14 days, have any individuals had contact with a
                known COVID-19 patient?
              </h6>
              <div class="form-check">
                <input class=" form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
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

          </div>
          <div className="row" style={{ marginTop: 100 }} >
           
              <div class="col-md-2" style={{paddingTop: 10 }}>
                  <button type="submit" className="btn btn-primary" style={{backgroundColor: "#388087"}} onClick={this.back}>Back</button>
                </div>

                <div class="col-md-2" style={{paddingTop: 10,}}>
                  <button type="submit" className="btn btn" style={{color: "blue"}} onClick={this.cancel}>Cancel</button>
                </div>
                
                <div class="col-md-2" style={{ paddingTop: 10,}}>
                  <button type="submit" className="btn btn-primary" style={{backgroundColor: "#388087"}} onClick={this.next}>Next</button>
                </div>
              </div>
    
        </div>
        <Footer />
      </div>
    );
  }
}
export default Test2