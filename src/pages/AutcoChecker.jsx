import React, { useState } from "react";
import FreeTrial from "./FreeTrial";
import Carousel from "../partials/Carousel";

function AutoChecker() {
  return (
    <>
      <div
        class="container mx-auto mt-16 "
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        <div className="">
          <img src="/src/images/Autochcker.png" className="absolute -z-1 " />
          <div className="p-10 ">
            <div className="-mt-16">
              <div className="w-full flex justify-center items-center flex-1 mt-20">
                <div className="">
                  <h1 className="text-[#000000] lg:text-white text-sm font-normal text-center">
                    Wecruit Autochecker
                  </h1>
                  <h1 className="text-[#000000] lg:text-white text-5xl font-bold text-center">
                    Quick and Easy solution <br /> to do background checking.
                  </h1>
                  <h3 className=" text-[#000000] lg:text-white text-xl mt-3 font-normal text-center">
                    A reference check autopilot tool solution that combines IT
                    technology, including emotional analysis and <br />{" "}
                    infographic reports using Google’s artificial intelligence
                    engine.
                  </h3>

                  <div class="container text-center mx-auto mt-10">
                    <div class=" sm:inline-flex ">
                      <div className="flex justify-center">
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
          <div className="pb-10 flex justify-center scale-150">
            <img src="/src/images/smartmockups_ld2k9gbq-depan.png" />
          </div>
        </div>

        <section className="relative">
          <div
            className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gradient-to-r from-[#5F7CDD] to-[#5BA4E8] transform translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div
              className="py-12 md:py-20"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              {/* Section header */}
              <div className="pb-12 md:pb-20">
                <h2 className="text-[40px] font-bold text-center mb-4">
                  Why Wecruit Autochecker?
                </h2>
                <p className="font-normal text-xl text-center">
                  A quick comparions with competitor (down below) shows that
                  Wecruit Autochecker <br /> provides 90% better feature while
                  maintaining 20% lower prices.
                </p>
              </div>
              <img src="/src/images/Table.png" />

              {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-white dark:text-gray-400">
                  <thead class="text-xs text-[#5F7CDD] dark:text-[#5F7CDD]">
                    <tr>
                      <th
                        scope="col\"
                        className="px-6 py-3 bg-gray-50 dark:bg-white text-center text-2xl font-bold"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-2xl font-bold"
                      >
                        Autochecker <br /> by Wecruit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 bg-gray-50 dark:bg-white text-2xl font-bold text-center"
                      >
                        Others
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-2xl font-bold text-center"
                      >
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#2859F1] font-bold text-[13px]">
                    <tr class="border-b border-gray-200 dark:border-[#5F7CDD]">
                      <th
                        scope="row"
                        rowSpan={3}
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-[#5F7CDD]"
                      >
                        Recommender Interview
                      </th>
                      <td class="px-6 py-4">Nominated</td>
                      <td class="px-6 py-4  dark:bg-[#CBD3EC]">
                        Email Interview <br /> (multiple choice + Essay)
                      </td>
                      <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-[#5F7CDD]">
                      <td class="px-6 py-4">Not Nominated</td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        Laptop PC
                      </td>
                      <td class="px-6 py-4">$1999</td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-[#5F7CDD]">
                      <td class="px-6 py-4">Time Available</td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        Accessories
                      </td>
                      <td class="px-6 py-4">$99</td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-[#5F7CDD]">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        Google Pixel Phone
                      </th>
                      <td class="px-6 py-4">Gray</td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        Phone
                      </td>
                      <td class="px-6 py-4">$799</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        Apple Watch 5
                      </th>
                      <td class="px-6 py-4">Red</td>
                      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        Wearables
                      </td>
                      <td class="px-6 py-4">$999</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
              <div className="text-center items-center sm:inline-flex mt-5">
                <div className="bg-[#5F7CDD] rounded-lg p-2 text-white text-sm">
                  <button>Download AI report</button>
                </div>
                <div className="bg-[#5F7CDD] lg:mt-0 lg:ml-5 mt-3 rounded-lg p-2 text-white text-sm">
                  <button>Download Basic Report</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-black">
          <div className=" relative max-w-7xl mx-auto py-10 px-4 sm:px-6">
            <div className="font-bold text-[40px] text-white">
              <p>How to use Autochecker by Wecruit</p>
            </div>
            <div className="font-normal text-[20px] text-white mb-5">
              <p>
                Still confuse on how Autochecker by Wecruit works? <br /> Here,
                we’ll tell you the magic behind it.
              </p>
            </div>
            <div
              className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2  md:max-w-2xl lg:max-w-none"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              {/* 1st item */}
              <div className="relative items-center flex flex-col  p-6  ">
                <img src="/src/images/1 Questionnaire.png" />
              </div>

              {/* 2nd item */}
              <div className="relative  flex flex-col p-3 lg:items-start  items-center">
                <h4 className="text-sm my-3 font-semibold text-left text-[#5F7CDD]">
                  HR Manager
                </h4>
                <div className="lg:inline-flex ">
                  <div className="font-bold text-gray-700 mx-auto rounded-full bg-white flex items-center justify-center h-[50px] w-[50px] text-xl    ">
                    1
                  </div>
                  <p className="text-[36px] font-bold ml-5 text-white">
                    Set Questionnaire
                  </p>
                </div>
                <p className="text-[20px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  Create a perfect Questionnaire that suits your company well.
                  After you create the best and perfect questionnaire, use it as
                  many as you like. One Questionnaire rule them all.
                </p>
                <p className="mt-3 text-[14px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  * Questionnaires are designed by industry & job role
                  accordingly <br /> * Sample questions are provided for the
                  best reference checking process. <br /> * There are 3 types of
                  questions: long answer (required), short answer (required),
                  optional answer
                </p>
              </div>

              {/* 3rd item */}

              <div className="relative  flex flex-col p-3 lg:items-start  items-center">
                <h4 className="text-sm my-3 font-semibold text-left text-[#5F7CDD]">
                  HR Manager
                </h4>
                <div className="lg:inline-flex ">
                  <div className="font-bold text-gray-700 mx-auto rounded-full bg-white flex items-center justify-center h-[50px] w-[50px] text-xl    ">
                    2
                  </div>
                  <p className="text-[36px] text-center font-bold ml-5 text-white">
                    Create new Project
                  </p>
                </div>
                <p className="text-[20px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  Insert candidate’s name and contact information, and
                  Autochecker by Wecruit will automatically continue to finish
                  the report. Use Questionnaire as much as you want.
                </p>
                <p className="mt-3 text-[14px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  * Unlimited reference checking capacity <br /> * Process
                  monitoring in real time <br /> * There is a special note for
                  the composition of the nominated resource persons
                </p>
              </div>
              {/* 4rd item */}
              <div className="relative items-center flex flex-col  p-6  ">
                <img src="/src/images/2 Project.png" />
              </div>
              {/* 5rd item */}
              <div className="relative items-center flex flex-col  p-6  ">
                <img src="/src/images/3 Candidate Check.png" />
              </div>
              {/* 6rd item */}
              <div className="relative  flex flex-col p-3 lg:items-start  items-center">
                <h4 className="text-sm my-3 font-semibold text-left text-[#5F7CDD]">
                  Candidate
                </h4>
                <div className="lg:inline-flex ">
                  <div className="font-bold text-gray-700 mx-auto rounded-full bg-white flex items-center justify-center h-[50px] w-[50px] text-xl    ">
                    3
                  </div>
                  <p className="text-[36px] font-bold ml-5 text-center text-white">
                    Candidate’s Approval
                  </p>
                </div>
                <p className="text-[20px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  Reference check is Autochecker by Wecruit is safe and secure.
                  Wecruit’s experience with over 3.000 project will cover
                  everything.
                </p>
                <p className="mt-3 text-[14px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  * Orientation video will provided <br /> * The reference check
                  and ethics agreement section is required after the candidate's
                  electronic signature <br /> * Nominated recommender
                  information entered by the candidate himself.
                </p>
              </div>
              {/* 7rd item */}
              <div className="relative  flex flex-col p-3 lg:items-start  items-center">
                <h4 className="text-sm my-3 font-semibold text-left text-[#5F7CDD]">
                  Recommender
                </h4>
                <div className="lg:inline-flex ">
                  <div className="font-bold text-gray-700 mx-auto rounded-full bg-white flex items-center justify-center h-[50px] w-[50px] text-xl    ">
                    4
                  </div>
                  <p className="text-[36px] font-bold ml-5 text-white text-center">
                    Recommender Response
                  </p>
                </div>
                <p className="text-[20px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  "After the Resource Person agrees to participate, the Checker
                  will send a questionnaire. After that, the Resource Person's
                  answers will be presented with high quality & the right
                  quantity by the Checker."
                </p>
              </div>
              {/* 8rd item */}
              <div className="relative items-center flex flex-col  p-6  ">
                <img src="/src/images/4 refrence check.png" />
              </div>
              {/* 9rd item */}
              <div className="relative items-center flex flex-col  p-6  ">
                <img src="/src/images/5 Additional Verficiation.png" />
              </div>
              {/* 10rd item */}
              <div className="relative  flex flex-col p-3 lg:items-start  items-center">
                <h4 className="text-sm my-3 font-semibold text-left text-[#5F7CDD]">
                  HR Manager
                </h4>
                <div className="lg:inline-flex ">
                  <div className="font-bold text-gray-700 mx-auto rounded-full bg-white flex items-center justify-center h-[50px] w-[50px] text-xl    ">
                    5
                  </div>
                  <p className="text-[36px] font-bold ml-5 text-white text-center">
                    Additional Verification
                  </p>
                </div>
                <p className="text-[20px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  Hiring decisions with confidence. You can design the service
                  packages and processes you want.
                </p>
                <p className="mt-3 text-[14px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  * Additional offline verification options are provided. <br />{" "}
                  * Choice of background check services (Degrees & Occupations){" "}
                  <br />* Reference check reports are combined with additional
                  verification reports.
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

export default AutoChecker;
