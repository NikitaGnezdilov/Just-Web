import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthConext";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./App.scss";

function App() {
  const currentUser = useContext(AuthContext);

  console.log(currentUser);
  

  return (
    <Routes>
      <Route element={<Home />}  path="/" />
      <Route element={<Home />}  path="/home" />
      <Route element={<Register />} path="/signup" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default App;
