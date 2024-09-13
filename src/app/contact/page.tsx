import React from "react";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}

      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <p className="text-3xl font-bold text-center text-gray-800 p-8">
            CONTACT US
          </p>
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
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

export default Contact;
