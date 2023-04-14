import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
                <img src={Logo} alt="logo" />
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
      <div className="mobile-menu">
        <a href="index.html" title="Home Page">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </a>
        <button className="cate-btn" title="Category List">
          <i className="fas fa-list"></i>
          <span>category</span>
        </button>
        <button className="cart-btn" title="Cartlist">
          <i className="fas fa-shopping-basket"></i>
          <span>cartlist</span>
          <sup>9+</sup>
        </button>
        <a href="wishlist.html" title="Wishlist">
          <i className="fas fa-heart"></i>
          <span>wishlist</span>
          <sup>0</sup>
        </a>
        <a href="compare.html" title="Compare List">
          <i className="fas fa-random"></i>
          <span>compare</span>
          <sup>0</sup>
        </a>
      </div>
    </Fragment>
  );
};

export default header;
