export const recruiterOnBoardFormControls = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your Name",
    componentType: "input",
  },
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Enter your Company name",
    componentType: "input",
  },
  {
    label: "Company Role",
    name: "companyRole",
    placeholder: "Enter your Company Role",
    componentType: "input",
  },
];

export const candidateOnBoardFormControls = [
  {
    label: "Resume",
    name: "resume",
    componentType: "file",
  },
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your Name",
    componentType: "input",
  },
  {
    label: "Current Company",
    name: "currentCompany",
    placeholder: "Enter your Current Company Name",
    componentType: "input",
  },
  {
    label: "Current Job Location",
    name: "currentJobLocation",
    placeholder: "Enter your current job Location",
    componentType: "input",
  },
  {
    label: "Prefered Job Location",
    name: "preferedJobLocation",
    placeholder: "Enter your prefered job Location",
    componentType: "input",
  },
  {
    label: "Current Salary",
    name: "currentSalary",
    placeholder: "Enter your current Salary",
    componentType: "input",
  },
  {
    label: "Notice Period",
    name: "noticePeriod",
    placeholder: "Enter your notice periods",
    componentType: "input",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "Enter your skills",
    componentType: "input",
  },
  {
    label: "Previous Companies",
    name: "previousCompanies",
    placeholder: "Enter your Previous Companies",
    componentType: "input",
  },
  {
    label: "Total Experience",
    name: "totalExperience",
    placeholder: "Enter your Total Experience",
    componentType: "input",
  },
  {
    label: "College",
    name: "college",
    placeholder: "Enter your college name",
    componentType: "input",
  },
  {
    label: "College Location",
    name: "collegeLocation",
    placeholder: "Enter your college Location",
    componentType: "input",
  },
  {
    label: "Graduated Year",
    name: "graduatedYear",
    placeholder: "Enter your Graduated Year",
    componentType: "input",
  },
  {
    label: "Linkedin Profile",
    name: "linkedinProfile",
    placeholder: "Enter your Linkedin Profile",
    componentType: "input",
  },
  {
    label: "Github Profile",
    name: "githubProfile",
    placeholder: "Enter your Github Profile",
    componentType: "input",
  },
];

export const intialCandidateFormData = {
  resume: "",
  name: "",
  currentJobLocation: "",
  preferedJobLocation: "",
  currentCompany: "",
  currentSalary: "",
  noticePeriod: "",
  skills: "",
  previousCompanies: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  graduatedYear: "",
  linkedinProfile: "",
  githubProfile: "",
};

export const intialRecruiterFormData = {
  name: "",
  companyName: "",
  companyRole: "",
};

export const postNewJobFormControls = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Company Name",
    componentType: "input",
    disabled: true,
  },
  {
    label: "Title",
    name: "title",
    placeholder: "Enter the job title",
    componentType: "input",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "Enter the job description",
    componentType: "input",
  },
  {
    label: "Job Location",
    name: "jobLocation",
    placeholder: "Enter the job Location",
    componentType: "input",
  },
  {
    label: "Require Experence",
    name: "requireExperience",
    placeholder: "Enter the require job Experience",
    componentType: "input",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "Enter the require skills for the job",
    componentType: "input",
  },
];

export const initialpostNewJobFormData = {
  companyName: "",
  title: "",
  description: "",
  location: "",
  experience: "",
  skills: "",
  recruiterId: "",
};
