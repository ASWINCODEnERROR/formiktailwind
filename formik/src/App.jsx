import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Otpform from "./Otp/Otpform.jsx";
import "./App.css";
import Loginn from "./Auth/Loginn.jsx";
import Register from "./Auth/Register.jsx";
import Home from "./Home/Home.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/otpform" element={<Otpform />} />
        <Route path="/loginpg" element={<Loginn />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </Router>
  );
};

export default App;
