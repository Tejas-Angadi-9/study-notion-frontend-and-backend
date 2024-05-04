import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./components/core/HomePage/UpdatePassword";
import OpenRoute from "./components/core/Auth/OpenRoute";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";

const App = () => {
  return (
    <div className="w-fitmin-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password/:id" element={<UpdatePassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="dashboard/my-profile" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
