import React from "react";
import { Routes, Route } from "react-router-dom";
import NewSignIn from "./NewSignIn";
import Home from "./Home";
import Pricing from "./Pricing";
import Contact from "./Contact";
import HeadHunter from "./Headhunter";
import AutoChecker from "./AutcoChecker";

function NavPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<NewSignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/headhunter" element={<HeadHunter />} />
        <Route path="/autochecker" element={<AutoChecker />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </div>
  );
}

export default NavPage;
