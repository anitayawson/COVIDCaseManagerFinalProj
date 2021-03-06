import React, { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

class Test1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      fever: 0,
      headache: 0,
      drycough: 0,
      conjunctivitis: 0,
      tiredness: 0,
      skinrash: 0,
      sorethroat: 0,
      achesandpains: 0,
      tasteandsmell:0,
      breath: 0,
    }
  }
  handleChange = (event) => {
    const target = event.target;
    const value = parseInt(target.value);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
   const totalScores = Object.values(this.state).reduce((a, b) => a+b)
   console.log(totalScores);
   this.props.calculateResults(totalScores)
    this.next()
  }

  next = (e) => {
    // e.preventDefault();
    this.props.next();
  };
  back = (e) => {
    e.preventDefault();
    this.props.back();
  };
  cancel = (e) => {
    e.preventDefault();
    this.props.cancel();
  };
  render() {
    // const { next, prev } = this.props;
    return (
      <div>
        <Navbar />
        <section>
          <div
            className="container"
            style={{
              marginLeft: 200,
              marginTop: 180,
              marginRight: 200,
              marginBottom: "20%",
            }}
          >
            <div
              className="row"
              style={{ paddingLeft: 150, paddingRight: 100 }}
            >
              <div className="col">
                <div class="progress" style={{ width: 650, marginBottom: 30 }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="row" style={{}}>
              <div className="col">
                <h6 class="" style={{ marginLeft: 170 }}>
                  Please select ALL symptoms that apply.
                </h6>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div class="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
                <div
                  class="col-md-12 tb_info"
                  style={{ position: "relative", left: "7%" }}
                >
                  <table class="table table-borderless">
                    <tbody>
                      <tr class="row">
                        <td class="col-md-6">
                          <input
                          onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="fever"
                            value={8}
                            id="defaultCheck1"
                            alt="fever"
                          />{" "}
                          Fever
                        </td>
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="headache"
                            value={6}
                            id="defaultCheck1"
                            alt="headache"
                          />{" "}
                          Headache
                        </td>
                      </tr>

                      <tr class="row">
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="drycough"
                            value="8"
                            id="defaultCheck1"
                            alt="dry cough"
                          />{" "}
                          Dry Cough
                        </td>
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="conjunctivitis"
                            value="3"
                            id="defaultCheck1"
                            alt="conjunctivities"
                          />{" "}
                          Conjunctivitis
                        </td>
                      </tr>

                      <tr class="row">
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="tiredness"
                            value="8"
                            id="defaultCheck1"
                            alt="tiredness"
                          />{" "}
                          Tiredness
                        </td>
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="skinrash"
                            value="3"
                            id="defaultCheck1"
                            alt="rash"
                          />{" "}
                          Skin rash
                        </td>
                      </tr>

                      <tr class="row">
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="sorethroat"
                            value="7"
                            id="defaultCheck1"
                            alt="sore"
                          />{" "}
                          Sore throat
                        </td>
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="achesandpains"
                            value="3"
                            id="defaultCheck1"
                            alt="aches"
                          />{" "}
                          Aches and Pains
                        </td>
                      </tr>

                      <tr class="row">
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="tasteandsmell"
                            value="8"
                            id="defaultCheck1"
                            alt="loss of smell"
                          />{" "}
                          Loss of taste and smell
                        </td>
                        <td class="col-md-6">
                          <input
                           onChange={this.handleChange}
                            class="form-check-input"
                            type="checkbox"
                            name="breath"
                            value="6"
                            id="defaultCheck1"
                            alt="shortness of breath"
                          />{" "}
                          Shortness of breath
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-md-6 covid_que">
                    <h6 class="" style={{ marginLeft: 35 }}>
                      How many individuals are experiencing one or more of the
                      selected symptoms?
                    </h6>
                  </div>
                  <div class="col-md-2">
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      style={{ marginLeft: 15, width: 70, borderWidth: 2 }}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ marginTop: 70 }}>
                    <div
                      className="mt-3"
                      style={{ display: "flex", flexDirection: "flex-start" }}
                    >
                      <div style={{ position: "relative", right: "500px" }}>
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ backgroundColor: "#388087" }}
                          onClick={this.back}
                        >
                          Back
                        </button>
                      </div>
                      <div style={{ position: "relative", right: "450px" }}>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ backgroundColor: "#388087" }}
                        >
                          Next
                        </button>
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
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Test1;
