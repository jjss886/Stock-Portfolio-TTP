import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { me } from "../store";

import Routes from "./Routes";
import NavBar from "./NavBar";

class App extends Component {
  componentDidMount() {
    this.props.me();
  }

  render() {
    return (
      <div className="appFullDiv">
        <NavBar />

        <div className="appInsideDiv">
          <Routes />
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    me: () => dispatch(me())
  };
};

export default withRouter(connect(mapState, mapDispatch)(App));
