"use client";
import {
  ExperienceModal,
  CheckBox,
  Input,
  ProjectsModal,
  Loader,
} from "@/components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IApplyForm, IExperience, IProjects } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { mainFormSchema } from "@/lib/yupValidation";
import { formCities, formQualifications } from "@/data";
import { useToast } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function Page() {
  const toast = useToast();

  const [experienceData, setExperienceData] = useState<IExperience[]>([]);
  const [experienceModal, setExperienceModal] = useState<boolean>(false);
  const [projectsData, setProjectsData] = useState<IProjects[]>([]);
  const [projectModal, setProjectModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm<IApplyForm>({
    mode: "onTouched",
    resolver: yupResolver(mainFormSchema),
  });

  const { errors } = formState;

  const onFormSubmit = async (data: IApplyForm) => {
    try {
      setLoading(true);
      const formData = {
        fullName: data.fullName.toLowerCase(),
        fatherName: data.fatherName.toLowerCase(),
        cnic: data.cnic,
        phoneNumber: data.phoneNumber,
        city: data.city.toLowerCase(),
        email: data.email.toLowerCase(),
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        highestQualification: data.highestQualification,
        github: data?.github ? data?.github : null,
        linkedin: data?.linkedin ? data?.linkedin : null,
        discord: data?.discord ? data?.discord : null,
        experiences: experienceData.length ? experienceData : null,
        programmingLanguages: data?.programmingLanguages
          ? data?.programmingLanguages
          : null,
        programmingProjects: projectsData.length ? projectsData : null,
      };
      console.log("formData", formData);

      const sleep = () => new Promise((resolve) => setTimeout(resolve, 2500));
      await sleep();

      // const res = await fetch("/api/applyform/", {
      //   body: JSON.stringify(formData),
      //   method: "POST",
      // });

      // const resData = await res.json();
      const resData = { message: "Form testing done!" };
      // console.log(resData.message);

      if (resData.message === "Applied Succesfully") reset();

      toast({
        title: `${resData.message}`,
        // description: "We've created your account for you.",
        status:
          resData.message === "User Already Exist" ||
          resData.message === "Add All Credentials"
            ? "error"
            : "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err: any) {
      console.log(err);
      toast({
        title: `Unknown error`,
        description: `${err?.message}`,
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      // style={{ backgroundImage: `url('/formBg.png')` }}
      className="overfow-hidden mb-20 flex justify-center bg-contain bg-fixed bg-center bg-no-repeat"
    >
      <form
        className="-top-10 z-10 mx-4 my-10 w-full max-w-2xl rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-10 md:px-6"
        onSubmit={handleSubmit(onFormSubmit)}
        noValidate
      >
        <h1
          style={poppins.style}
          className="mb-8 text-center text-3xl font-bold  text-main md:text-lg"
        >
          Student Course Registration Form{" "}
        </h1>
        <Input
          type="text"
          id="fullName"
          placeholder="Full Name"
          required={true}
          register={register}
          errors={errors}
        />
        <Input
          type="text"
          id="fatherName"
          placeholder="Father Name"
          required={true}
          register={register}
          errors={errors}
        />
        <Input
          type="number"
          id="cnic"
          placeholder="CNIC or B-Form Number"
          required={true}
          register={register}
          errors={errors}
        />
        <Input
          type="number"
          id="phoneNumber"
          placeholder="Phone Number"
          required={true}
          register={register}
          errors={errors}
        />
        <label htmlFor="city" className="text-md text-slate-700 md:text-xl">
          City *
        </label>

        <select
          {...register("city", { required: true })}
          id="city"
          className={`mb-2 mt-2 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-lg ${
            errors?.city
              ? "border-red-400 ring-red-500"
              : "focus:border-sub focus:ring-sub"
          } outline-none focus:ring-1`}
          required
        >
          <option value="n">Please Select</option>
          {formCities.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="mb-4 text-red-400">{errors.city?.message}</p>
        )}

        <Input
          type="email"
          id="email"
          placeholder="Email"
          required={true}
          register={register}
          errors={errors}
        />
        <Input
          type="date"
          id="dateOfBirth"
          placeholder="Date of Birth"
          required={true}
          register={register}
          errors={errors}
        />
        <label className="text-md text-slate-700 md:text-xl"> Gender *</label>
        <div className="mb-4 flex justify-center gap-20 text-xl">
          <div className="flex items-center  ">
            <input
              {...register("gender", { required: true })}
              type="radio"
              value="male"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-2xl font-medium text-slate-700">
              {" "}
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              {...register("gender", { required: true })}
              type="radio"
              value="female"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-2xl font-medium text-slate-700">
              {" "}
              Female
            </label>
          </div>
        </div>
        {errors.gender && (
          <p className="mb-4 text-red-400">{errors.gender?.message}</p>
        )}
        <label
          htmlFor="qualification"
          className=" text-md text-slate-700 md:text-xl"
        >
          Highest Qualification *
        </label>

        <select
          {...register("highestQualification", { required: true })}
          id="qualification"
          className={`mb-2 mt-1 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-lg ${
            errors?.highestQualification
              ? "border-red-400 ring-red-500"
              : "focus:border-sub focus:ring-sub"
          } outline-none focus:ring-1`}
        >
          <option value="n">Please Select</option>
          {formQualifications.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.highestQualification && (
          <p className="mb-4 text-red-400">
            {errors.highestQualification?.message}
          </p>
        )}
        <Input
          type="text"
          id="github"
          placeholder="Github link"
          register={register}
          errors={errors}
        />
        <Input
          type="text"
          id="linkedin"
          placeholder="Linkedin link"
          register={register}
          errors={errors}
        />
        <Input
          type="text"
          id="discord"
          placeholder="Discord link"
          register={register}
          errors={errors}
        />

        <label className="text-md block text-slate-700 md:text-xl">
          Experience (optional)
        </label>
        <button
          type="button"
          onClick={() => setExperienceModal(!experienceModal)}
          className="mb-2 mt-1 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-main hover:bg-gray-100 hover:text-blue-900 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Add Work Experience
        </button>

        <div className="space-y-2">
          {experienceData.map((item, i) => (
            <div
              className="flex items-center justify-between rounded-md border-2 border-gray-500 p-2"
              key={item.id}
            >
              <h4 className=" text-lg capitalize">
                {item.title} - {item.companyName} -{" "}
                {`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getUTCFullYear()}`}
              </h4>
              <button
                className="px-4 py-1"
                type="button"
                onClick={() => {
                  const filteredData = experienceData.filter(
                    (value) => value.id !== item.id
                  );
                  setExperienceData(filteredData);
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <label className="text-md mb-2 block text-slate-700 md:text-xl">
          Programming Languages (optional)
        </label>
        <CheckBox value="JavaScript" register={register} />
        <CheckBox value="TypeScript" register={register} />
        <CheckBox value="Python" register={register} />
        <CheckBox value="C#" register={register} />
        <CheckBox value="Swift" register={register} />
        <CheckBox value="C/C++" register={register} />
        <CheckBox value="Java" register={register} />
        <CheckBox value="Solidity" register={register} />
        <CheckBox value="Other" register={register} />

        <label className="text-md mb-4 block text-slate-700 md:text-xl">
          Programming projects (optional)
        </label>
        <button
          type="button"
          onClick={() => setProjectModal(!projectModal)}
          className="mb-2 mt-1 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-main hover:bg-gray-100 hover:text-blue-900 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Add Programming projects
        </button>

        <div className="space-y-2">
          {projectsData.map((item) => (
            <div
              className="flex items-center justify-between rounded-md border-2 border-gray-500 p-2"
              key={item.id}
            >
              <h4 className=" text-xl capitalize">{item.title}</h4>
              <button
                type="button"
                className="px-4 py-1"
                onClick={() => {
                  const filteredData = projectsData.filter(
                    (value) => value.id !== item.id
                  );
                  setProjectsData(filteredData);
                }}
              >
                {" "}
                X{" "}
              </button>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center">
          {/* <Button
            // disabled={!isValid || isSubmitting}
            type="submit"
            className="rounded_none mt-5 h-3 w-52 bg-sub p-4 text-center text-base font-semibold tracking-widest text-white transition-transform duration-1000 hover:scale-105 sm:w-full sm:py-3 sm:text-sm"
            isLoading={loading}
            loadingText="Applying"
            colorScheme="bg-main"
            variant="solid"
          >
            SUBMIT
          </Button> */}
          <button
            type="submit"
            style={poppins.style}
            disabled={loading}
            className="mt-5 w-52 bg-sub py-4 text-center text-base font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed sm:w-full sm:py-3 sm:text-sm"
          >
            {loading ? <Loader width="w-4" height="h-4" /> : "SUBMIT"}
          </button>
        </div>
      </form>

      {experienceModal && (
        <ExperienceModal
          experienceModal={experienceModal}
          setExperienceModal={setExperienceModal}
          setExperienceData={setExperienceData}
        />
      )}
      {projectModal && (
        <ProjectsModal
          projectModal={projectModal}
          setProjectModal={setProjectModal}
          setProjectsData={setProjectsData}
        />
      )}
    </main>
  );
}
