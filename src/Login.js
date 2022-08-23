import React, { useState } from "react";
import "./login.css";
import { SignUpScreen } from "./SignUpScreen";

export const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="login_screenBackground">
        <img
          className="login_screen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen_gradient" />

        <div className="loginScreen_body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited Films, TV Programmes and more.</h1>
              <h2>Watch anywhere, Cancel at anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email Address"></input>
                  <button
                    className="loginScreen_getstarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
