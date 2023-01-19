import React, { useState } from "react";
import FreeTrial from "./FreeTrial";
import Carousel from "../partials/Carousel";

function HeadHunter() {
  return (
    <>
      <div
        class="container mx-auto mt-16 "
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        <div className="bg-gradient-to-l  from-[#5F7CDD] to-[#5BA4E8] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="p-10 flex justify-center scale-150">
              <img src="/src/images/smartmockups_ld2miring-removebg-preview.png" />
            </div>
            <div className="p-10">
              <div className="lg:mt-20 -mt-16">
                <div className="w-full flex justify-center items-center flex-1 mt-20">
                  <div className="">
                    <h1 className="text-white text-sm font-normal">
                      Wecruit Headhunter
                    </h1>
                    <h1 className="text-white text-5xl font-bold">
                      Korea #1 headhunting <br />
                      service platform
                    </h1>
                    <h3 className=" text-white text-xl mt-3 font-normal ">
                      A reference check autopilot tool solution that combines IT
                      technology, including emotional analysis and infographic
                      reports using Google’s artificial intelligence engine.
                    </h3>

                    <div class="container mx-auto mt-10">
                      <div className="flex ">
                        <a
                          className="btn text-white bg-[#5F7CDD] hover:bg-blue-700 w-full mb-3 sm:w-auto sm:mb-0"
                          href="#0"
                        >
                          Request a Demo
                          <svg
                            className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </a>
                      </div>
                      {/* <div>
                        <a
                          className="btn text-white  bg-[#C6C6C666] hover:bg-blue-700 w-full mb-3 sm:w-auto sm:mb-0"
                          href="#0"
                        >
                          Check Pricing
                          <svg
                            className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative">
          <div
            className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gradient-to-r from-[#5F7CDD] to-[#5BA4E8] transform translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div
              className="py-12 md:py-20"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              {/* Section header */}
              <div className="pb-12 md:pb-20">
                <p className="text-xl text-[#5F7CDD] mb-3 font-semibold">
                  WHAT IS HEADHUNTER by WECRUIT
                </p>
                <h2 className="h2 mb-4">
                  A Quick and Easy solution <br /> for long and tiring
                  recruitment process.
                </h2>
              </div>

              {/* Items */}
              <div
                className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3  md:max-w-2xl lg:max-w-none"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                {/* 1st item */}
                <div className="relative flex flex-col  p-6  bg-white rounded shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 text-[#0095FF] mb-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-3 ">
                    Easy to use
                  </h4>
                  <p className="text-gray-600 ">
                    Process up to 960 candidates’ reference check at once. Just
                    one-click to start the process and get the answers.
                  </p>
                </div>

                {/* 2nd item */}
                <div className="relative flex flex-col  p-6  bg-white rounded shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 text-[#0095FF] mb-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-3 ">
                    Affordable
                  </h4>
                  <p className="text-gray-600 ">
                    Focused on the essence, Checker costs only 10% of other
                    reference checking services. Our excellent A.I. technology
                    supports your benefit
                  </p>
                </div>

                {/* 3rd item */}
                <div className="relative flex flex-col  p-6  bg-white rounded shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 text-[#0095FF] mb-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>

                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-3 ">
                    All in One Place
                  </h4>
                  <p className="text-gray-600 ">
                    Headhunter is the go to place to find the best people from
                    different set skill. Find quick without having hassle. Quick
                    and easy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-black">
          <div className=" relative max-w-6xl mx-auto py-10 px-4 sm:px-6">
            <div
              className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4  md:max-w-2xl lg:max-w-none"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              {/* 1st item */}
              <div className="relative items-center flex flex-col  p-6  ">
                <svg
                  width="79"
                  height="79"
                  viewBox="0 0 79 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20"
                >
                  <path
                    d="M9.44371 49.3814L3.74375 43.6813C1.41875 41.3563 1.41875 37.5313 3.74375 35.2063L9.44371 29.5062C10.4187 28.5312 11.2062 26.6187 11.2062 25.2687V17.2061C11.2062 13.9061 13.9062 11.2062 17.2062 11.2062H25.2687C26.6187 11.2062 28.5312 10.4188 29.5062 9.44382L35.2062 3.74375C37.5312 1.41875 41.3562 1.41875 43.6812 3.74375L49.3813 9.44382C50.3563 10.4188 52.2687 11.2062 53.6187 11.2062H61.6813C64.9813 11.2062 67.6812 13.9061 67.6812 17.2061V25.2687C67.6812 26.6187 68.4687 28.5312 69.4437 29.5062L75.1438 35.2063C77.4688 37.5313 77.4688 41.3563 75.1438 43.6813L69.4437 49.3814C68.4687 50.3564 67.6812 52.2689 67.6812 53.6189V61.6811C67.6812 64.9811 64.9813 67.6814 61.6813 67.6814H53.6187C52.2687 67.6814 50.3563 68.4688 49.3813 69.4438L43.6812 75.1439C41.3562 77.4689 37.5312 77.4689 35.2062 75.1439L29.5062 69.4438C28.5312 68.4688 26.6187 67.6814 25.2687 67.6814H17.2062C13.9062 67.6814 11.2062 64.9811 11.2062 61.6811V53.6189C11.2062 52.2314 10.4187 50.3189 9.44371 49.3814Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.2354 50.6548L50.7354 28.1548"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M48.8398 48.7798H48.8734"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.0898 30.0298H30.1234"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h4 className="text-sm my-3 font-semibold leading-snug tracking-tight  text-center text-white">
                  Cheaper compare to competitors
                </h4>
                <p className="text-white text-[52px] font-bold text-center">
                  20%
                </p>
              </div>

              {/* 2nd item */}
              <div className="relative items-center flex flex-col p-3  ">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20"
                >
                  <path
                    d="M25.8003 68.0625V60.3"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M45 68.0625V52.5375"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M64.1997 68.0625V44.7375"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M64.2003 21.9375L62.4753 23.9625C52.9128 35.1375 40.0878 43.05 25.8003 46.6125"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M53.2124 21.9375H64.1999V32.8875"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33.7495 82.5H56.2495C74.9995 82.5 82.4995 75 82.4995 56.25V33.75C82.4995 15 74.9995 7.50001 56.2495 7.50001H33.7495C14.9995 7.50001 7.49951 15 7.49951 33.75V56.25C7.49951 75 14.9995 82.5 33.7495 82.5Z"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h4 className="text-sm my-3 font-semibold leading-snug tracking-tight  text-center text-white">
                  Increased workflow compared to competitor
                </h4>
                <p className="text-white text-[52px] font-bold text-center">
                  35%
                </p>
              </div>

              {/* 3rd item */}
              <div className="relative items-center flex flex-col  p-3  ">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20"
                >
                  <path
                    d="M67.4998 26.85C67.2748 26.8125 67.0123 26.8125 66.7873 26.85C61.6123 26.6625 57.4873 22.425 57.4873 17.175C57.4873 11.8125 61.7998 7.5 67.1623 7.5C72.5248 7.5 76.8373 11.85 76.8373 17.175C76.7998 22.425 72.6748 26.6625 67.4998 26.85Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M63.6374 54.15C68.7749 55.0125 74.4374 54.1125 78.4124 51.45C83.6999 47.925 83.6999 42.15 78.4124 38.625C74.3999 35.9625 68.6624 35.0625 63.5249 35.9625"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.3873 26.85C22.6123 26.8125 22.8748 26.8125 23.0998 26.85C28.2748 26.6625 32.3998 22.425 32.3998 17.175C32.3998 11.8125 28.0873 7.5 22.7248 7.5C17.3623 7.5 13.0498 11.85 13.0498 17.175C13.0873 22.425 17.2123 26.6625 22.3873 26.85Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.2499 54.15C21.1124 55.0125 15.4499 54.1125 11.4749 51.45C6.1874 47.925 6.1874 42.15 11.4749 38.625C15.4874 35.9625 21.2249 35.0625 26.3624 35.9625"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.0003 54.8625C44.7753 54.825 44.5128 54.825 44.2878 54.8625C39.1128 54.675 34.9878 50.4375 34.9878 45.1875C34.9878 39.825 39.3003 35.5125 44.6628 35.5125C50.0253 35.5125 54.3378 39.8625 54.3378 45.1875C54.3003 50.4375 50.1753 54.7125 45.0003 54.8625Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.0877 66.675C28.8002 70.2 28.8002 75.975 34.0877 79.5C40.0877 83.5125 49.9127 83.5125 55.9127 79.5C61.2002 75.975 61.2002 70.2 55.9127 66.675C49.9502 62.7 40.0877 62.7 34.0877 66.675Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h4 className="text-sm my-3 font-semibold leading-snug tracking-tight  text-center text-white">
                  More quick capable candidate filtering
                </h4>
                <p className="text-white text-[52px] font-bold text-center">
                  20%
                </p>
              </div>

              {/* 4rd item */}
              <div className="relative items-center flex flex-col  p-3  ">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20"
                >
                  <path
                    d="M57.7126 19.5375L63 30.1125C63.7125 31.575 65.625 32.9625 67.2375 33.2625L76.8001 34.8375C82.9126 35.85 84.3376 40.275 79.9501 44.7L72.4875 52.1625C71.25 53.4 70.5376 55.8375 70.9501 57.6L73.0875 66.825C74.775 74.1 70.8751 76.95 64.4626 73.125L55.5 67.8C53.8875 66.825 51.1876 66.825 49.5751 67.8L40.6125 73.125C34.2 76.9125 30.3001 74.1 31.9876 66.825L34.1251 57.6C34.5376 55.875 33.8251 53.4375 32.5876 52.1625L25.1251 44.7C20.7376 40.3125 22.1626 35.8875 28.2751 34.8375L37.8375 33.2625C39.45 33 41.3626 31.575 42.0751 30.1125L47.3626 19.5375C50.1751 13.8 54.8251 13.8 57.7126 19.5375Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 18.75H7.5"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.75 71.25H7.5"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 45H7.5"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h4 className="text-sm my-3 font-semibold leading-snug tracking-tight  text-center text-white">
                  Headhunting App <br /> in Korea
                </h4>
                <p className="text-white text-[52px] font-bold text-center">
                  1#
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-10">
          <FreeTrial />
          <div className="lg:mt-28 mt-0">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadHunter;
