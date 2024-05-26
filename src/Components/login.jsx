import React from "react";
import "../Components/login.css";


const Login = () => {
  return (
    <div>

      <div className="container login">
        <div className="login-main">
          <div className="top-logo">
            <i className="material-icons">person</i>
          </div>
          <div className="login-part1">

            <div className="row login-row1">
              <div className="col login-col1">
                <i className="material-icons">shopping_cart</i>
              </div>
              <div className="col login-col2">
                <h5>FRESH DELISH</h5>
              </div>

            </div>

            <div className="login-head2">
              <h4>LOGIN TO ACCOUNT</h4>
              <p>Please Enter Your Email and Password to continue</p>
            </div>

            <div className="text-field">
              <div className="login-field">
                <p>Username</p>
                <input
                  type="text"
                  id="textField"
                  className="form-control"
                  placeholder="admin"
                />
              </div>
              <p className="forget">
                <a href="ForgetPassword">Forget Password ?</a>
              </p>
              <div className="password-field">
                <p>Password</p>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="● ● ● ● ● ●"
                />
              </div>
            </div>

            <div class="login-checkbox">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember Password</label>
            </div>

            <div className="login-button">
              <button type="button">LOG IN</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
