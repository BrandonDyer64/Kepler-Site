import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../logo.png";
import "../App.css";
import discord from "../discord.png";
class App extends Component {
  render() {
    return (
      <div className="full-height">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <h2 className="App-title">Open Game Engine</h2>
          <p style={{ maxWidth: "450px", margin: "auto" }}>
            Kepler is an{" "}
            <b>
              <a target="_blank" href="https://github.com/BrandonDyer64/Viav">
                open source
              </a>
            </b>{" "}
            game engine designed for modern indie and AAA game development.
          </p>
        </header>
        <section>
          <div className="add-btn-container">
            <a
              href="https://github.com/BrandonDyer64/Kepler/releases/latest"
              className="btn btn-primary btn-large"
              target="_blank"
            >
              Download
            </a>
            <Link to="/features" className="btn btn-light btn-large">
              Features
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
