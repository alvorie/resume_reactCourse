import { Skill } from "./components/Skill";

export const navElementsData = [
  "about",
  "education",
  "work experience",
  "skills",
  "projects",
];

export const aboutData = {
  title: "⊹ about ⊹",
  description: `An aspiring frontend developer interested in UI/UX design and 
    fullstack development. Dedicated to creating functional and 
    user-friendly experiences. 
    Also, a proud cat enthusiast.`,
};

export const contactsData = [
  { label: "aleena.volf@mail.ru", link: "mailto:aleena.volf@mail.ru" },
  { label: "alvorie", link: "https://t.me/alvorie" },
];

export const educationData = {
  title: "education",
  items: [
    {
      institution: "Russian Technological University MIREA",
      degree: "Bachelors in Applied Computer Science",
      date: "2022 sep. - 2026 jul.",
    },
    {
      institution: "Beijing Institute of Technology",
      degree: "Exchange semester, Computer Science",
      date: "2024 feb. - 2024 jul.",
    },
  ],
};

export const workData = {
  title: "work experience",
  items: [
    {
      position: "Computer Science Mentor",
      company: "100points - Unified State Exam School",
      date: "2023 jan. - 2024 jan.",
    },
  ],
};

export const projectsData = {
    title: "projects",
    items: [
      {
        name: "Nonograms",
        imgPath: "assets/img/nonograms.png",
        technologies: "Vanilla JS, CSS, HTML",
        demoLink: "https://rolling-scopes-school.github.io/alvorie-JSFE2024Q4/nonograms/index.html",
      },
    ],
  };

export const skillsData: Skill[] = [
  {
    skillGroup: "frontend",
    skillName: "JavaScript",
  },
  {
    skillGroup: "frontend",
    skillName: "CSS",
  },
  {
    skillGroup: "frontend",
    skillName: "SASS",
  },
  {
    skillGroup: "frontend",
    skillName: "CSS Modules",
  },
  {
    skillGroup: "frontend",
    skillName: "HTML",
  },
  {
    skillGroup: "frontend",
    skillName: "TypeScript",
  },
  {
    skillGroup: "frontend",
    skillName: "React",
  },
  {
    skillGroup: "misc",
    skillName: "Figma",
  },
  {
    skillGroup: "misc",
    skillName: "English C1",
  },
];
