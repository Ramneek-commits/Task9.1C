// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Core components
import HeaderBar from "./components/HeaderBar";
import HeroImage from "./components/HeroImage";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

// Auth components
import Login from "./components/Login";
import Signup from "./components/Signup";

// New additions
import Plans from "./components/Plans";
import Payment from "./components/Payment";

import "./styles.css";

function App() {
  return (
    <>
      <HeaderBar />

      <Routes>
        {/* Default route → Login page */}
        <Route path="/" element={<Login />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Home page after login */}
        <Route
          path="/home"
          element={
            <>
              <HeroImage />
              <FeaturedArticles />
              <FeaturedTutorials />
              <Newsletter />
            </>
          }
        />

        {/* Subscription plans page */}
        <Route path="/plans" element={<Plans />} />

        {/* Payment page */}
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
