import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <BreadCrumb title="Log-in" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 mx-auto text-center">
              <div className="login-card rounded">
                <h2>My Account</h2>
                <form>
                  <input
                    type="email"
                    className="form-control mb-3 border border-warning"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <input
                    type="password"
                    className="form-control mb-3 border border-warning"
                    name="password"
                    placeholder="Enter Your Password"
                  />
                </form>
                <Link>Forgot Password ?</Link>
                <br />
                <button className="button mt-3 w-25 me-4">Login</button>
                <button className="button mt-3 w-25 ms-4">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
