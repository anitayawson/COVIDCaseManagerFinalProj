import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Navbar from '../navbar'
import Footer from '../footer'

class Test1 extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.next();
  };
  prev = (e) => {
    e.preventDefault();
    this.props.prev();
  };
  render() {
    // const { next, prev } = this.props;
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <div className="progress" style={{width: "70%"}} >
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%", backgroundColor: "#388087"}}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <div>
                <h5>Please select ALL symptoms that apply.</h5>

                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="fever" /> Fever</td>
                      <td><input type="radio" alt="headache"/> Headache</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="dry cough"/> Dry Cough</td>
                      <td><input type="radio" alt="conjunctivities"/> Conjunctivities</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="tiredness"/> Tiredness</td>
                      <td><input type="radio" alt="rash"/> Skin rash</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="sore"/> Sore throat</td>
                      <td><input type="radio" alt="aches"/> Aches and Pains</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="loss of smell"/> Loss of taste and smell</td>
                      <td><input type="radio" alt="shortness of breath"/> Shortness of breath</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  How many individuals are experiences one or more of the
                  selected symptoms.?
                </p>
                <Link to="/test">
                <button type="submit" className="btn btn-primary">
                  Cancel
                </button>
                </Link>
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Test1;
