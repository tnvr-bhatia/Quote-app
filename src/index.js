import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, ThemeContext } from "./components/Theme";

ReactDOM.render(
  <ThemeProvider>
    <ThemeContext.Consumer>
      {context => {
        return <App color={context.color} />;
      }}
    </ThemeContext.Consumer>
  </ThemeProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
