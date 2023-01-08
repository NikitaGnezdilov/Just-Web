import React, { Component, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthConext";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./App.scss";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";


function App() {
  const currentUser = useContext(AuthContext);

  console.log(currentUser ? "Logged In" : "Need to register");

  function ProtectedRoute({ children }: any) {
    if (!currentUser) return <Navigate to="/login" />;

    return children;
  }

 //signOut(auth)

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        path="/home"
      />
      <Route element={<Register />} path="/signup" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default App;
