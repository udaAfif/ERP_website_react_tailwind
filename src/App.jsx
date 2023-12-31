import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import "./css/style.css";
import MainPage from "./pages/MainPage";
import AOS from "aos";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
