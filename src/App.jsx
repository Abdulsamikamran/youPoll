// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import ForgetPasword from "./pages/auth/ForgetPasword";
import ChangePassword from "./pages/auth/ChangePassword";
import CreateAccount from "./pages/auth/CreateAccount";
import Home from "./pages/home/home";
import "@fontsource/raleway";
import DetailPage from "./pages/DetailPage/DetailPage";
import CreatePoll from "./pages/CreatePoll/CreatePoll";
import Profile from "./pages/Profile/Profile";
import ProfileSettings from "./pages/ProfileSettings/ProfileSettings";
import Comments from "./pages/Comments/Comments";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Interests from "./pages/auth/Interests";
import Notifications from "./pages/Notifications/Notifications";
import SearchMobile from "./components/SearchMobile";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPasword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/interest" element={<Interests />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<ProfileSettings />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/search" element={<SearchMobile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
