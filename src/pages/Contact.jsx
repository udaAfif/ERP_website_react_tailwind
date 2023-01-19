import React, { useState } from "react";

function Contact() {
  return (
    <>
      <div
        class="container mx-auto mt-16 "
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div class=" p-10 ">
            <div className="font-bold text-[48px]">
              <p>
                Having doubts? <br />
                We’re ready for you.
              </p>{" "}
            </div>
            <p className="text-[#414141] font-normal text-xl">
              If you have a question, please don't hesitate to contact us. We
              would be more than happy to answer any questions you may have.
            </p>
            <div className="mt-10 font-bold text-2xl">
              <p>Our Offices</p>
            </div>
            <img className="mt-5" src="/src/images/Office Photo.png" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="mt-5 ">
                <p className="font-bold text-xl mb-3">Jakarta Office</p>
                <div className="flex text-sm font-normal ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-20 h-12 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Graha Inti Fauzi, Jl. Hj. Tutty Alawiyah No.22, RW.7, Pejaten
                  Barat, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota
                  Jakarta 12510
                </div>
                <div className="flex text-sm font-normal mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  0812-9714-3247
                </div>
                <div className="flex text-sm font-normal mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  0812-9714-3247
                </div>
              </div>

              <div className="mt-5">
                <p className="font-bold text-xl mb-3">Korea Office</p>
                <div className="flex text-sm font-normal ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-[60px] h-12 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  15F 1504, 8, Seongnam-daero 331 beon-gil, Bundang-gu,
                  Seongnam-si, Gyeonggi-do, Republic of Korea
                </div>
                <div className="flex text-sm font-normal mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  0812-9714-3247
                </div>
                <div className="flex text-sm font-normal mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  0812-9714-3247
                </div>
              </div>
            </div>
          </div>

          <div class="sm:relative p-10">
            <div className="w-full h-full drop-shadow-2xl p-10 rounded-lg bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-xl font-bold text-gray-900 dark:text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-[#B7B7B7]  dark:placeholder-[#B7B7B7] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-xl font-bold text-gray-900 dark:text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-[#B7B7B7]  dark:placeholder-[#B7B7B7] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <form>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-xl font-bold text-gray-900 dark:text-black"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-[#B7B7B7]  dark:placeholder-[#B7B7B7] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email Address ex. email@mail.com"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-xl font-bold text-gray-900 dark:text-black"
                  >
                    Company Name
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-[#B7B7B7]  dark:placeholder-[#B7B7B7] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Company name"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-xl font-bold text-gray-900 dark:text-black"
                  >
                    Phone Number
                  </label>
                  <input
                    type="email"
                    id="email"
                    class=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-[#B7B7B7]  dark:placeholder-[#B7B7B7] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="(+62) 812 1234 4567"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2  text-xl font-bold text-gray-900 dark:text-black"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="email"
                    class=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-36 block w-full px-2.5   dark:border-[#B7B7B7]  dark:placeholder-[#B7B7B7] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message ..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  class="text-white bg-gradient-to-r w-full from-[#5F7CDD] to-[#5BA4E8]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center    dark:focus:ring-blue-800"
                >
                  Send Mesaage
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
