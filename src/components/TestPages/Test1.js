import React, { Component } from "react";
import Navbar from '../navbar'
import Footer from '../footer'

class Test1 extends Component {
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
    // const { next, prev } = this.props;
    return (
      <div>
        <Navbar />
        <section>
          <div className="container" style={{ marginLeft: 200, marginTop: 180, marginRight: 200, marginBottom: "20%" }}>
            <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
              <div className="col">
                <div class="progress" style={{ width: 650, marginBottom: 30 }}>
                  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>


            <div className="row" style={{}}>
              <div className="col">
                <h6 class="" style={{ marginLeft: 150 }}>Please select ALL symptoms that apply.</h6>
              </div>
            </div>
            <div class="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
              <div class="col-md-12 tb_info" style={{ position: "relative", left: "7%" }}>
                <table class="table table-borderless">
                  <tbody>
                    <tr class="row">
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="fever" id="defaultCheck1" alt="fever" /> Fever</td>
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="headache" id="defaultCheck1" alt="headache" /> Headache</td>
                    </tr>

                    <tr class="row">
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="drycough" id="defaultCheck1" alt="dry cough" /> Dry Cough</td>
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="conjunctivitis" id="defaultCheck1" alt="conjunctivities" /> Conjunctivitis</td>
                    </tr>

                    <tr class="row">
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="tiredness" id="defaultCheck1" alt="tiredness" /> Tiredness</td>
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="skinrash" id="defaultCheck1" alt="rash" /> Skin rash</td>
                    </tr>

                    <tr class="row">
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="sorethroat" id="defaultCheck1" alt="sore" /> Sore throat</td>
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="achesandpains" id="defaultCheck1" alt="aches" /> Aches and Pains</td>
                    </tr>

                    <tr class="row">
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="tasteandsmell" id="defaultCheck1" alt="loss of smell" /> Loss of taste and smell</td>
                      <td class="col-md-6"><input class="form-check-input" type="checkbox" name="symptoms" value="breath" id="defaultCheck1" alt="shortness of breath" /> Shortness of breath</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-md-6 covid_que">
                  <h6 class="">
                    How many individuals are experiencing one or more of the
                    selected symptoms?
                  </h6>
                </div>
                <div class="col-md-2">
                  <input type="number" min="0" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ marginLeft: 15, width: 70 }}></input>
                </div>
              </div>
              <div className="row">
              <div className="col" style={{marginTop: 70}}>
                <div className="mt-3" style={{ display: "flex", flexDirection: "flex-start" }}>
                  <div style={{ position: "relative", right: "460px" }}>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#388087" }} onClick={this.back}>Back</button>
                  </div>
                  <div style={{ position: "relative", right: "380px" }}>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#388087" }} onClick={this.next}>Next</button>
                  </div>
                </div>
              </div>
              </div>

              {/* <div class="row">
                    <div class="col-md-2 covid_but">
                      <button type="submit" className="btn btn-primary" style={{backgroundColor: "#388087"}}onClick={this.cancel}>Cancel</button>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6 covid_next">
                      <button type="submit" className="btn btn-primary" style={{backgroundColor: "#388087"}} onClick={this.next}>Next</button>
                    </div>
                  </div> */}

            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Test1;