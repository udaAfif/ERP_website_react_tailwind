import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function NavPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default NavPage;
