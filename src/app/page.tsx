import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero section */}

      <div className=" flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container  flex px-6 py-16 mx-auto ">
          <div className=" flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              Eswatini
              <span className="text-5xl sm:text-7xl">Solidarity</span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              We are a volunteer-based international movement of all
              sympathisers of the democratic movement in eSwatini that collects
              all forms of financial, material and otherwise support to help
              with humanitarian and relief efforts brought by the political
              turmoil in eSwatini.
            </p>
            <div className="flex mt-8">
              <Link
                href="/blog"
                className="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-400"
              >
                Read More
              </Link>
              <Link
                href="/donate"
                className="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md"
              >
                Donate
              </Link>
            </div>
          </div>
          <div className=" hidden sm:block sm:w-1/3 lg:w-3/5">
            <img
              src="/esf_log_rm_bg.png"
              className="max-w-xs m-auto md:max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* Vision section */}

      <div className="flex items-center overflow-hidden bg-white py-20">
        <div className="container  flex px-6 py-16 mx-auto">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="lg:col-start-2 md:pl-20">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:leading-9">
                OUR VISION
              </h4>
              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="w-6 h-6"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1792 1184v192q0 13-9.5 22.5t-22.5 9.5h-1376v192q0 13-9.5 22.5t-22.5 9.5q-12 0-24-10l-319-320q-9-9-9-22 0-14 9-23l320-320q9-9 23-9 13 0 22.5 9.5t9.5 22.5v192h1376q13 0 22.5 9.5t9.5 22.5zm0-544q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-1376q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1376v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-bold leading-6 text-black ">
                        Relief Efforts
                      </h5>
                      <p className="mt-2 text-base leading-6 text-black">
                        To help with humanitarian and relief efforts brought by
                        the political turmoil in eSwatini.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="w-6 h-6"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm448-288h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40zm-72 320h160c17.7 0 32-14.3 32-32V320H288v160z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-bold leading-6 text-black">
                        Raise Funds
                      </h5>
                      <p className="mt-2 text-base leading-6 text-black">
                        Raise funds through donations and the sale of
                        merchandise in order to help the Swazi people, with
                        priorities focused on medical supplies, coffins and
                        transportation.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="w-6 h-6"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="fa-globe"
                            d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zm274 521q-2 1-9.5 9.5t-13.5 9.5q2 0 4.5-5t5-11 3.5-7q6-7 22-15 14-6 52-12 34-8 51 11-2-2 9.5-13t14.5-12q3-2 15-4.5t15-7.5l2-22q-12 1-17.5-7t-6.5-21q0 2-6 8 0-7-4.5-8t-11.5 1-9 1q-10-3-15-7.5t-8-16.5-4-15q-2-5-9.5-10.5t-9.5-10.5q-1-2-2.5-5.5t-3-6.5-4-5.5-5.5-2.5-7 5-7.5 10-4.5 5q-3-2-6-1.5t-4.5 1-4.5 3-5 3.5q-3 2-8.5 3t-8.5 2q15-5-1-11-10-4-16-3 9-4 7.5-12t-8.5-14h5q-1-4-8.5-8.5t-17.5-8.5-13-6q-8-5-34-9.5t-33-.5q-5 6-4.5 10.5t4 14 3.5 12.5q1 6-5.5 13t-6.5 12q0 7 14 15.5t10 21.5q-3 8-16 16t-16 12q-5 8-1.5 18.5t10.5 16.5q2 2 1.5 4t-3.5 4.5-5.5 4-6.5 3.5l-3 2q-11 5-20.5-6t-13.5-26q-7-25-16-30-23-8-29 1-5-13-41-26-25-9-58-4 6-1 0-15-7-15-19-12 3-6 4-17.5t1-13.5q3-13 12-23 1-1 7-8.5t9.5-13.5.5-6q35 4 50-11 5-5 11.5-17t10.5-17q9-6 14-5.5t14.5 5.5 14.5 5q14 1 15.5-11t-7.5-20q12 1 3-17-5-7-8-9-12-4-27 5-8 4 2 8-1-1-9.5 10.5t-16.5 17.5-16-5q-1-1-5.5-13.5t-9.5-13.5q-8 0-16 15 3-8-11-15t-24-8q19-12-8-27-7-4-20.5-5t-19.5 4q-5 7-5.5 11.5t5 8 10.5 5.5 11.5 4 8.5 3q14 10 8 14-2 1-8.5 3.5t-11.5 4.5-6 4q-3 4 0 14t-2 14q-5-5-9-17.5t-7-16.5q7 9-25 6l-10-1q-4 0-16 2t-20.5 1-13.5-8q-4-8 0-20 1-4 4-2-4-3-11-9.5t-10-8.5q-46 15-94 41 6 1 12-1 5-2 13-6.5t10-5.5q34-14 42-7l5-5q14 16 20 25-7-4-30-1-20 6-22 12 7 12 5 18-4-3-11.5-10t-14.5-11-15-5q-16 0-22 1-146 80-235 222 7 7 12 8 4 1 5 9t2.5 11 11.5-3q9 8 3 19 1-1 44 27 19 17 21 21 3 11-10 18-1-2-9-9t-9-4q-3 5 .5 18.5t10.5 12.5q-7 0-9.5 16t-2.5 35.5-1 23.5l2 1q-3 12 5.5 34.5t21.5 19.5q-13 3 20 43 6 8 8 9 3 2 12 7.5t15 10 10 10.5q4 5 10 22.5t14 23.5q-2 6 9.5 20t10.5 23q-1 0-2.5 1t-2.5 1q3 7 15.5 14t15.5 13q1 3 2 10t3 11 8 2q2-20-24-62-15-25-17-29-3-5-5.5-15.5t-4.5-14.5q2 0 6 1.5t8.5 3.5 7.5 4 2 3q-3 7 2 17.5t12 18.5 17 19 12 13q6 6 14 19.5t0 13.5q9 0 20 10t17 20q5 8 8 26t5 24q2 7 8.5 13.5t12.5 9.5l16 8 13 7q5 2 18.5 10.5t21.5 11.5q10 4 16 4t14.5-2.5 13.5-3.5q15-2 29 15t21 21q36 19 55 11-2 1 .5 7.5t8 15.5 9 14.5 5.5 8.5q5 6 18 15t18 15q6-4 7-9-3 8 7 20t18 10q14-3 14-32-31 15-49-18 0-1-2.5-5.5t-4-8.5-2.5-8.5 0-7.5 5-3q9 0 10-3.5t-2-12.5-4-13q-1-8-11-20t-12-15q-5 9-16 8t-16-9q0 1-1.5 5.5t-1.5 6.5q-13 0-15-1 1-3 2.5-17.5t3.5-22.5q1-4 5.5-12t7.5-14.5 4-12.5-4.5-9.5-17.5-2.5q-19 1-26 20-1 3-3 10.5t-5 11.5-9 7q-7 3-24 2t-24-5q-13-8-22.5-29t-9.5-37q0-10 2.5-26.5t3-25-5.5-24.5q3-2 9-9.5t10-10.5q2-1 4.5-1.5t4.5 0 4-1.5 3-6q-1-1-4-3-3-3-4-3 7 3 28.5-1.5t27.5 1.5q15 11 22-2 0-1-2.5-9.5t-.5-13.5q5 27 29 9 3 3 15.5 5t17.5 5q3 2 7 5.5t5.5 4.5 5-.5 8.5-6.5q10 14 12 24 11 40 19 44 7 3 11 2t4.5-9.5 0-14-1.5-12.5l-1-8v-18l-1-8q-15-3-18.5-12t1.5-18.5 15-18.5q1-1 8-3.5t15.5-6.5 12.5-8q21-19 15-35 7 0 11-9-1 0-5-3t-7.5-5-4.5-2q9-5 2-16 5-3 7.5-11t7.5-10q9 12 21 2 7-8 1-16 5-7 20.5-10.5t18.5-9.5q7 2 8-2t1-12 3-12q4-5 15-9t13-5l17-11q3-4 0-4 18 2 31-11 10-11-6-20 3-6-3-9.5t-15-5.5q3-1 11.5-.5t10.5-1.5q15-10-7-16-17-5-43 12zm-163 877q206-36 351-189-3-3-12.5-4.5t-12.5-3.5q-18-7-24-8 1-7-2.5-13t-8-9-12.5-8-11-7q-2-2-7-6t-7-5.5-7.5-4.5-8.5-2-10 1l-3 1q-3 1-5.5 2.5t-5.5 3-4 3 0 2.5q-21-17-36-22-5-1-11-5.5t-10.5-7-10-1.5-11.5 7q-5 5-6 15t-2 13q-7-5 0-17.5t2-18.5q-3-6-10.5-4.5t-12 4.5-11.5 8.5-9 6.5-8.5 5.5-8.5 7.5q-3 4-6 12t-5 11q-2-4-11.5-6.5t-9.5-5.5q2 10 4 35t5 38q7 31-12 48-27 25-29 40-4 22 12 26 0 7-8 20.5t-7 21.5q0 6 2 16z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-bold leading-6 text-black">
                        Volunteer Recruitment
                      </h5>
                      <p className="mt-2 text-base leading-6 text-black">
                        Volunteer recruitment is ongoing, please contact us via
                        the WhatsApp and email details provided in the contact
                        us section.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
              <img
                src="/eff_border.jpg"
                alt="illustration"
                className=" w-auto mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}

      <div className="px-4 py-20 bg-lightblue">
        <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
          <h2 className="w-full mr-8 text-3xl font-extrabold leading-9 md:w-1/3">
            Frequently-asked questions
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                What is the Eswatini Solidarity?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                This is a volunteer-based international movement of all
                sympathisers of the democratic movement in eSwatini that
                collects all forms of financial, material and otherwise support
                to help with humanitarian and relief efforts brought by the
                political turmoil in eSwatini. It is a democratic, non- sexist,
                non-racial and transparent volunteer organisation whose goal is
                to help activists and ordinary Swazis who are victims of state
                brutality and repression.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                How can I contribute my time and manpower?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                You can available yourself as a volunteer to do some of the many
                tasks and projects that the fund has identified. Volunteer
                recruitment is ongoing, please contact us via the WhatsApp and
                email details provided in the contact us section below.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                How transparent is the handling of the solidarity fund?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                A transparent policy for the use of money and resources donated
                to the fund is in the process of being finalized.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                How accountable is the leadership of the fund?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                The fund is managed by a volunteer executive board that reports
                to a group of patrons. Leadership to the board is democratic and
                officials are elected during an AGM to work for a period of 1
                year.
              </p>
            </dd>
          </dl>
        </div>
      </div>

      {/* Donation section */}

      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Want to Donate ?</span>
            <span className="block text-indigo-500">
              Contribute to the cause.
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-white">
            We are a democratic, non- sexist, non-racial and transparent
            volunteer organisation whose goal is to help activists and ordinary
            Swazis who are victims of state brutality and repression.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}

      <div className="container align-center mx-auto py-20">
        <div className="p-4">
          <p className="text-3xl font-bold text-center text-gray-800">
            STEERING COMMITTEE
          </p>
          <p className="mb-32 text-xl font-normal text-center text-gray-500">
            Meet the team behind Eswatini Solidarity
          </p>
          <div className="flex flex-col items-center space-y-24 md:space-y-0 md:flex-row justify-center evenly">
            <div className="relative p-4">
              <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/mancoba_new2.jpeg"
                    className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    Manqoba Nxumalo
                  </p>
                  <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    He is a student at the University of Oslo. He is a human
                    rights activist from Fairview, Manzin
                  </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                  <a href="https://www.facebook.com/manqoba.chavezjuniornxumalo">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/ChavezJunior6">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative p-4">
              <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/nothando_khumalo.jpg"
                    className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    Nothando Khumalo
                  </p>
                  <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    She is a nascent Swazi humanitarian and civil engineer
                    currently based in Pretoria, South Africa. She hails from
                    Mgobodzi, Hhohho.
                  </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative p-4">
              <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/simlindzile_masinga.jpg"
                    className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    Simlindzile Masinga
                  </p>
                  <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Simlindzile is a student at the University of Eswatini, a
                    feminist and a human rights activist. She is from Nhlangano,
                    Shiselweni.
                  </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/MthunzySimly">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative p-4">
              <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/tibusiso_mdluli.jpg"
                    className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    Tibusiso Mdluli
                  </p>
                  <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Tibusiso is a human rights activist and a Social Science
                    student at the University of Eswatini. She is from
                    Nhlambeni, Manzini
                  </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-24 md:space-y-0 md:flex-row justify-center evenly py-20">
            <div className="relative p-4">
              <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/gugulethu_makhanya.jpg"
                    className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    Gugulethu Makhanya
                  </p>
                  <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Gugu is an educator currently based in Simunye, eSwatini.
                    She is a gender activist and social justice advocate.
                  </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                  <a href="https://www.facebook.com/gugulethu.l.ntuli">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/MsGugstar">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative p-4">
              <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/thabo_dlamini.jpeg"
                    className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    Thabo Dlamini
                  </p>
                  <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Thabo is a Swazi student based in Norway. He is a human
                    rights activist who hails from Bhunya.
                  </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative p-4">
              <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/mandla_dlamini.jpg"
                    className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    Mandla Dlamini
                  </p>
                  <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Is a Swazi researcher currently based in Pretoria. A human
                    rights activist and democracy advocate, from Ngwane Park
                    Manzini, Swaziland.
                  </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative p-4">
              <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/stcky.jpeg"
                    className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                  />
                </a>
              </div>
              <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    Thembelihle Dlamini
                  </p>
                  <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Thembelihle is a public health practitioner and social
                    justice activist. He hails from Dvokolwako in the Manzini
                    region but is currently based in Tromso, Norway.
                  </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}

      <div className="align-center mx-auto">
        <div className="w-full p-12 bg-white dark:bg-gray-800">
          <div className="flex items-end justify-center mb-12 header">
            <div className="title flex justify-center">
              <p className="mb-4 text-4xl font-bold text-white">
                Latest articles
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <a href="#" className="block w-full h-full">
                <img
                  alt="blog photo"
                  src="https://eswatinisolidarity.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-21.23.26.jpeg"
                  className="object-cover w-full max-h-40"
                />
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-blue-500 text-md">Video</p>
                  <p className="mb-2 text-xl font-medium text-black">
                    Community Updates
                  </p>
                  <p className="font-light text-black text-md">
                    Work at home, remote, is the new age of the job, every
                    person can work at home....
                  </p>
                  <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src="/mancoba_new2.jpeg"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className="text-black">Manqoba</p>
                      <p className="text-gray-800 dark:text-gray-800">
                        20 mars 2023
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <a href="#" className="block w-full h-full">
                <img
                  alt="blog photo"
                  src="https://eswatinisolidarity.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-21.23.26.jpeg"
                  className="object-cover w-full max-h-40"
                />
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-blue-500 text-md">Video</p>
                  <p className="mb-2 text-xl font-medium text-black">
                    Work at home
                  </p>
                  <p className="font-light text-black text-md">
                    Work at home, remote, is the new age of the job, every
                    person can work at home....
                  </p>
                  <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src="/mancoba_new2.jpeg"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className="text-black">Manqoba</p>
                      <p className="text-gray-800 dark:text-gray-800">
                        20 mars 2023
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <a href="#" className="block w-full h-full">
                <img
                  alt="blog photo"
                  src="https://eswatinisolidarity.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-29-at-21.23.26.jpeg"
                  className="object-cover w-full max-h-40"
                />
                <div className="w-full p-4 bg-white">
                  <p className="font-medium text-blue-500 text-md">Video</p>
                  <p className="mb-2 text-xl font-medium text-black">
                    Work at home
                  </p>
                  <p className="font-light text-black text-md">
                    Work at home, remote, is the new age of the job, every
                    person can work at home....
                  </p>
                  <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src="/mancoba_new2.jpeg"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className="text-black">Manqoba</p>
                      <p className="text-gray-800 dark:text-gray-800">
                        20 mars 2023
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

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
}
