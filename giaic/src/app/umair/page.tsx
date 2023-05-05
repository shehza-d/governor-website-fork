"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
// import { Signin } from "./components/signin";
import Link from "next/link";
import { useState } from "react";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [nav, setNav] = useState(false);
  const Submit = () => setNav(!nav);
  const handleClick = () => setNav(!nav);
  return (
    <div className="bg-grey-lighter flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-2">
        <div className="mx-w-full w-full   rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-lg text-green-800 md:text-3xl">
            Student Course Registeration form{" "}
          </h1>

          <div className=" ">
            <div>
              <label className="text-md mb-6 text-gray-400 md:text-xl">
                {" "}
                Full Name*
              </label>
              <input
                type="text"
                className="border-rounded-lg mb-4 mb-8 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
                name="name"
                placeholder=" Name"
              />
            </div>

            <div>
              <label className="text-md mb-6 text-gray-400 md:text-xl">
                Email*
              </label>
              <input
                type="text"
                className="border-rounded-lg mb-4 mb-8 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
                name="email"
                placeholder=" Email"
              />
            </div>
          </div>
          <div className="space-beteen gap-6  md:flex">
            <div>
              <label className="text-md mb-6 text-gray-400 md:text-xl">
                CNIC
              </label>
              <input
                type="cnic"
                className="border-rounded-lg mb-4 mb-8 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
                name="cnic"
                placeholder=" CNIC"
              />
            </div>
            <div>
              <label className="text-md mb-6 text-gray-400 md:text-xl">
                Phone Number
              </label>
              <input
                type="number"
                className="border-rounded-lg mb-4 mb-8 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
                name="Number"
                placeholder=" Phone Number"
              />
            </div>
          </div>
          <div>
            {" "}
            <label className="text-md mb-6 text-gray-400 md:text-xl">
              {" "}
              Enter Github Link
            </label>
            <input
              type="text"
              className="border-rounded-lg mb-4 mb-8 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
              name="github"
              placeholder=" github link"
            />
          </div>
          <div className="space-beteen gap-6  md:flex">
            <div>
              <label className="text-md mb-6 text-gray-400 md:text-xl">
                Enter City*
              </label>
              <input
                type="text"
                className="border-rounded-lg mb-4 mb-8 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
                name="city"
                placeholder=" City"
              />
            </div>
            <div className="">
              <label className="text-md mb-12 text-gray-400 md:text-xl">
                {" "}
                Add Experence
              </label>

              <div>
                <Popups />
              </div>
            </div>
          </div>
          <div className="space-beteen gap-12  md:flex">
            <div>
              <label className="text-md mb-8 text-gray-400 md:text-xl">
                {" "}
                Gender*
              </label>
              <div className="flex gap-20 text-xl">
                <div className="flex items-center  ">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300 md:text-2xl"
                  >
                    {" "}
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300 md:text-2xl"
                  >
                    {" "}
                    female
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="text-md mb-8 text-gray-400 md:text-xl">
                {" "}
                Qualification{" "}
              </label>
              <div>
                <button
                  onClick={Submit}
                  id="dropdownDividerButton"
                  data-dropdown-toggle="dropdownDivider"
                  className="inline-flex   items-center rounded-lg bg-green-800 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:text-xl"
                  type="button"
                >
                  Qualification{" "}
                  <svg
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownDivider"
                  className={
                    !nav
                      ? "hidden"
                      : "z-10   w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                  }
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDividerButton"
                  >
                    <li>
                      <Link
                        onClick={() => handleClick()}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Matric/O Levels
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Intermediate(A Levels)
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleClick()}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Undergraduate(Bachelors)
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleClick()}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Graduate(Master)
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleClick()}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Post-Graduate(Phd)
                      </Link>
                    </li>
                  </ul>
                  <div className="py-2">
                    <Link
                      onClick={() => handleClick()}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Separated link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" align-center center item-center mx-auto mb-8 mt-12 flex w-32 content-center  justify-center rounded rounded-full border border-gray-700  px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-green-700 md:w-52 md:text-xl "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export function Popups() {
  const [nv, setNv] = useState(false);
  const Submited = () => setNv(!nv);

  const [open, setOpen] = useState(false);

  const hndleClick = () => setOpen(!open);
  return (
    <div>
      <button
        onClick={Submited}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        type="button"
        className="mb-2 mr-2 rounded-lg bg-green-700 px-5 
 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:text-lg"
      >
        Add +
      </button>
      <div
        id="authentication-modal"
        className={
          !nv
            ? "hidden"
            : "fixed left-0 right-0 top-0 z-50  mx-auto h-[calc(100%-1rem)] max-h-full w-full max-w-xl items-center overflow-y-auto overflow-x-hidden p-4  md:inset-0"
        }
      >
        <div className="relative max-h-full w-full max-w-md">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <button
              onClick={Submited!}
              type="button"
              className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Experience
              </h3>
              <form className="space-y-6" action="#">
                <div className="gap-6 md:flex ">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="CompanyName"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Industery
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="company name"
                      required
                    />
                  </div>
                </div>

                <div className="gap-14 md:flex ">
                  <div>
                    <label
                      htmlFor="Start date"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Start date
                    </label>
                    <input
                      type="date"
                      name="Start date"
                      id="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="Start date"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="end date"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      End date
                    </label>
                    <input
                      type="date"
                      name="companyName"
                      id="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="End date"
                      required
                    />
                  </div>
                </div>
                <div className="gap-12 md:flex    ">
                  <div>
                    <label className="text-md mb-4 flex text-gray-400 md:text-xl">
                      {" "}
                      Currently Working
                    </label>
                    <div className="flex    gap-12 text-xl">
                      <div className="flex     items-center  ">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300 md:text-lg"
                        >
                          {" "}
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 md:text-lg"
                        >
                          {" "}
                          No
                        </label>
                      </div>
                    </div>{" "}
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={hndleClick}
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="inline-flex   items-center rounded-lg bg-green-800 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:text-sm"
                      type="button"
                    >
                      Employment{" "}
                      <svg
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    <div
                      id="employmentType:"
                      className={
                        !open
                          ? "hidden"
                          : "z-10   w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                      }
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDividerButton"
                      >
                        <li>
                          <Link
                            onClick={() => hndleClick()}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Full-time
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => hndleClick()}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Intermediate(A Levels)
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => hndleClick()}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Part-time
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => hndleClick()}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Self-employed
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => hndleClick()}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Freelancer
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => hndleClick()}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Contract
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => hndleClick()}
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Internship
                          </Link>
                        </li>
                      </ul>
                      <div className="py-2">
                        <Link
                          onClick={() => hndleClick()}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Separated link
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mx-auto w-52 justify-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
