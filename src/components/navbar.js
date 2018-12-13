import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo_solid.png";
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
                <a
                  className="nav-link"
                  href="https://github.com/BrandonDyer64/Kepler/releases/latest"
                  target="_blank"
                >
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://discord.gg/EsrdASz"
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
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=brandondyer64@gmail.com&lc=US&item_name=Kepler+Engine&no_note=0&cn=&currency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted"
                >
                  Donate
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.youtube.com/playlist?list=PLH1_-2i0HG4rq4M1c6J_HMiIYLFNM69Wp"
                  target="_blank"
                >
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
