import React, { useEffect } from "react";
import "./App.css";
import { HomeScreen } from "./HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { auth } from "./firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice";
import { ProfileScreen } from "./ProfileScreen";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        // console.log(userAuth)
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout())
        // logged out
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
          {!user ? (<Login />):(
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen/>}/>
        </Routes>

          )}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
