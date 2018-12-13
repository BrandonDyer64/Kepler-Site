import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{ width: "30px" }} />
            &nbsp;Kepler Engine
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Download
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://discord.gg/EkDSE5e"
                >
                  Community
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li>
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.patreon.com/viav"
                >
                  Donate
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
