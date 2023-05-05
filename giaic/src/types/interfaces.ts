interface IProjects {
  title: string;
  repoLink: string;
  hostedLink?: string;
  description?: string;
}

interface IExperience {
  title: string;
  employmentType:
    | "Full-time"
    | "Part-time"
    | "Self-employed"
    | "Freelance"
    | "Contract"
    | "Internship"
    | "Apprenticeship"
    | "Seasonal";
  industry: string;
  companyName: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
}

export interface IApplyForm {
  fullName: string;
  CNIC: string;
  phoneNumber: string;
  city: string;
  email: string;
  gender: "male" | "female";
  highestQualification:
    | "Matric / O Levels"
    | "Intermediate / A Levels"
    | "Undergraduate (Bachelor's)"
    | "Graduate (Master's)"
    | "Post-Graduate (PhD)";
  github?: string;
  linkedin?: string;
  discord?: string;

  experiences?: IExperience[];
  programmingLanguages?: string[];
  programmingProjects?: IProjects[];
}

// export interface ISignup {
//   fullName: string;
//   CNIC: string;
//   email: string;
//   password: string;
// }
