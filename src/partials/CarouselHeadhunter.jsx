import { useState, useRef, useEffect } from "react";
import data from "./data.json";

const CarouselHeadhunter = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <>
      <div
        className="carousel my-12 mx-auto"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <h2 className="text-4xl leading-8 text-center text-[#5F7CDD] font-semibold mb-5">
          Our Client
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Used by more than 20+ big and well-known companies across Korea and
          now is Available in Asia.
          <br /> So what are you waiting for? Do demo now!
        </p>
        <div className="relative overflow-hidden ">
          {/* <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div> */}
          {/* <div className=" flex justify-center mx-0 lg:mx-32">
            <img
              src="/src/images/3line.png"
              className="object-cover container mb-0 lg:mb-20"
            />
          </div> */}

          <div class="flex justify-center mx-5 py-10 md:mx-20 lg:mx-20">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
              <div className="relative  flex flex-col  p-6 my-3 bg-white rounded shadow-xl h-full ">
                <img
                  src="/src/images/hanwha.png"
                  className="w-64 h-64 mx-auto mb-3"
                />

                <h4 className=" text-xl font-bold leading-snug tracking-tight mb-3 mx-auto">
                  Hanhwa Systems
                </h4>
                <h4 className=" text-base font-medium leading-snug tracking-tight mb-3 text-center">
                  Work-efficiency is growing more than 300%. There is no <br />{" "}
                  reason not to use this platform as HR perspective.
                </h4>
                <p className="text-gray-600 text-center ">
                  Assistant Manager, Hwan-seok, Choi
                </p>
              </div>
              <div className="relative  flex flex-col  p-6 my-3 bg-white rounded shadow-xl h-full ">
                <img
                  src="/src/images/Mask group (2).png"
                  className="w-64 h-64 mx-auto mb-3"
                />

                <h4 className=" text-xl font-bold leading-snug tracking-tight mb-3 mx-auto">
                  VNTC
                </h4>
                <h4 className=" text-base font-medium leading-snug tracking-tight mb-3 text-center">
                  Through this platform, my company already hired 2 people.
                  <br />
                  Another person is waiting for admission.
                </h4>
                <p className="text-gray-600 text-center ">
                  Executive Director, Jee-hae,Song
                </p>
              </div>
              <div className="relative  flex flex-col  p-6 my-3 bg-white rounded shadow-xl h-full ">
                <img
                  src="/src/images/Mask group (3).png"
                  className="w-64 h-64 mx-auto mb-3"
                />

                <h4 className=" text-xl font-bold leading-snug tracking-tight mb-3 mx-auto">
                  SAMSUNG
                </h4>
                <h4 className=" text-base font-normal leading-snug tracking-tight mb-3 text-center">
                  It was very hassle to communicate with more <br /> than 10
                  search firms separately and do cost processing, <br /> but now
                  through this, everything can be at one time.
                </h4>
              </div>
            </div>
          </div>

          {/* <div class="flex justify-center mb-4 mx-5 md:mx-56 lg:mx-56">
            <div class="grid grid-cols-1 md:grid-cols-1 "></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CarouselHeadhunter;
