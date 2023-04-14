import React from "react";
import Logo from "../css-js/images/logo.png";

const change_password = () => {
  return (
    <div>
      {" "}
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <div className="user-form-logo">
                <a href="index.html">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>any issue?</h2>
                  <p>Make sure your current password is strong</p>
                </div>
                <form className="user-form">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Old password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Current password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="reapet password"
                    />
                  </div>
                  <div className="form-button">
                    <button type="submit">change password</button>
                  </div>
                </form>
              </div>
              <div className="user-form-remind">
                <p>
                  Go Back To<a href="login.html">login here</a>
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

export default change_password;
