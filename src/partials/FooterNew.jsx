import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function FooterNew() {
  return (
    <>
      <div class="container text-center mx-auto ">
        <div class="container text-center mx-auto mt-10">
          <div class=" sm:inline-flex ">
            <div className="flex justify-center">
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
            </div>
          </div>
        </div>

        <div class="container text-center mx-auto ">
          <div class=" sm:inline-flex ">
            <div className=" justify-center inline-flex">
              <NavLink to="/">
                <p className="text-[#5F7CDD] underline text-[16px] font-semibold">
                  Homepage
                </p>
              </NavLink>
              <NavLink to="/pricing">
                <p className="text-[#5F7CDD] underline text-[16px] font-semibold ml-5">
                  Pricing
                </p>
              </NavLink>
              <a
                className="cursor-pointer"
                href="https://www.youtube.com/channel/UC5gqBlizamxfoKkJKpMWrYQ?app=desktop"
              >
                <p className="text-[#5F7CDD] underline text-[16px] font-semibold ml-5">
                  YouTube
                </p>
              </a>
              <Link
                to="/src/images/documents/Wecruit Integrated Service terms_of_use_en_(Hunters - HR manager) V.20230427.docx"
                download
                target="_blank"
              >
                <a className="cursor-pointer">
                  <p className="text-[#5F7CDD] underline text-[16px] font-semibold ml-5">
                    Terms of Use
                  </p>
                </a>
              </Link>
              <Link
                to="/src/images/documents/Wecruit Integrated Service Privacy Policy_en V.20230427.docx"
                download
                target="_blank"
              >
                <a className="cursor-pointer">
                  <p className="text-[#5F7CDD] underline text-[16px] font-semibold ml-5">
                    Privacy & Policy
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <footer class="p-4 bg-white sm:hidden md:flex md:items-center md:justify-between md:p-6 ">
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 ml-28">
            <li className="">
              <a
                href="https://www.instagram.com/wecruit_asia/"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4 hover:underline md:mr-6 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    fill="blue"
                  ></path>{" "}
                </svg>
              </a>
            </li>
            <li className="ml-5">
              <a
                href="https://www.facebook.com/WecruitAsia"
                class="mr-4 hover:underline md:mr-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    fill="blue"
                  ></path>{" "}
                </svg>
              </a>
            </li>

            <li className="ml-5">
              <a
                href="https://www.linkedin.com/company/wecruit-indonesia/"
                class="mr-4 hover:underline md:mr-6 absolute -mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    fill="blue"
                  ></path>{" "}
                </svg>
              </a>
            </li>
            <li className="ml-5">
              <a href="#" class="mr-4 hover:underline md:mr-6"></a>
            </li>
          </ul>

          <span class="text-sm font-bold text-[#5F7CDD] sm:text-center  ">
            2023 Copyright @ WECRUIT Corp, Ltd. All rights reserved.
          </span>
        </footer>
      </div>
    </>
  );
}

export default FooterNew;
