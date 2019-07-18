import React, { Component } from "react";

export const ThemeContext = React.createContext();
const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    this.themeChange = this.themeChange.bind(this);
  }

  themeChange() {
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Provider
        value={{
          color: this.state.color,
          themeChange: this.themeChange
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
