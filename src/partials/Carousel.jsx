import { useState, useRef, useEffect } from "react";
import data from "./data.json";

const Carousel = () => {
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
          now is Available in Asia. <br /> So what are you waiting for? Do demo
          now!
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
          <div className=" flex justify-center">
            <img
              src="/src/images/Frame 74.png"
              className="object-cover container  mb-0 lg:mb-20"
            />
          </div>
          <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-7xl my-5"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            {" "}
            {/* 1st item */}
            <div className="relative  flex flex-col  p-6 bg-white rounded shadow-xl h-full ">
              <img
                src="/src/images/hanwha.png"
                className="w-80 h-64 mx-auto mb-3 "
              />

              <h4 className=" text-xl font-bold leading-snug tracking-tight mb-3 mx-auto">
                Hanhwa Systems
              </h4>
              <h4 className=" text-base font-semibold leading-snug tracking-tight mb-3 text-center">
                The candidate self authentication and ethics check feature is
                the most important
              </h4>
              <p className="text-gray-600 text-center ">
                Getting the confirm that "I have never gotten a disciplinary
                action nor had an ethical issue at my workplace" from the
                candidate is very important. There is no other way to handle
                theproblem after the candidate join the company. Since CHECKER
                provides a self authentication, there's a legal effect of
                "preventing self denial".
              </p>
            </div>
            {/* 2nd item */}
            <div className="relative  flex flex-col  p-6 bg-white rounded shadow-xl h-full ">
              <img
                src="/src/images/Client_Samsung.png"
                className="w-64 h-64 mx-auto mb-3"
              />

              <h4 className=" text-xl font-bold leading-snug tracking-tight mb-3 mx-auto">
                Samsung
              </h4>
              <h4 className=" text-base font-semibold leading-snug tracking-tight mb-3 text-center">
                Checker reduces $200 of labor cost per candidate
              </h4>
              <p className="text-gray-600 text-center ">
                We're planning to continue using CHECKER because of its cost
                effectiveness. It's hard to tell exact figures compared to the
                former (reference check) process since our HR managers conducted
                it themselves. However, CHECKER is meaningful enough in terms of
                its time and cost.
              </p>
            </div>
          </div>
          {/* <div
            ref={carousel}
            className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {data.resources.map((resource, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item text-center relative w-64 h-64 snap-start"
                >
                  <a
                    href={resource.link}
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url(${resource.imageUrl || ""})`,
                    }}
                  >
                    <img
                      src={resource.imageUrl || ""}
                      alt={resource.title}
                      className="w-full aspect-square hidden"
                    />
                  </a>
                  <a
                    href={resource.link}
                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                  >
                    <h3 className="text-white py-6 px-3 mx-auto text-xl">
                      {resource.title}
                    </h3>
                  </a>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Carousel;
