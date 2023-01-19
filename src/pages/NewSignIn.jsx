import React from "react";
import { NavLink } from "react-router-dom";

function NewSignIn() {
  return (
    <>
      <div
        class="container mx-auto mt-16 "
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div class="flex justify-center brightness-50">
            <img src="/src/images/pexels-cottonbro-studio-5989933.jpg" />
          </div>

          <div class="sm:relative bg-black pt-5">
            <div className="mt-5">
              <img
                className="ml-20  md:ml-16 w-56 mb-10"
                src="/src/images/Wecruit Logo White.png"
              />
              <div className="w-full flex justify-center items-center flex-1 mt-20">
                <div className="w-1/2">
                  <h1 className="text-white text-2xl text-center font-bold">
                    Which service do you want to use today?
                  </h1>
                  <h3 className="text-white text-lg mt-1 font-normal text-center">
                    Choose service that you want to use today, and it will
                    redirect you to desired page.
                  </h3>

                  <div class="container mx-auto mt-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                      <button className="h-36 hover:bg-slate-500 hover:border-slate-400 border-2 border-gray-300 rounded-xl py-6 px-3 justify-center flex bg-black">
                        <a href="https://gchecker.wecruitpro.com/">
                          <div class="">
                            <img
                              className="w-10 mx-auto h-10"
                              src="/src/images/logo-checker-01.png"
                            />

                            <h1 className="mt-5 font-semibold text-base text-white">
                              AutoChecker
                            </h1>
                          </div>
                        </a>
                      </button>

                      <button className="h-36 hover:bg-slate-500 hover:border-slate-400 border-2 border-gray-300 rounded-xl py-6 px-3 justify-center flex bg-black">
                        <a href="http://talenthuntid.com/">
                          <div class="">
                            <img
                              className="w-10 mx-auto h-10"
                              src="/src/images/logo-headhunter.png"
                            />

                            <h1 className="mt-5 text-white font-semibold text-base">
                              Headhunter
                            </h1>
                          </div>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSignIn;
