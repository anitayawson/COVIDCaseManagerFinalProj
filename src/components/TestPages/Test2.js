import React, { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

class Test2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      contact: 0,
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
   this.props.calculateResults(this.state.contact)
    this.next()
  }
  next = (e) => {
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
    return (
      <div>
        <Navbar />
        <div
          className="container"
          style={{
            marginLeft: 200,
            marginTop: 180,
            marginRight: 200,
            marginBottom: "20%",
          }}
        >
          <div className="row" style={{ paddingLeft: 150, paddingRight: 100 }}>
            <div className="col">
              <div class="progress" style={{ width: 650, marginBottom: 30 }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "16%", backgroundColor: "#388087" }}
                  aria-valuenow="16"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div
              className="row"
              style={{ paddingLeft: 150, paddingRight: 100 }}
            >
              <div className="col">
                <h6 style={{marginBottom: 25}}>
                  In the past 14 days, have any individuals had contact with a
                  known COVID-19 patient?
                </h6>
                <div class="form-check">
                  <input
                  onChange={this.handleChange}
                    class=" form-check-input"
                    type="radio"
                    name="contact"
                    id="contact"
                    value="10"
                  />
                  <label class="form-check-label" for="contact">
                    <h6>YES</h6>
                  </label>
                </div>
                <div class="form-check">
                  <input
                  onChange={this.handleChange}
                    class="form-check-input"
                    type="radio"
                    name="contact"
                    id="contact"
                    value="0"
                  />
                  <label class="form-check-label" for="contact">
                    <h6>NO</h6>
                  </label>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 100 }}>
              <div className="col">
                <div
                  className="mt-3"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div
                    style={{ position: "relative", left: "38%", marginTop: 10 }}
                  >
                    <button
                      type="submit"
                      className="btn"
                      style={{ color: "blue" }}
                      onClick={this.cancel}
                    >
                      Cancel
                    </button>
                  </div>
                  <div
                    style={{ position: "relative", left: "23%", marginTop: 10 }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#388087" }}
                      onClick={this.back}
                    >
                      Back
                    </button>
                  </div>
                  <div
                    style={{ position: "relative", left: "36%", marginTop: 10 }}
                  >
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
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Test2;
