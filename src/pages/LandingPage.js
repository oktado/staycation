import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "parts/Header";
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
