import React, { useRef } from "react";
import { auth } from "./firebaseAuth";

import "./signup.css";

export const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    try{
     const user = await auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(user)
    }catch(error){
      console.log(error)
    }
   
  };
  const signIn = async (e) => {
    e.preventDefault();
    try{
     const userSignIn  =await auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      console.log(userSignIn)
    }catch(error){
      alert(error.message)
    }
    
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signup_gray">New to Netflix? </span>
          <span className="signup_link" onClick={register}>Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
};
