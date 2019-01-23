import React, { Component } from "react";
import "./Loader.css";

class Loader extends Component {
  render() {
    var backgroundStyle = {
      borderLeftColor: this.props.color
    };
    return <div className="loader" style={backgroundStyle} />;
  }
}

export default Loader;
