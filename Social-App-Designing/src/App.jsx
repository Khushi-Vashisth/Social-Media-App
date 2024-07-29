import React from "react";
import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Register from "./components/Register";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </>
  );
}

export default App;
