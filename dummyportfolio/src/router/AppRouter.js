// src/router/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects"; // Import the Projects page
import Navbar from "../components/Navbar"; // Import the Navbar

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> {/* Add Navbar to the router */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
