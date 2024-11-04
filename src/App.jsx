// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import ForgetPasword from "./pages/auth/ForgetPasword";
import ChangePassword from "./pages/auth/ChangePassword";
import CreateAccount from "./pages/auth/CreateAccount";
import Home from "./pages/home/home";
import DetailPage from "./pages/DetailPage/DetailPage";
import CreatePoll from "./pages/CreatePoll/CreatePoll";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPasword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default App;
