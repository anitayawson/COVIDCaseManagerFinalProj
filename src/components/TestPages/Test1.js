import React, { Component } from "react";
// import {Link} from 'react-router-dom'
import Navbar from '../navbar'
import Footer from '../footer'

class Test1 extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.next();
  };
  cancel = (e) => {
    e.preventDefault();
    this.props.cancel();
  }
  // back = (e) => {
  //   e.preventDefault();
  //   this.props.back();
  // };
  render() {
    // const { next, prev } = this.props;
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <div class="progress" style={{ width: 650, marginBottom: 30 }}>
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <div>
                <h6>Please select ALL symptoms that apply.</h6>

                <table class="table table-borderless">
                  <tbody >
                    <tr>
                      <th scope="row"></th>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="fever" id="defaultCheck1" alt="fever" /> Fever</td>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="headache" id="defaultCheck1" alt="headache" /> Headache</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="drycough" id="defaultCheck1" alt="dry cough" /> Dry Cough</td>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="conjunctivitis" id="defaultCheck1" alt="conjunctivities" /> Conjunctivitis</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="tiredness" id="defaultCheck1" alt="tiredness" /> Tiredness</td>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="skinrash" id="defaultCheck1" alt="rash" /> Skin rash</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="sorethroat" id="defaultCheck1" alt="sore" /> Sore throat</td>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="achesandpains" id="defaultCheck1" alt="aches" /> Aches and Pains</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="tasteandsmell" id="defaultCheck1" alt="loss of smell" /> Loss of taste and smell</td>
                      <td><input class="form-check-input" type="checkbox" name="symptoms" value="breath" id="defaultCheck1" alt="shortness of breath" /> Shortness of breath</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
                  <h6>
                    How many individuals are experiencing one or more of the
                    selected symptoms?
                </h6>
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ marginLeft: 15, width: 70 }}></input>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                  <div style={{position: "relative", left: "23%", marginTop: 10}}>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "#388087"}}onClick={this.cancel}>Cancel</button>
                  </div>
                  <div style={{position: "relative", left: "35%", marginTop: 10}}>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "#388087"}} onClick={this.next}>Next</button>
                  </div>
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

export default Test1;
