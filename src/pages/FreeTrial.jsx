import { useState, useRef, useEffect } from "react";

const FreeTrial = () => {
  return (
    <>
      <div
        className="carousel my-12 mx-auto"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 mx-auto text-center text-[#5F7CDD] font-semibold mb-5"
        >
          <path
            d="M7.5 31.8748H57.15"
            stroke="#5F7CDD"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 61.875H27.3375"
            stroke="#5F7CDD"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M41.25 61.875H54.375"
            stroke="#5F7CDD"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.9248 76.8747H65.8498C79.1998 76.8747 82.4998 73.5747 82.4998 60.4122V25.8372"
            stroke="#5F7CDD"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M74.9625 14.0627C72.6375 13.3877 69.6375 13.1252 65.85 13.1252H24.15C10.8375 13.1252 7.5 16.4252 7.5 29.5877V60.3752C7.5 69.1502 8.9625 73.5377 13.9125 75.4877"
            stroke="#5F7CDD"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M82.5 7.50015L7.5 82.5002"
            stroke="#5F7CDD"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h2 className="text-4xl text-center text-[#5F7CDD] font-semibold mb-5">
          Start to improve your recruitment workflow
          <br /> with Wecruit full package recruitment solution.
        </h2>
        {/* <p className="text-2xl font-semibold text-gray-600 mb-12 text-center lg:mx-32">
          Start improve your workflow with Wecruit solution. Wether it’s
          Autochecker or Headhunter. On us for your first 2 months, Yes 2 Month.
          No payment details required!
        </p> */}
        <div
          className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        >
          <div>
            <a
              className="btn text-white bg-gradient-to-r from-[#5F7CDD] to-[#5BA4E8] hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
              href="#0"
            >
              Request demo for free now
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
        </div>
      </div>
    </>
  );
};

export default FreeTrial;
