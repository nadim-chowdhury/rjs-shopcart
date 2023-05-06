import React from "react";
import { Helmet } from "react-helmet";
import { BsGoogle } from "react-icons/bs";
import BreadCrumb from "../components/BreadCrumb";
import "react-toastify/dist/ReactToastify.css";

import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignOut,
  useAuthState,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);

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
                <h2 className="mb-5 border-bottom pb-3">My Account</h2>

                {user ? (
                  <h3>Welcome {user.email}</h3>
                ) : (
                  <form>
                    <input
                      type="email"
                      className="form-control mb-3 border border-warning"
                      name="email"
                      value={email}
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      className="form-control mb-3 border border-warning"
                      name="password"
                      value={password}
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </form>
                )}
                <br />

                {user ? (
                  <button
                    className="button mt-3 w-100"
                    onClick={async () => {
                      const success = await signOut();
                      if (success) {
                        alert("Sign Out Successfull");
                      }
                    }}
                  >
                    Sign out
                  </button>
                ) : (
                  <div>
                    <div className="d-flex align-items-center">
                      <button
                        className="button w-100 me-4"
                        onClick={() =>
                          signInWithEmailAndPassword(email, password)
                        }
                      >
                        Sign in
                      </button>
                      <span>OR</span>
                      <button
                        className="button w-100 ms-4"
                        onClick={() =>
                          createUserWithEmailAndPassword(email, password)
                        }
                      >
                        Sign up
                      </button>
                    </div>

                    <div>
                      <button
                        className="button mt-3 w-100 d-flex align-items-center justify-content-center"
                        onClick={() => signInWithGoogle()}
                      >
                        <BsGoogle />
                        <span className="ms-2">Sign in With Google</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
