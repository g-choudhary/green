import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css-js/css/main.css";
import "../css-js/css/home-standard.css";
import "../css-js/css/home-standard.css";
import "../css-js/fonts/flaticon/flaticon.css";
import "../css-js/fonts/fontawesome/fontawesome.min.css";
import Logo from "../css-js/images/logo.png";
import Profile from "../css-js/images/user.png";

const header = () => {
  return (
    <Fragment>
      <header className="header-part">
        <div className="container">
          <div className="header-content">
            <div className="header-media-group">
              <button className="header-user">
                <img src={Profile} alt="user" />
              </button>
              <a href="index.html">
                <img src="images/logo.png" alt="logo" />
              </a>
              <button className="header-src">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <a href="index.html" className="header-logo">
              <img src={Logo} alt="logo" />
            </a>
            <a href="login.html" className="header-widget" title="My Account">
              <img src={Profile} alt="user" />
              <span>join</span>
            </a>
            <form className="header-form">
              <input type="text" placeholder="Search anything..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="header-widget-group">
              <a
                href="compare.html"
                className="header-widget"
                title="Compare List"
              >
                <i className="fas fa-random"></i>
                <sup>0</sup>
              </a>
              <a
                href="wishlist.html"
                className="header-widget"
                title="Wishlist"
              >
                <i className="fas fa-heart"></i>
                <sup>0</sup>
              </a>
              <button className="header-widget header-cart" title="Cartlist">
                <i className="fas fa-shopping-basket"></i>
                <sup>9+</sup>
                <span>
                  total price<small>$345.00</small>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default header;
