import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      q2: "",
      q3: ""
    };
  }

  submit() {
    let url =
      "https://gorest.co.in/public-api/posts?_format=json&access-token=xM4l5C7BCas4bShAJygV0wBm19mAqiiIqLxy";
    let data = this.state;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then(result => {
      result.json().then(resp => {
        console.warn("resp", resp);
      });
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="contact-form">
          <div className="input-fields">
            <h3>YUDIMY</h3>
            <h1>SIMPLE ANALYSIS FORM</h1>
            <label className="the-label">Name</label>
            <input
              className="input"
              type="text"
              value={this.state.name}
              name="name"
              onChange={data => {
                this.setState({ name: data.target.value });
              }}
            />
            <br />
            <label className="the-label">Question Two</label>
            <input
              className="input"
              type="text"
              value={this.state.q2}
              name="q2"
              onChange={data => {
                this.setState({ q2: data.target.value });
              }}
            />
            <label className="the-label">Question Three</label>
            <input
              className="input"
              type="text"
              value={this.state.q3}
              name="q3"
              onChange={data => {
                this.setState({ q3: data.target.value });
              }}
            />
            <br /> <br />
            <button
              className="btn"
              onClick={() => {
                this.submit();
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
