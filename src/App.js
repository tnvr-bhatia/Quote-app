import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      color: "#73a857"
    };

    this.colorChanger = this.colorChanger.bind(this);
  }

  colorChanger(color) {
    this.setState({
      color: color
    });
  }

  render() {
    var backgroundStyle = {
      backgroundColor: this.state.color
    };
    return (
      <div className="App" style={backgroundStyle}>
        <div className="quotebox">
          <Quotes colorChange={this.colorChanger} />
        </div>
        <div className="footer">
          <span className="text-normal">by Tanveer</span>
        </div>
      </div>
    );
  }
}

export default App;
