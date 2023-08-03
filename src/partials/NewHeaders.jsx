import { Transition } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const activeLink = "border-b-4 border-[#5F7CDD] ";
  const normalLink = "";
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const [activedropdown, setActivedropdown] = useState(false);
  const toggledropDown = (e) => {
    setActivedropdown(!activedropdown);
  };

  const closeDrop = () => {
    setActivedropdown(false);
  };
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <div className="flex items-center"></div>
            <nav className="hidden md:block ">
              <div className="ml-10 flex items-center space-x-8 ">
                <button
                  onClick={() => {
                    scrollToElement("section2");
                  }}
                  className=" text-base text-black  transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center font-extrabold"
                >
                  ABOUT
                </button>

                <button
                  onClick={() => {
                    scrollToElement("section3");
                  }}
                  className="text-base text-black  transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center font-extrabold"
                >
                  PRICING
                </button>
                <button
                  onClick={() => {
                    scrollToElement("section4");
                  }}
                  className="text-base text-black  transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center font-extrabold"
                >
                  CONTACT
                </button>

                <NavLink to="/Login">
                  <a
                    href="#"
                    className="text-base bg-white px-2 py-1 shadow-lg rounded-lg b-2  text-[#2ec4f5] font-medium transition duration-150 border-2 border-[#2ec4f5] hover:border-[#5F7CDD] hover:text-[#5F7CDD] flex items-center w-20 justify-center"
                  >
                    Login
                  </a>
                </NavLink>
              </div>
            </nav>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gradient-to-r from-[#5F7CDD] to-[#5BA4E8] inline-flex items-center justify-center p-2 rounded-md text-white "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-2xl bg-blur-md "
              >
                <button
                  onClick={() => {
                    scrollToElement("section2");
                  }}
                  className=" text-base text-black  transition duration-150 border-b-4 border-transparent px-3 py-2  hover:border-[#5F7CDD] flex items-center font-extrabold"
                >
                  ABOUT
                </button>

                <button
                  onClick={() => {
                    scrollToElement("section3");
                  }}
                  className="text-base text-black  transition duration-150 border-b-4 border-transparent px-3 py-2  hover:border-[#5F7CDD] flex items-center font-extrabold"
                >
                  PRICING
                </button>
                <button
                  onClick={() => {
                    scrollToElement("section4");
                  }}
                  className="text-base text-black  transition duration-150 border-b-4 border-transparent px-3 py-2  hover:border-[#5F7CDD] flex items-center font-extrabold"
                >
                  CONTACT
                </button>
                <NavLink
                  to="/Login"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <a
                    href=""
                    className="text-base bg-white ml-2 shadow-lg rounded-lg b-2 px-3 py-2 text-[#2ec4f5] font-medium transition duration-150 border-2 border-[#2ec4f5] hover:border-[#5F7CDD] hover:text-[#5F7CDD] flex items-center w-20 justify-center"
                  >
                    Login
                  </a>
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </div>
  );
}

export default Nav;
