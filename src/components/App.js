import React, { Component } from "react";
import "./App.css";
import Quotes from "./Quotes";
import { ThemeProvider, ThemeContext } from "./Theme";

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    var backgroundStyle = {
      backgroundColor: this.props.color
    };

    return (
      <div className="App" style={backgroundStyle}>
        <div className="quotebox">
          <ThemeContext.Consumer>
            {context => {
              return (
                <Quotes
                  color={context.color}
                  themeChange={context.themeChange}
                />
              );
            }}
          </ThemeContext.Consumer>
        </div>
        <div className="footer">
          <span className="text-normal">by Tanveer</span>
        </div>
      </div>
    );
  }
}

export default App;
