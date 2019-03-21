import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.scss";

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
        <h2 style={{ color: "#d8cb15" }}>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
