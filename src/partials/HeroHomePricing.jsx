import React, { useState } from "react";
import Modal from "../utils/Modal";
import { Tab } from "@headlessui/react";
import HeroImage from "../images/hero-image.png";

function HeroHomePricing() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const activeLink =
    " bg-[#124982] rounded-full py-2 px-5  text-white text-sm font-semibold ";
  const normalLink = "";
  return (
    <>
      <div className=" bg-gradient-to-l from-[#6890e3] to-[#5b9ee7] z-40   mt-16">
        <section className="relative">
          {/* Illustration behind hero content */}
          {/* <div
            className=" absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none "
            aria-hidden="true"
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-01"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                <circle cx="155" cy="443" r="64" />
              </g>
            </svg>
          </div> */}

          <div className=" mx-auto max-w-6xl px-4 sm:px-6 ">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20  ">
              {/* Section header */}
              <div className="text-center text-white pb-12 md:pb-16">
                <p
                  className="font-semibold text-base mb-5 -mt-16"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Pricing
                </p>
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 "
                  data-aos="zoom-y-out"
                >
                  Flexible Plan & Pricing, adjust as much as you like.{" "}
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p
                    className="text-xl text-white mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    With flexible pricing, adjust service that you want to use.
                    With the lowest price and best features in it’s class.
                  </p>
                  <div
                    className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  >
                    <div className="p-4  rounded-full text-white bg-[#8CA5ED]  w-full mb-4 sm:w-auto sm:mb-0">
                      No Credit card required
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroHomePricing;
