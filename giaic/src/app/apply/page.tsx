"use client";
import { useForm } from "react-hook-form";
import { IApplyForm } from "@/types/interfaces";
import { useState } from "react";

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
  });

  const { errors, isValid, isSubmitting } = formState;
  console.log("🚀 ~ file: page.tsx:60 ~ Page ~ isValid:", isValid);

  const onFormSubmit = (data: IApplyForm) => {
    console.log(data);
  };

  return (
    <section>
      <h1>GIAIC</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        <div className="red">{`${errors.fullName?.message}`}</div>
        <input
          type="email"
          placeholder="Email address"
          {...register("email")}
        />
        <input
          type="number"
          placeholder="Phone number"
          {...register("phoneNumber")}
        />
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
        <button disabled={!isValid || isSubmitting} type="submit">
          submit
        </button>
      </form>
    </section>
  );
}
