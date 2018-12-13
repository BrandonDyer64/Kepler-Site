import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import channelsImg from "../auto-channels-transparent.png";
import radioImg from "../radio.png";
import messageImg from "../message.png";
import viavImg from "../logo.png";

class App extends Component {
  render() {
    return (
      <div className="features-page">
        <section className="row vcenter-parent">
          <div className="col-md-6">
            <h3>LuaFlow</h3>
            <p>Node based Lua programming.</p>
          </div>
          <div className="col-md-6 nopad">
            <img
              src="https://i.imgur.com/y3v9mX8.png"
              style={{ width: "100%" }}
            />
          </div>
        </section>
        <section className="row vcenter-parent">
          <div className="col-md-6 viav-multi-img-parent nopad">
            <img
              src="https://i.imgur.com/im2hic4.png"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <h3>Material Editor</h3>
          </div>
        </section>
        <section
          style={{
            textAlign: "center",
            marginBottom: "60px",
            marginTop: "60px"
          }}
        >
          <a
            className="btn btn-primary btn-large"
            href="https://github.com/BrandonDyer64/Kepler/releases/latest"
            target="_blank"
          >
            Download
          </a>
        </section>
      </div>
    );
  }
}

export default App;
