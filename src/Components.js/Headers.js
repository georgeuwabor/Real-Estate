import React from "react";
import ArrowDrop from "../Assets.js/ArrowDrop.svg";
import Logo from "../Assets.js/Logo.svg";
import "../Style.css/Headers.css";

function Headers() {
  return (
    <div className="headers">
      <div className="header">
        <nav className="navigator">
          <div className="LOGO">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="About">
            <ul>
              <ol>Features</ol>
              <ol>
                Investments{" "}
                <span>
                  <img src={ArrowDrop} alt="ArrowDrop" />
                </span>
              </ol>
              <ol>How it works</ol>
              <ol>About</ol>
            </ul>
          </div>
          <div className="Log">
            <div>
              <p className="login">Login</p>
            </div>
            <div>
              <p className="signup">Signup</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Headers;
