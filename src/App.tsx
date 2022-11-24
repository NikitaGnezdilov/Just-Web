import React from "react";
import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/home" />
      <Route element={<Register />} path="/signup" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default App;
