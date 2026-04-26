import { DiJavascript1, DiPython, DiPostgresql, DiMysql } from "react-icons/di";
import { FaGitAlt, FaAws, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiGithub,
} from "react-icons/si";

const Frontend = [
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
];

const Backend = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Python", icon: <DiPython /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "REST APIs", icon: <DiJavascript1 /> },
];

const DataVisualization = [
  { name: "Recharts", icon: <SiReact /> },
  { name: "D3.js", icon: <DiJavascript1 /> },
  { name: "ECharts", icon: <DiJavascript1 /> },
  { name: "Charting Systems", icon: <DiJavascript1 /> },
];

const Databases = [
  { name: "PostgreSQL", icon: <DiPostgresql /> },
  { name: "MySQL", icon: <DiMysql /> },
  { name: "SQL Optimization", icon: <DiJavascript1 /> },
];

const CloudInfra = [
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "CI/CD Pipelines", icon: <FaGitAlt /> },
];

const Tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Cursor", icon: <DiJavascript1 /> },
  { name: "ChatGPT", icon: <DiJavascript1 /> },
  { name: "Claude", icon: <DiJavascript1 /> },
  { name: "OpenAI APIs", icon: <DiJavascript1 /> },
];

const Architecture = [
  { name: "Full Stack Systems", icon: <SiReact /> },
  { name: "API Design", icon: <DiJavascript1 /> },
  { name: "Internal Tools", icon: <DiJavascript1 /> },
  { name: "Scalable Frontend Architecture", icon: <SiReact /> },
];

const SkillsData = {
  Frontend,
  Backend,
  DataVisualization,
  Databases,
  CloudInfra,
  Tools,
  Architecture,
};

export default SkillsData;
