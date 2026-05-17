import { DiJavascript1 } from "react-icons/di";
import { FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiFigma,
  SiNextdotjs,
  SiJest,
  SiCypress,
  SiGithub,
  SiGitlab,
  SiPostman,
} from "react-icons/si";

const Frontend = [
  { name: "Next.js (App Router)", icon: <SiNextdotjs /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript (ES6+)", icon: <DiJavascript1 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Responsive UI", icon: <SiCss3 /> },
  { name: "Mobile-first Design", icon: <SiCss3 /> },
];

const UIUX = [
  { name: "Figma to Code", icon: <SiFigma /> },
  { name: "Pixel-perfect UI", icon: <SiFigma /> },
  { name: "Reusable Components", icon: <SiReact /> },
  { name: "Design Systems", icon: <SiFigma /> },
  { name: "Accessibility (WCAG)", icon: <SiReact /> },
  { name: "Cross-browser Compatibility", icon: <SiHtml5 /> },
];

const PerformanceSEO = [
  { name: "Core Web Vitals", icon: <SiReact /> },
  { name: "Lighthouse Optimization", icon: <SiReact /> },
  { name: "SEO Fundamentals", icon: <SiReact /> },
  { name: "Lazy Loading", icon: <SiReact /> },
  { name: "Code Splitting", icon: <SiReact /> },
  { name: "Image Optimization", icon: <SiReact /> },
  { name: "SSR/SSG", icon: <SiNextdotjs /> },
];

const TestingQuality = [
  { name: "Jest", icon: <SiJest /> },
  { name: "React Testing Library", icon: <SiJest /> },
  { name: "Cypress", icon: <SiCypress /> },
  { name: "Playwright", icon: <SiCypress /> },
  { name: "UI Regression Testing", icon: <SiCypress /> },
  { name: "Automation Testing", icon: <SiCypress /> },
];

const Tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub / GitLab", icon: <SiGithub /> },
  { name: "CI/CD Pipelines", icon: <FaGitAlt /> },
  { name: "Agile / Scrum", icon: <SiGitlab /> },
  { name: "Jira / Confluence", icon: <SiGitlab /> },
  { name: "REST APIs", icon: <SiPostman /> },
  { name: "Postman", icon: <SiPostman /> },
];

const SkillsData = {
  Frontend,
  UIUX,
  PerformanceSEO,
  TestingQuality,
  Tools,
};

export default SkillsData;
