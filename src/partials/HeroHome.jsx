import { React } from "react";

function HeroHome() {
  return (
    <>
      <section className="relative" id="section1">
        <img
          src="/src/images/Untitled3.png"
          width={400}
          className="absolute -z-50"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        />

        <div className="max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-52  md:pb-20">
            <div
              className="text-center justify-end md:ml-52 ml-0 flex pb-12 md:pb-16 text-black font-medium"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <p>
                Enterprise Resource Planning (ERP) systems have become a crucial{" "}
                <br /> component for modern businesses seeking to optimize their
                operations. <br />
              </p>
            </div>
            <div
              className="text-center italic justify-start md:ml-52 ml-0 flex pb-12 md:pb-16 text-black "
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <p>
                "Embrace ERP as the engine that drives your business forward"
              </p>
            </div>
            <div
              className="justify-start md:ml-28 ml-0 flex pb-64  md:pb-16 "
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <img src="/src/images/undraw_Metrics_re_6g90.png" width={380} />
            </div>
            <div
              className="right-0 bottom-0 absolute pb-12 md:pb-16 "
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <img src="/src/images/Untitled2.png" width={700} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-0 md:mx-36 pt-20 md:pt-20 " id="section2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-10">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Crafting Engaging Content to Optimize Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#176cfd] to-[#bb92e4]">
                  ERP
                </span>{" "}
                Experience
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Our ERP (Enterprise Resource Planning) web platform is a
                  powerful tool designed to streamline and optimize your
                  business operations.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="btn text-white bg-[#2ec4f5] hover:bg-[#11b3e9] w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                    >
                      Start free trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-0 md:mx-36 pt-20 md:pt-20 " id="section3">
        <div className="bg-white-100 ">
          <div className="container mx-auto">
            <h2
              className="text-4xl md:text-5xl text-center font-extrabold mb-10"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              Pricing
            </h2>
            <div className="flex flex-wrap justify-center">
              {/* Tier 1 */}
              <div
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 "
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="bg-white rounded-lg p-6 shadow-2xl h-full flex items-center flex-col">
                  <h3 className="text-xl font-bold mb-4">TIER 1 / Basic</h3>
                  <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-3xl font-extrabold">Rp. 79.000</span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Mencatat barang masuk</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Mencatat barang keluar</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Mencatat hasil keuntungan</span>
                    </li>
                  </ul>

                  <div className="flex-grow"></div>

                  <button className="bg-[#2ec4f5] hover:bg-[#11b3e9] text-white rounded-lg px-4 py-2 mt-4 w-full">
                    Choose Plan
                  </button>
                </div>
              </div>

              {/* Tier 2 */}
              <div
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 "
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="bg-white rounded-lg p-6 shadow-2xl h-full flex items-center flex-col">
                  <h3 className="text-xl font-bold mb-4">TIER 2 / Business</h3>
                  <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-3xl font-extrabold">Rp. 99.000</span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Mencatat barang masuk dan keluar</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Mencatat Keuntungan</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Dapat menganalisa hasil penjualan dengan CHART
                      </span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Support 7x24 Jam</span>
                    </li>
                  </ul>

                  <div className="flex-grow"></div>

                  <button className="bg-[#2ec4f5] hover:bg-[#11b3e9] text-white rounded-lg px-4 py-2 mt-4 w-full">
                    Choose Plan
                  </button>
                </div>
              </div>

              {/* Tier 3 */}

              <div
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 "
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="bg-white rounded-lg p-6 shadow-2xl h-full flex items-center flex-col">
                  <h3 className="text-xl font-bold mb-4">
                    TIER 3 / Entrepreneur
                  </h3>
                  <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-3xl font-extrabold">
                      Rp. 149.000
                    </span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                  <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Mencatat barang masuk dan keluar</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Mencatat Keuntungan</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Dapat menganalisa hasil penjualan dengan CHART
                      </span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Support 7x24 Jam</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Export data ke Excel</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>AI Prediksi penghasilan</span>
                    </li>
                  </ul>

                  <div className="flex-grow"></div>

                  <button className="bg-[#2ec4f5] hover:bg-[#11b3e9] text-white rounded-lg px-4 py-2 mt-4 w-full">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative mx-0 md:mx-36 pt-20 md:pt-20  "
        id="section4"
      >
        <div class="container mx-auto ">
          <h2
            className="text-4xl md:text-5xl text-center font-extrabold mb-10"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            Contact Us
          </h2>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 "
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div class=" px-10 ">
              <div className="font-bold text-[30px]">
                <p>Having Trouble Finding Information?</p>{" "}
              </div>
              <p className="text-[#414141] font-normal text-lg">
                Thank you for visiting our website. If you have any questions or
                need further information about our ERP services and solutions,
                please get in touch with us using one of the following methods:
              </p>

              <img
                className="mt-5"
                src="/src/images/undraw_Contact_us_re_4qqt.png"
              />
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
                    Jl. Buncit Raya No.52, RT.7/RW.5, Kalibata, Kec. Pancoran,
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740
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
                    0823-3434-3444 <br />
                    0895-3774-8998
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
                    afifalamin320@gmail.com
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-bold text-xl mb-3">Japan Office</p>
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
                    Jepang, 〒101-0053 Tokyo, Chiyoda City, Kanda Mitoshirocho,
                    3−2 事務所：7階 神田アベビル 4?8階
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
                    +81352175577
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
                    afifalamin320@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:relative p-10">
              <div className="w-full h-full drop-shadow-2xl p-10 rounded-lg bg-white">
                <div className="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-xl font-bold text-gray-900 dark:text-black"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-[#2ec4f5] focus:border-[#2ec4f5] block w-full p-2.5  "
                    placeholder="First Name"
                    required
                  />
                </div>
                <form>
                  <div className="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-xl font-bold text-gray-900 dark:text-black"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-[#2ec4f5] focus:border-[#2ec4f5] block w-full p-2.5  "
                      placeholder="Email Address ex. email@mail.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-xl font-bold text-gray-900 dark:text-black"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      className=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-[#2ec4f5] focus:border-[#2ec4f5] block w-full p-2.5  "
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
                      type="number"
                      className="border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-[#2ec4f5] focus:border-[#2ec4f5] block w-full p-2.5  "
                      placeholder="(+62) 812 1234 4567 "
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label class="block mb-2  text-xl font-bold text-gray-900 dark:text-black">
                      Message
                    </label>
                    <textarea
                      type="text"
                      class=" border-2 border-[#B7B7B7] dark:bg-white text-sm rounded-lg focus:ring-[#2ec4f5] focus:border-[#2ec4f5] block w-full p-2.5  "
                      placeholder="Your message ..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    class="text-white bg-[#2ec4f5] hover:bg-[#11b3e9]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center"
                  >
                    Send Mesaage
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHome;
