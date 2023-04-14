import React from "react";
import Logo from "../css-js/images/logo.png";

const login = () => {
  return (
    <div>
      {" "}
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <div className="user-form-logo">
                <a href="index.html">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>welcome!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div className="user-form-group">
                  <ul className="user-form-social">
                    <li>
                      <a href="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>login with facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter"></i>login with twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google">
                        <i className="fab fa-google"></i>login with google
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <i className="fab fa-instagram"></i>login with instagram
                      </a>
                    </li>
                  </ul>
                  <div className="user-form-divider">
                    <p>or</p>
                  </div>
                  <form className="user-form">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="check"
                      />
                      <label className="form-check-label" for="check">
                        Remember Me
                      </label>
                    </div>
                    <div className="form-button">
                      <button type="submit">login</button>
                      <p>
                        Forgot your password?
                        <a href="reset-password.html">reset here</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Don't have any account?
                  <a href="register.html">register here</a>
                </p>
              </div>
              <div className="user-form-footer">
                <p>
                  Greeny | &COPY; Copyright by <a href="#">Mironcoder</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
