"use client";
// import { Signin } from "./components/signin";
import Link from "next/link";

const qualifications = [
  "Matric / O Levels",
  "Intermediate / A Levels",
  "Undergraduate (Bachelor's)",
  "Graduate (Master's)",
  "Post-Graduate (PhD)",
];

export default function Home() {
  return (
    <main className="flex justify-center">
      <form className="container mx-4 my-10 w-full max-w-2xl rounded bg-white px-4 py-8 text-black shadow-lg md:mx-10 md:px-6">
        <h1 className="mb-8 text-center text-lg text-green-800 md:text-3xl">
          Student Course Registration Form{" "}
        </h1>
        {/* <div className=" "> */}
        {/* <div> */}
        <label className="text-md mb-6 text-gray-400 md:text-xl">
          {" "}
          Full Name*
        </label>
        <input
          type="text"
          className="border-rounded-lg text-md mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
          name="name"
          placeholder=" Name"
        />
        {/* </div> */}
        {/* <div> */}
        <label className="text-md mb-6 text-gray-400 md:text-xl">Email*</label>
        <input
          type="text"
          className="border-rounded-lg text-md mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
          name="email"
          placeholder=" Email"
        />
        {/* </div> */}
        {/* </div>./ */}
        {/* <div className="gap-6  md:flex"> */}
        {/* <div> */}
        <label className="text-md mb-6 text-gray-400 md:text-xl">CNIC *</label>
        <input
          type="cnic"
          className="border-rounded-lg text-md text-md mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
          name="cnic"
          placeholder=" CNIC"
        />
        {/* </div> */}
        {/* <div> */}
        <label className="text-md mb-6 text-gray-400 md:text-xl">
          Phone Number
        </label>
        <input
          type="number"
          className="border-rounded-lg text-md mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
          name="Number"
          placeholder=" Phone Number"
        />
        {/* </div> */}
        {/* </div> */}
        {/* <div> */}{" "}
        <label className="text-md mb-6 text-gray-400 md:text-xl">
          {" "}
          Github profile link
        </label>
        <input
          type="text"
          className="border-rounded-lg mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
          name="github"
          placeholder=" github link"
        />
        {/* </div> */}
        {/* <div className="gap-6  md:flex"> */}
        {/* <div> */}
        <label className=" text-md mb-6 text-gray-400 md:text-xl">
          Enter City*
        </label>
        <input
          type="text"
          className="border-rounded-lg mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
          name="city"
          placeholder=" City"
        />
        {/* </div> */}
        {/* <div className="mt-12"> */}
        <label className="text-md mb-12 text-gray-400 md:text-xl">
          {" "}
          Add Work Experience
        </label>
        {/* <h1 className="text-2xl">
                Add <button>+</button>
              </h1> */}
        {/* </div> */}
        {/* </div> */}
        <div className="gap-12  md:flex">
          <div>
            <label className="text-md mb-8 text-gray-400 md:text-xl">
              {" "}
              Gender*
            </label>
            <div className="bdr flex gap-20 text-xl">
              <div className="bdr2 flex items-center  ">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  Female
                </label>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <label
          htmlFor="qualification"
          className=" text-md mb-6 text-gray-400 md:text-xl"
        >
          Highest Qualification *
        </label>
        <select
          id="qualification"
          name="qualification"
          className="mb-8 block w-full border border-gray-400 bg-gray-200 p-3  md:text-lg"
          required
        >
          {qualifications.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="mb-8 w-36 justify-center rounded-full border border-gray-700 bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-52 md:text-xl"
          >
            Apply Now
          </button>
        </div>
      </form>
      {/* </div> */}
    </main>
  );
}
