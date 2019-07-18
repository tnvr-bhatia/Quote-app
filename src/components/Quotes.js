import React, { Component } from "react";
import "./Quotes.css";
import Loader from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";

var xhr;

class Quotes extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: false,
      quoteText: "",
      quoteAuthor: ""
    };

    this.processRequest = this.processRequest.bind(this);
    this.generateQuote = this.generateQuote.bind(this);
    this.refreshQuote = this.refreshQuote.bind(this);
  }

  componentDidMount() {
    this.generateQuote();
  }

  generateQuote = () => {
    this.setState({ isLoading: true });
    xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
      true
    );

    xhr.setRequestHeader(
      "Access-Control-Allow-Headers",
      "x-requested-with, x-requested-by"
    );
    xhr.send();

    xhr.addEventListener("readystatechange", this.processRequest, false);
  };

  processRequest() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText.replace(/'/g, '"'));

      //var bgcolor = colors[Math.floor(Math.random() * colors.length)];

      this.setState({
        quoteText: response.quoteText.replace(/"/g, "'"),
        quoteAuthor: response.quoteAuthor || "Unknown",
        isLoading: false
      });

      //this.props.colorChange(this.state.color);
    }
  }

  refreshQuote() {
    this.generateQuote();
    this.props.themeChange();
  }

  render() {
    var backgroundStyle = {
      backgroundColor: this.props.color
    };

    var textStyle = {
      color: this.props.color
    };

    return this.state.isLoading ? (
      <Loader color={this.props.color} />
    ) : (
      <div>
        <div className="quoteCard">
          <h2 style={textStyle}>{this.state.quoteText}</h2>
          <p className="text-muted text-right">- {this.state.quoteAuthor}</p>
        </div>
        <button
          onClick={this.refreshQuote}
          className="button"
          style={backgroundStyle}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default Quotes;
