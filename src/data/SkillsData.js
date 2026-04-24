import { DiJavascript1 } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiMui,
} from "react-icons/si";

const Frontend = [
  { name: "Next.js", icon: <SiReact /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "JavaScript (ES6+)", icon: <DiJavascript1 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
];

const Backend = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "REST APIs", icon: <DiJavascript1 /> },
  { name: "Authentication (JWT)", icon: <DiJavascript1 /> },
  { name: "MongoDB / SQL", icon: <SiMongodb /> },
];

const StateManagement = [
  { name: "Zustand", icon: <SiRedux /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Global State Architecture", icon: <DiJavascript1 /> },
  { name: "Client-State Optimization", icon: <DiJavascript1 /> },
];

const DataFetching = [
  { name: "TanStack Query", icon: <SiReact /> },
  { name: "React Query", icon: <SiReact /> },
  { name: "Caching Strategies", icon: <DiJavascript1 /> },
  { name: "Network Request Optimization", icon: <DiJavascript1 /> },
];

const Styling = [
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Responsive UIs", icon: <SiTailwindcss /> },
  { name: "Component Styling", icon: <SiTailwindcss /> },
  { name: "CSS Architecture", icon: <SiCss3 /> },
];

const Architecture = [
  { name: "Full Stack Integration", icon: <FaGitAlt /> },
  { name: "API Design", icon: <DiJavascript1 /> },
  { name: "Component Architecture", icon: <SiReact /> },
  { name: "SSR & Code Splitting", icon: <SiReact /> },
  { name: "Caching & Lazy Loading", icon: <SiReact /> },
  { name: "Git, GitHub, Jira, Agile", icon: <FaGitAlt /> },
];

const SkillsData = {
  Frontend,
  Backend,
  StateManagement,
  DataFetching,
  Styling,
  Architecture,
};

export default SkillsData;
