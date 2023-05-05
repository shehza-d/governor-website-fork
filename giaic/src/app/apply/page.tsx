"use client";
import { useForm } from "react-hook-form";
import { IApplyForm } from "@/types/interfaces";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const qualifications = [
  "Matric / O Levels",
  "Intermediate / A Levels",
  "Undergraduate (Bachelor's)",
  "Graduate (Master's)",
  "Post-Graduate (PhD)",
];

const defaultValues: IApplyForm = {
  fullName: "Shehzad",
  CNIC: "4220144338283478",
  phoneNumber: "03033111499",
  city: "karachi",
  email: "shehzad.dev@pm.me",
  gender: "male",
  highestQualification: "Intermediate / A Levels",
  github: "string",
  linkedin: "string",
  discord: "string",
  experiences: [],
  programmingLanguages: ["js", "ts"],
  programmingProjects: [
    {
      title: "string",
      repoLink: "string",
      hostedLink: "string",
      description: "string",
    },
    {
      title: "string",
      repoLink: "string",
      hostedLink: "string",
      description: "string",
    },
  ],
};

const schema = yup
  .object({
    fullName: yup.string().required("Full Name is required").min(3).max(40),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .min(10, "Please enter more then 10 characters ")
      .max(15, "Please enter within 15 characters "),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required")
      .min(3)
      .max(45, "Please enter within 25 characters"),
    CNIC: yup.string().required("CNIC Number is required").min(10).max(50),
    // {
    // age: yup
    //   .number("Enter age in number")
    //   .required("Age is required")
    //   .min(13, "User can't be younger then 13")
    //   .max(35, "User can't be older then 35")
    //   .positive("Age can't be negative")
    //   .integer("Enter age without decimal"),
    // address: yup
    //   .string("Enter your address")
    //   .required("address is required")
    //   .min(3, "Please enter more then 3 characters ")
    //   .max(40, "Please enter within 40 characters "),

    // name: yup
    //   .string("Enter your name")
    //   .required("Name is required")
    //   .min(4, "Please enter more then 4 characters ")
    //   .max(15, "Please enter within 15 characters "),
    // // .integer("Enter age without decimal")

    // websiteURL: yup
    //   .string()
    //   .url("Only enter Website URL")
    //   .max(40, "Website URL can't be more then 40"),

    //
  })
  .required();

export default function Page() {
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);

  const {
    register,
    handleSubmit,
    // watch,

    formState,
  } = useForm<IApplyForm>({
    defaultValues: {
      city: "Karachi",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { errors, isValid, isSubmitting } = formState;
  console.log("🚀 ~ file: page.tsx:109 ~ Page ~ errors:", errors);

  const onFormSubmit = (data: IApplyForm) => {
    console.log("data", data);
  };

  // <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
  //   <br />
  //   <input type="text" placeholder="Full Name" {...register("fullName")} />
  //   <div className="red">{`${errors.fullName?.message}`}</div>
  //   <br />

  //   <input
  //     type="email"
  //     placeholder="Email address"
  //     {...register("email")}
  //   />
  //   <br />

  //   <input
  //     type="number"
  //     placeholder="Phone number"
  //     {...register("phoneNumber")}
  //   />
  //   <br />

  //   <input type="number" placeholder="NIC number" {...register("CNIC")} />

  //   <select
  //     id="qualification"
  //     name="qualification"
  //     className="roundhighestQualificationed-lg mb-8 block w-full border border-gray-400 bg-gray-200 p-3  md:text-lg"
  //     required
  //   >
  //     {qualifications.map((item, i) => (
  //       <option key={i} value={item}>
  //         {item}
  //       </option>
  //     ))}
  //   </select>

  //   {/* validation is only allow form subbmission when form is valid and isSubmitting for not resubmitting form */}
  //   <button
  //     disabled={!isValid || isSubmitting}
  //     type="submit"
  //   >
  //     submit
  //   </button>
  // </form>
  // sdsd

  return (
    <main className="flex justify-center">
      <form className="container mx-4 my-10 w-full max-w-2xl rounded bg-white px-4 py-8 text-black shadow-lg md:mx-10 md:px-6">
        <h1 className="mb-8 text-center text-lg text-green-800 md:text-3xl">
          Student Course Registration Form{" "}
        </h1>
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
        <label className="text-md mb-6 text-gray-400 md:text-xl">Email*</label>
        <input
          type="text"
          className="border-rounded-lg text-md mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
          name="email"
          placeholder=" Email"
        />
        <label className="text-md mb-6 text-gray-400 md:text-xl">CNIC *</label>
        <input
          type="cnic"
          className="border-rounded-lg text-md text-md mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
          name="cnic"
          placeholder=" CNIC"
        />
        <label className="text-md mb-6 text-gray-400 md:text-xl">
          Phone Number
        </label>
        <input
          type="number"
          className="border-rounded-lg text-md mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
          name="Number"
          placeholder=" Phone Number"
        />{" "}
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
        <label className=" text-md mb-6 text-gray-400 md:text-xl">
          Enter City*
        </label>
        <input
          type="text"
          className="border-rounded-lg mb-4 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-sm md:text-xl"
          name="city"
          placeholder=" City"
        />
        <label className="text-md mb-12 text-gray-400 md:text-xl">
          {" "}
          Add Work Experience
        </label>
        <button className="mb-4 block text-2xl">Add</button>
        <label className="text-md mb-8 text-gray-400 md:text-xl">
          {" "}
          Gender*
        </label>
        <div className="mb-4 flex justify-center gap-20 text-xl">
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
        {/* </div> */}
        <label
          htmlFor="qualification"
          className=" text-md mb-6 text-gray-400 md:text-xl"
        >
          Highest Qualification *
        </label>
        <select
          id="qualification"
          name="qualification"
          className="mb-8 block w-full border border-gray-400 bg-gray-100 p-3  md:text-lg"
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
    </main>
  );
}
