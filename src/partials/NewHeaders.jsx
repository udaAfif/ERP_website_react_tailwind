import { Transition } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";

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

  return (
    <div>
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className=" max-w-7xl mx-auto lg:justify-center lg:flex px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <Link to="/" className="block ">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 2000.000000 293.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,293.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M0 1465 l0 -1465 543 0 c539 0 543 0 557 21 8 11 34 47 57 80 24 32
43 63 43 68 0 5 3 11 8 13 4 1 33 43 66 91 32 49 64 94 70 101 6 6 16 19 21
29 6 9 46 68 90 132 44 64 85 124 91 135 18 34 46 60 63 60 13 0 154 -196 241
-335 8 -13 47 -70 85 -125 39 -56 95 -139 125 -184 l55 -81 543 -3 542 -2 0
1465 0 1465 -540 0 -540 0 0 -723 c0 -398 -3 -727 -6 -730 -6 -6 -38 38 -79
105 -18 30 -170 253 -176 258 -3 3 -8 12 -12 20 -4 8 -35 56 -70 105 l-63 90
-98 3 c-112 3 -111 3 -165 -78 -48 -71 -170 -249 -252 -368 -35 -51 -70 -104
-77 -117 -7 -14 -17 -23 -23 -20 -5 4 -9 291 -9 731 l0 724 -545 0 -545 0 0
-1465z"
                      />
                      <path
                        d="M3470 1465 l0 -1465 1120 0 1120 0 -2 378 -3 377 -574 3 c-445 2
-577 5 -583 15 -13 20 -10 291 4 305 9 9 135 12 506 12 321 0 500 4 513 10 18
10 19 25 19 359 0 309 -2 350 -16 355 -9 3 -242 6 -519 6 -449 0 -504 2 -509
16 -9 23 -7 297 2 311 6 10 135 13 568 15 l559 3 3 383 2 382 -1105 0 -1105 0
0 -1465z"
                      />
                      <path
                        d="M7138 2919 c-2 -5 -44 -14 -93 -19 -50 -4 -119 -14 -155 -20 -64 -12
-223 -61 -258 -79 -9 -5 -59 -30 -110 -55 -168 -83 -239 -143 -379 -322 -18
-23 -33 -46 -33 -52 0 -5 -6 -15 -14 -21 -51 -42 -176 -403 -176 -508 0 -21
-5 -54 -10 -73 -14 -47 -15 -531 -1 -590 6 -25 11 -64 11 -88 0 -23 7 -70 16
-105 33 -128 45 -172 55 -189 5 -10 9 -25 9 -34 0 -9 6 -28 14 -42 8 -15 27
-53 42 -85 15 -31 33 -62 41 -68 7 -7 13 -16 13 -21 0 -13 70 -105 131 -172
57 -63 168 -149 234 -181 22 -11 42 -23 43 -27 2 -5 8 -8 14 -8 6 0 40 -14 75
-30 34 -17 71 -30 81 -30 10 0 22 -4 27 -8 6 -5 42 -17 80 -26 39 -9 88 -22
110 -28 94 -25 235 -31 843 -35 l642 -4 -2 523 -3 523 -525 5 c-503 5 -527 6
-582 26 -73 27 -132 66 -155 101 -10 16 -20 30 -23 33 -10 9 -37 83 -49 133
-14 60 -14 173 0 234 23 102 90 207 153 241 94 50 111 52 598 52 442 0 458 1
468 19 6 13 10 197 10 530 l0 511 -569 0 c-391 0 -570 -3 -573 -11z"
                      />
                      <path
                        d="M8580 1465 l0 -1465 545 0 545 0 0 445 c0 245 3 445 8 445 4 0 23
-24 42 -53 19 -28 38 -56 42 -62 27 -33 346 -480 476 -668 24 -34 51 -72 60
-84 l17 -23 622 0 c343 0 623 2 623 5 0 3 -9 15 -19 27 -10 13 -40 49 -65 81
-25 31 -67 83 -92 115 -25 31 -54 66 -63 77 -9 11 -32 40 -51 65 -19 25 -84
106 -145 181 -123 151 -145 178 -240 299 -91 115 -128 161 -141 174 -6 6 -19
24 -29 39 -16 24 -16 30 -4 38 8 5 21 9 30 9 15 0 59 18 101 41 10 5 22 9 27
9 29 0 148 87 226 165 115 115 165 205 209 383 33 130 19 391 -29 553 -48 165
-179 337 -330 434 -93 59 -231 125 -263 125 -10 0 -22 3 -26 7 -7 8 -37 16
-171 48 -33 8 -105 19 -160 24 -55 5 -101 14 -103 20 -3 8 -250 11 -823 11
l-819 0 0 -1465z m1382 710 c94 -15 192 -55 221 -89 40 -48 57 -103 57 -186 0
-145 -48 -209 -200 -265 -63 -24 -388 -35 -401 -14 -12 19 -11 511 1 543 9 26
10 26 122 26 62 0 152 -7 200 -15z"
                      />
                      <path
                        d="M11520 2283 c0 -609 6 -809 31 -978 17 -118 40 -238 54 -285 7 -25
22 -72 31 -105 10 -33 22 -64 26 -69 4 -6 8 -17 8 -26 0 -30 115 -245 174
-328 70 -97 241 -263 290 -281 6 -2 39 -22 74 -43 34 -21 67 -38 73 -38 5 0
20 -6 32 -14 12 -8 58 -26 102 -40 44 -15 94 -31 110 -37 69 -25 184 -33 455
-33 271 0 386 8 455 33 17 6 66 23 110 37 83 27 208 84 213 96 2 5 10 8 17 8
21 0 165 111 233 181 194 197 320 468 391 839 40 212 43 282 49 1013 l5 717
-532 0 -531 0 -1 -717 c0 -675 -3 -766 -27 -853 -47 -176 -188 -280 -380 -280
-177 0 -317 93 -366 242 -44 134 -46 167 -46 904 l0 704 -525 0 -525 0 0 -647z"
                      />
                      <path
                        d="M14720 2480 l0 -450 403 -2 402 -3 0 -565 0 -565 -402 -3 -403 -2 0
-445 0 -445 1205 0 1205 0 0 445 0 445 -382 0 c-211 0 -393 3 -405 6 l-23 6 0
558 0 558 25 6 c14 4 191 6 393 6 202 0 373 0 380 0 9 0 12 97 12 450 l0 450
-1205 0 -1205 0 0 -450z"
                      />
                      <path
                        d="M17322 2479 l3 -450 431 1 c237 0 438 -2 447 -6 16 -6 17 -83 17
-993 0 -542 3 -996 6 -1008 l6 -23 428 0 c381 0 429 2 434 16 3 9 6 460 6
1003 0 754 3 990 12 999 9 9 123 12 450 12 l438 0 0 450 0 450 -1340 0 -1340
0 2 -451z"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
              <nav className="hidden md:block ">
                <div className="ml-10 flex items-center space-x-8 ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <a
                      href="#"
                      className=" text-base text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                    >
                      Home
                    </a>
                  </NavLink>

                  <div className=" z-10  ">
                    <button
                      className="  px-4 py-2 text-base text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center   "
                      onClick={(e) => toggledropDown(e)}
                    >
                      <span>Products</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>

                    <div
                      className={
                        activedropdown
                          ? "w-[130px] text-center absolute  rounded-md  border-2 outline-none border-[#EEEEEE] bg-white "
                          : "hidden absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg"
                      }
                    >
                      <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                        <button onClick={closeDrop}>
                          <NavLink
                            to="/autochecker"
                            className={({ isActive }) =>
                              isActive ? activeLink : normalLink
                            }
                          >
                            <a
                              href="#"
                              className="text-base mb-2 text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                            >
                              Autochecker
                            </a>
                          </NavLink>
                          <NavLink
                            to="/headhunter"
                            className={({ isActive }) =>
                              isActive ? activeLink : normalLink
                            }
                          >
                            <a
                              href="#"
                              className="text-base  text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                            >
                              Headhunter
                            </a>
                          </NavLink>
                        </button>
                      </div>
                    </div>
                  </div>

                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <a
                      href="#"
                      className="text-base text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                    >
                      Pricing
                    </a>
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <a
                      href="#"
                      className="text-base text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                    >
                      Contacts
                    </a>
                  </NavLink>
                  <NavLink
                    to="/signin"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <a
                      href="#"
                      className="text-base bg-white px-2 py-1 shadow-lg rounded-lg b-2 border-slate-400 text-[#5F7CDD] font-medium transition duration-150 border-2 border-transparent hover:border-[#5F7CDD] flex items-center "
                    >
                      Sign In
                    </a>
                  </NavLink>
                  <a
                    href="https://gchecker.wecruitpro.com/sign-up"
                    className="btn-sm  text-white bg-gradient-to-r from-[#5F7CDD] to-[#5BA4E8] hover:bg-slate-50 ml-3"
                  >
                    Register
                  </a>

                  {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </a> */}
                </div>
              </nav>
            </div>
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
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-blur-md"
              >
                <Link
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <a
                    href="#"
                    className=" text-base text-[#5F7CDD] font-medium transition duration-150 px-3 py-2  border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                  >
                    Home
                  </a>
                </Link>

                <div className=" z-10 -ml-1 ">
                  <button
                    className="  px-4 py-2 text-base text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center   "
                    onClick={(e) => toggledropDown(e)}
                  >
                    <span>Products</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <div
                    className={
                      activedropdown
                        ? "w-[130px] text-center absolute  rounded-md  border-2 outline-none border-[#EEEEEE] bg-white "
                        : "hidden absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg"
                    }
                  >
                    <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                      <button onClick={closeDrop}>
                        <NavLink
                          to="/headhunter"
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          <a
                            href="#"
                            className="text-base mb-2 text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                          >
                            Headhunter
                          </a>
                        </NavLink>
                        <NavLink
                          to="/headhunter"
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          <a
                            href="#"
                            className="text-base text-[#5F7CDD] font-medium transition duration-150 border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                          >
                            Autochecker
                          </a>
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>

                <Link
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <a
                    href="#"
                    className=" text-base text-[#5F7CDD] font-medium transition duration-150 px-3 py-2  border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                  >
                    Pricing
                  </a>
                </Link>
                <Link
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <a
                    href="#"
                    className=" text-base text-[#5F7CDD] font-medium transition duration-150 px-3 py-2  border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                  >
                    Contacts
                  </a>
                </Link>
                <Link
                  to="/signin"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <a
                    href="#"
                    className=" text-base text-[#5F7CDD] font-medium transition duration-150 px-3 py-2  border-b-4 border-transparent hover:border-[#5F7CDD] flex items-center"
                  >
                    Sign In
                  </a>
                </Link>

                <a
                  href="https://gchecker.wecruitpro.com/sign-up"
                  className="btn-sm  text-white bg-gradient-to-r from-[#5F7CDD] px-3 py-2 to-[#5BA4E8] hover:bg-slate-50 ml-3"
                >
                  Register
                </a>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </div>
  );
}

export default Nav;
