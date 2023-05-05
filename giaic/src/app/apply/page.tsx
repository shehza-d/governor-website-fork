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
  console.log("🚀 ~ file: page.tsx:60 ~ Page ~ isValid:", isValid);

  const onFormSubmit = (data: IApplyForm) => {
    console.log("data", data);
  };

  return (
    <section>
      <h1>GIAIC</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <br />
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        <div className="red">{`${errors.fullName?.message}`}</div>
        <br />

        <input
          type="email"
          placeholder="Email address"
          {...register("email")}
        />
        <br />

        <input
          type="number"
          placeholder="Phone number"
          {...register("phoneNumber")}
        />
        <br />

        <input type="number" placeholder="NIC number" {...register("CNIC")} />

        <select
          id="qualification"
          name="qualification"
          className="roundhighestQualificationed-lg mb-8 block w-full border border-gray-400 bg-gray-200 p-3  md:text-lg"
          required
        >
          {qualifications.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* validation is only allow form subbmission when form is valid and isSubmitting for not resubmitting form */}
        <button
          // disabled={!isValid || isSubmitting}
          type="submit"
        >
          submit
        </button>
      </form>
    </section>
  );
}
