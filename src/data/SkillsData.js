import { DiJavascript1 } from "react-icons/di";
import { FaFigma, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJest,
  SiCypress,
  SiSentry,
  SiDatadog,
  SiPrometheus,
  SiGrafana,
  SiOpenai,
  SiRust,
} from "react-icons/si";

const Backend = [
  { name: "Rust", icon: <SiRust /> },
  { name: "actix", icon: <SiRust /> },
  { name: "tokio", icon: <SiRust /> },
  { name: "diesel", icon: <SiRust /> },
  { name: "async-graphql", icon: <SiGraphql /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "REST APIs", icon: <SiGraphql /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Microservices", icon: <SiDocker /> },
  { name: "Event-driven architecture", icon: <SiDocker /> },
];

const Frontend = [
  { name: "React", icon: <FaReact /> },
  { name: "nextjs", icon: <FaReact /> },
  { name: "tailwind", icon: <SiTailwindcss /> },
  { name: "chadcn", icon: <SiTailwindcss /> },
  { name: "apollo-client", icon: <SiGraphql /> },
  { name: "next-auth", icon: <SiNodedotjs /> },
  { name: "usehooks", icon: <FaReact /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "responsive UI architecture", icon: <FaFigma /> },
];

const Web3Distributed = [
  { name: "Smart contract integration", icon: <SiOpenai /> },
  { name: "decentralized application architecture", icon: <SiDocker /> },
  { name: "wallet authentication flows", icon: <SiOpenai /> },
  { name: "token-based ecosystems", icon: <SiOpenai /> },
  { name: "distributed system design", icon: <SiDocker /> },
];

const SystemDesign = [
  { name: "Scalable backend systems", icon: <SiDocker /> },
  { name: "API design", icon: <SiGraphql /> },
  { name: "low-latency services", icon: <SiRedis /> },
  { name: "real-time communication systems", icon: <SiRedis /> },
  { name: "modular architecture", icon: <SiDocker /> },
];

const SkillsData = {
  Backend,
  Frontend,
  Web3Distributed,
  SystemDesign,
};

export default SkillsData;
