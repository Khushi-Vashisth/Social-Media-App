import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
