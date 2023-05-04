import React from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

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

  // console.log(user);

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
                {/* <Link>Forgot Password ?</Link> */}
                <br />

                {user ? (
                  <button
                    className="button mt-3 w-100"
                    onClick={async () => {
                      const success = await signOut();
                      if (success) {
                        alert("You are sign out");
                      }
                    }}
                  >
                    Sign out
                  </button>
                ) : (
                  <div>
                    <button
                      className="button mt-3 w-25 me-4"
                      onClick={() =>
                        signInWithEmailAndPassword(email, password)
                      }
                    >
                      Sign in
                    </button>
                    <span>OR</span>
                    <button
                      className="button mt-3 w-25 ms-4"
                      onClick={() =>
                        createUserWithEmailAndPassword(email, password)
                      }
                    >
                      Sign up
                    </button>

                    <div>
                      <button
                        className="button mt-3 w-100"
                        onClick={() => signInWithGoogle()}
                      >
                        Sign in With Google
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
