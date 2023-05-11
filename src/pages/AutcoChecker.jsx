import React, { useState } from "react";
import FreeTrialAutoChekcer from "./FreeTrialAutoChecker";
import CarouselAutoChecker from "../partials/carouselAutoChecker";
import { Disclosure, Transition } from "@headlessui/react";

function AutoChecker() {
  return (
    <>
      <div
        class="container mx-auto mt-16 "
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        <div className="">
          <img src="/src/images/Group 55 (2).png" className="absolute -z-1 " />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="p-10 ">
              <div className="lg:mt-20 -mt-56">
                <div className="w-full flex justify-center items-center flex-1 mt-[410px] md:mt-20 lg:mt-20">
                  <div className="ml-0 lg:ml-11">
                    {/* <h1 className="text-[#000000] lg:text-white text-sm font-normal">
                      COMING SOON!
                    </h1> */}
                    <h1 className="text-[#000000] lg:text-black text-5xl font-bold">
                      Quick and Easy solution to do reference check
                    </h1>
                    <h3 className=" text-[#000000] lg:text-black text-xl mt-3 font-normal ">
                      An autopilot reference check tool for recruitment. You can
                      start within 30 sec and save 70% of cost compare to market
                      cost.
                    </h3>

                    <div class="container mx-auto mt-10">
                      <div className="flex ">
                        <a
                          className="btn text-white bg-[#5F7CDD] hover:bg-blue-700 w-full mb-3 sm:w-auto sm:mb-0"
                          href="https://wa.me/6282123387686"
                        >
                          Request Demo for free now
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
            <div className="p-10 justify-center scale-150 opacity-0">
              <img src="/src/images/smartmockups_ld2miring-removebg-preview.png" />
            </div>
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
              <div className="pb-12 md:pb-10 -mt-80 md:mt-32 lg:mt-96">
                <h2 className="text-[40px] font-bold text-center mb-4">
                  Why Wecruit Autochecker?
                </h2>
                <p className="font-normal text-xl text-center">
                  A comparisons with competitor (down below) shows that Wecruit
                  Autochecker <br /> provides 90% better feature while
                  maintaining 20% lower prices.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-12 md:pb-10">
                {/* left section */}
                <div class="grid grid-cols-5">
                  <div class=" pt-10 px-3 md:px-7 lg:px-7">
                    <img src="/src/images/Frame 88.png" />
                  </div>
                  <div class="col-span-4">
                    <div className="pt-10 text-left">
                      <div className="">
                        <div className="w-full flex justify-center items-center flex-1 ">
                          <div className="">
                            <h1 className="text-[#000000] lg:text-black text-2xl font-bold">
                              Excellent
                            </h1>
                            <h3 className=" text-[#000000] lg:text-black text-lg mt-3 font-normal ">
                              Recruitment failure costs have been drastically
                              reduced.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* number 2 */}
                  <div class=" pt-10 px-3 md:px-7 lg:px-7 mt-0 md:-mt-0 lg:-mt-0">
                    <img src="/src/images/Frame 88-1.png" />
                  </div>
                  <div class="col-span-4 mt-0 md:-mt-0 lg:-mt-0">
                    <div className="pt-10 text-left">
                      <div className="">
                        <div className="w-full flex justify-center items-center flex-1 ">
                          <div className="">
                            <h1 className="text-[#000000] lg:text-black text-2xl font-bold">
                              Convenient
                            </h1>
                            <h3 className=" text-[#000000] lg:text-black text-lg mt-3 font-normal ">
                              With only one click, HR manager can conduct
                              reference check for up to 960 people in a day at
                              the same time.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end number 2 */}
                  {/* number 3 */}
                  <div class=" pt-10 px-3 md:px-7 lg:px-7 mt-0 md:-mt-0 lg:-mt-0">
                    <img src="/src/images/Frame 88-2.png" />
                  </div>
                  <div class="col-span-4 mt-0 md:-mt-0 lg:-mt-0">
                    <div className="pt-10 text-left">
                      <div className="">
                        <div className="w-full flex justify-center items-center flex-1 ">
                          <div className="">
                            <h1 className="text-[#000000] lg:text-black text-2xl font-bold">
                              Safe
                            </h1>
                            <h3 className=" text-[#000000] lg:text-black text-lg mt-3 font-normal ">
                              It contains more than 3,000 actual talent
                              verification project know how. Experience a safe
                              and verified process that complies with the
                              Personal Information Protection Act.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end number 3 */}
                  {/* number 4 */}
                  <div class=" pt-10 px-3 md:px-7 lg:px-7 mt-0 md:-mt-0 lg:-mt-0">
                    <img src="/src/images/Frame 88-3.png" />
                  </div>
                  <div class="col-span-4 mt-0 md:-mt-0 lg:-mt-0">
                    <div className="pt-10 text-left">
                      <div className="">
                        <div className="w-full flex justify-center items-center flex-1 ">
                          <div className="">
                            <h1 className="text-[#000000] lg:text-black text-2xl font-bold">
                              Economic
                            </h1>
                            <h3 className=" text-[#000000] lg:text-black text-lg mt-3 font-normal ">
                              Were you burdened with the expensive reference
                              check service cost? Experience a reputation
                              inquiry at an amazing price of only 20% compared
                              to the market price.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end number 4 */}
                </div>
                {/* end left section */}

                <div className="p-10 md:p-12 lg:p-5 justify-center ">
                  <img src="/src/images/Group 57.png" />
                </div>
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
              <div className="text-center items-center sm:inline-flex mt-10">
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
                  Autochecker by Wecruit is safe and secure. Wecruit’s
                  experience with over 3.000 project will cover everything.
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
                    Referee Response
                  </p>
                </div>
                <p className="text-[20px] font-normal lg:ml-16 lg:text-left  text-center text-white">
                  After a Referee agrees to participate, Autochecker will send a
                  questionnaire. After that, the Referee's answers will be
                  presented with high quality & the right quantity by
                  Autochecker.
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
          <div className="lg:mt-28 mt-0">
            <CarouselAutoChecker />
          </div>
          <FreeTrialAutoChekcer />
          {/* <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-7xl my-3"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          > */}{" "}
          <div
            className="max-w-sm mx-auto items-start md:max-w-2xl lg:max-w-7xl my-3"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            {" "}
            {/* 1st item */}
            <div className="relative  flex flex-col  p-6 bg-white rounded h-full ">
              <h4 className=" text-4xl font-bold text-center leading-snug tracking-tight mb-3 ">
                FAQ
              </h4>

              <p className="text-gray-600 leading-9 text-center">
                We believe that education is key to creating a more sustainable
                world. That's why we've compiled answers to the most common
                <br />
                questions about sustainability and our products.
              </p>
            </div>
            {/* 2nd item */}
            <div className="relative  flex flex-col p-6 bg-white rounded  h-full ">
              <Disclosure>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What is Checker Auto? Why should I use Checker Auto?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Checker Auto is an automated solution for candidate reference
                  checks using Google A.I technology. Checker Auto is a reliable
                  solution that streamlines the reference check process,
                  reducing the workload for the HR division and minimizing bad
                  hiring that can incur significant financial costs for the
                  company.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>How to use Checker Auto?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  ● Set up questionnaire <br />● Create project <br /> ● Obtain
                  candidate's consent <br /> ● Collect responses from the
                  referee <br /> ● Download the high-quality report result
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What are the benefits of Checker Auto?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  ● Using Google AI technology can significantly improve the
                  accuracy of validating prospective employees, by tracking
                  whether the time, IP address, browser, and operating system{" "}
                  <br /> ● Reference checking process allows for up to 10
                  candidates to be checked simultaneously with just one click{" "}
                  <br /> ● AI sentiment analysis help summarize the referee's
                  response <br /> ● Reminder notification for referee and
                  candidate
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Why does Checker Auto use a questionnaire method?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Checker Auto is questionnaire-based system because we want to
                  upgrade from the manual phone-based system, which often
                  encounters issues such as this activity can only be conducted
                  during regular business hours, unanswered calls, unreliable
                  information, and high costs for phone credit
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What if candidates and referees haven't filled out the
                    report yet?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  The system will automatically send notifications to both the
                  candidate and the referee, requesting them to promptly fill
                  out the provided form twice a day. In the event that the
                  candidate fails to respond, the HR team will provide personal
                  reminders via phone or WhatsApp. If the referee fails to
                  respond within the allotted time frame, the HR team can
                  replace them from the system, without necessitating a restart.
                  The replacement referee will automatically receive the same
                  questionnaire
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    Why Checker Auto is important to implement in a company
                    during the recruitment process?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Because auto checker has valid evidence that has been directly
                  submitted by the candidate. If there are any violations and
                  fraud that occur after the candidate is accepted into the
                  company, then the candidate can be dismissed without incurring
                  any penalty from the company
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    How to replace a referee when the project is already
                    running?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Firstly, click on the candidate's project details, then select
                  'Modify' in the nominated referees information' section. Next,
                  enter the details of the new referee candidate
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    How long does the system keep reminder notifications for
                    candidates and referees?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  The system will periodically send notifications to the email
                  address of the candidate and referee for up to 5 days,
                  including weekends. The system will discontinue sending
                  notifications if there is no response within 5 days. However,
                  the HR team can still provide reminders by accessing the
                  project details and selecting the 'resend' button in the
                  'Questionnaire for nominated referees' column
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What is a blind referee? How does the system work?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  A blind referee is a non-designated referee who is not
                  recommended by the candidate, but is selected by one of the
                  candidate's nominated referees. In this system, one of the
                  referees is randomly asked to provide another referee's phone
                  number from their previous workplace
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    How many questionnaires can be added for referees?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  The questionnaire for referees can be added as many as
                  desired, but our recommendation is to have 7-8 questions,
                  which is ideal for the referee
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    How long after starting the project will candidates receive
                    notification emails? How about if the candidate has not
                    received the email?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  The email will be sent immediately to the candidate. If it's
                  not in the inbox, please take the following actions. <br />
                  ● In case of Gmail, please check all mailboxes, including the
                  spam box and the promotion box.
                  <br />● If you enter a wrong e-mail address, please contact
                  the HR manager or CHECKER customer service.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    How long does it take for candidates and referees to
                    complete the questionnaire?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  ● Candidate takes only about 5 minutes.
                  <br />● Referee response will take approximately 10 minutes.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What is the answer model for referees? Can it be customized?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  There are three available answer models for the referees to
                  choose from:
                  <br />
                  ● Long-answer question (The referee must enter at least 100
                  characters)
                  <br />
                  ● Short-answer question (The referee must enter at least 10
                  characters)
                  <br />● Question (Optional- custom your needs).
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    Is it possible to set a deadline for completing reference
                    checks for candidates and referees?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Actually, our system already provides reminders to complete
                  the recruitment process promptly, and suggest responding to
                  the questionnaires within 1-2 days. To add a note that will be
                  sent to the candidate via email with a deadline specified by
                  your company, follow these steps: When you start the project,
                  enter the candidate information, then select the "Special
                  Guide" button and provide a description with the deadline for
                  the candidate to complete the questionnaires
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>How do I change my password?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  ● Access the web app https://gchecker.wecruitpro.com/ <br />●
                  Click on the 'Find Password' button before logging in.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>Can the questionnaire be reused repeatedly?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Once saved, you won't need to repeat the process. You can use
                  the questionnaire as many times as you need to
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    If you require further clarification or have any concerns,
                    please do not hesitate to contact us at your convenience
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Please let us know if you are available for further
                  discussion, or alternatively, you may contact our Business
                  Development team, at +62 813 1484 6993, Monday - Friday from
                  08.00 AM to 17.00 PM.
                </Disclosure.Panel>
              </Disclosure>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoChecker;
