import React from "react";

const Donate = () => {
  return (
    <>
      {/* Donation section */}

      <div className="flex items-center overflow-hidden bg-white py-20">
        <div className="container  flex px-6 py-16 mx-auto">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="lg:col-start-2 md:pl-20">
              <h1 className="w-full mr-8 text-3xl font-extrabold leading-9 md:w-2/3">
                Can I contribute to the solidarity fund?
              </h1>
              <br></br>
              <h3>
                There are different ways you can support the solidarity fund.
                The primary financial way is via donations to the solidarity
                fund account. The account is hosted by FNB-South Africa. The
                decision to host in South Africa is based on the high levels of
                uncertainty in eSwatini.
              </h3>
            </div>
            <div className=" mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
              <img
                src="/donation_details.jpg"
                alt="donation details"
                className=" w-auto mx-auto shadow-lg donation-pic"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center overflow-hidden bg-white py-10">
        <div className="container flex px-4 py-8 mx-auto">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-1 md:pr-12 groceries_text">
              <h1 className="w-full mb-4 text-3xl font-extrabold leading-9 md:w-5/6">
                Where can I safely get the account details of the eSwatini
                Solidarity Fund?
              </h1>
              <h3 className="text-base">
                The account details have been released via social media
                platforms, Interested persons can visit the eSwatini Solidarity
                Fund media pages social media pages for more detailed
                information: Twitter: @eSwatiniSolida1
              </h3>
            </div>
            <div className="mt-8 lg:mt-0 lg:col-start-2">
              <img
                src="/grocery_donations.jpeg"
                alt="donation details"
                className="w-full max-w-md mx-auto shadow-lg donation-pic"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Paypal Details</h2>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <img
            src="/paypal-svgrepo-com.svg"
            alt="PayPal Logo"
            className="w-6 h-6"
          />
          <span className="text-blue-600">finance@eswatinisolidarity.com</span>
        </div>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      {/* Footer Section */}

      <footer className="px-3 py-8 text-gray-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-2 dark:text-gray-200">
        <div className="flex flex-col">
          <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
          <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
            <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
              <a
                aria-current="page"
                href="#"
                className="hover:text-gray-700 dark:hover:text-white"
              >
                Home
              </a>
              <a
                aria-current="page"
                href="#"
                className="hover:text-gray-700 dark:hover:text-white"
              >
                Contact Us
              </a>
              <a
                aria-current="page"
                href="#"
                className="hover:text-gray-700 dark:hover:text-white"
              >
                Blog
              </a>
            </nav>
            <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
            <div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
              <a
                className="hover:text-primary-gray-20"
                href="https://github.com/Charlie85270/tail-kit"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
                </svg>
              </a>
              <a className="ml-4 hover:text-primary-gray-20" href="#">
                <span className="sr-only">Facebook</span>
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
                </svg>
              </a>
            </div>
            <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
            <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
              <span className="">© 2024</span>
              <span className="mt-7 md:mt-1">
                Created by
                <a
                  className="underline hover:text-primary-gray-20"
                  href="https://www.sysinfo.co.za"
                >
                  SYSINFO
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Donate;
