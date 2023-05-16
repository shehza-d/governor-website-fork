import * as yup from "yup";

export const mainFormSchema = yup.object({
  fullName: yup
    .string()
    .required("Name is required")
    .min(3, "Please enter more then 3 characters")
    .max(100, "Please enter within 100 characters"),
  fatherName: yup
    .string()
    .required("Name is required")
    .min(3, "Please enter more then 3 characters")
    .max(100, "Please enter within 100 characters"),
  cnic: yup
    .string()
    .required("CNIC Number is required  without -")
    .min(13, "Please enter more then 13 characters")
    .max(13, "Please enter within 13 characters without -"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .min(11, "Please enter more then 11 characters")
    .max(14, "Please enter within 14 characters"),
  city: yup
    .string()
    .required("City is required")
    .min(2, "Please select your City")
    .max(45, "Please enter within 45 characters"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Email is required")
    .min(3, "Please enter more then 3 characters")
    .max(55, "Please enter within 55 characters"),
  dateOfBirth: yup.string().required("Date of Birth if Required"),
  gender: yup.string().required("Gender is required"),
  highestQualification: yup
    .string()
    .required("Qualification is required")
    .min(2, "Qualification is required"),
  github: yup
    .string()
    .url("Enter valid URL with http")
    .max(120, "Website URL can't be more then 120"),
  linkedin: yup
    .string()
    .url("Enter valid URL with http")
    .max(120, "Website URL can't be more then 120"),
  discord: yup
    .string()
    .url("Enter valid URL with http")
    .max(120, "Website URL can't be more then 120"),
});

export const experienceSchema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  employmentType: yup
    .string()
    .required("Employment Type is required")
    .min(3, "Please select Employment type")
    .max(40, "Please enter within 40 characters"),
  industry: yup
    .string()
    .required("Industry is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  companyName: yup
    .string()
    .required("Industry is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  // startDate: yup.string().required("Date is Required"),
  // endDate: yup.date().typeError("Date is Required"),
});

export const projectSchema = yup.object({
  title: yup
    .string()
    .required("Full Name is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  repoLink: yup
    .string()
    .required("Full Name is required")
    .url("Enter valid URL with http")
    .min(3, "Please enter more then 3 characters")
    .max(120, "Please enter within 120 characters"),
  hostedLink: yup
    .string()
    .url("Enter valid URL with http")
    .max(120, "Please enter within 120 characters"),
  description: yup.string().max(100, "Please enter within 100 characters"),
});
