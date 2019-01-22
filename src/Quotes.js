import React, { Component } from "react";
import "./Quotes.css";

var xhr;

class Quotes extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      quoteText: "We make our own fortunes and we call them fate.",
      quoteAuthor: "Benjamin Disraeli",
      color: "#73a857"
    };

    this.processRequest = this.processRequest.bind(this);
    this.generateQuote = this.generateQuote.bind(this);
  }

  componentDidMount() {
    //this.generateQuote();
  }

  generateQuote() {
    xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
      true
    );

    xhr.setRequestHeader(
      "Access-Control-Allow-Headers",
      "x-requested-with, x-requested-by"
    );
    xhr.send();

    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest() {
    var colors = [
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

    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      var response = JSON.parse(xhr.responseText.replace(/'/g, '"'));

      var bgcolor = colors[Math.floor(Math.random() * colors.length)];

      this.setState({
        quoteText: response.quoteText,
        quoteAuthor: response.quoteAuthor || "Unknown",
        color: bgcolor
      });

      this.props.colorChange(this.state.color);
    }

    console.log(response);
  }

  render() {
    var backgroundStyle = {
      backgroundColor: this.state.color
    };

    var textStyle = {
      color: this.state.color
    };

    return (
      <div>
        <h2 style={textStyle}>{this.state.quoteText}</h2>
        <p className="text-muted text-right">- {this.state.quoteAuthor}</p>
        <button
          onClick={this.generateQuote}
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
