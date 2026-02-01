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
} from "react-icons/si";

const Frontend = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript (ES6+)", icon: <DiJavascript1 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiGrafana /> },
  { name: "Responsive UI", icon: <FaFigma /> },
  { name: "UX Design Principles", icon: <FaFigma /> },
  { name: "Data Visualization", icon: <SiGraphql /> },
];

const BackendAPIs = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Python (FastAPI, Flask)", icon: <SiPython /> },
  { name: "REST APIs", icon: <SiGraphql /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Microservices Architecture", icon: <SiDocker /> },
];

const DataAI = [
  { name: "AI-driven Search", icon: <SiOpenai /> },
  { name: "Document Analysis", icon: <SiOpenai /> },
  { name: "Anomaly Detection", icon: <SiOpenai /> },
  { name: "Event-driven Architecture", icon: <SiDocker /> },
  { name: "Vector Databases (Pinecone, FAISS)", icon: <SiMongodb /> },
  { name: "Graph-based Data Modeling", icon: <SiGraphql /> },
];

const Databases = [
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Neo4j (Cypher)", icon: <SiGraphql /> },
];

const CloudDevOps = [
  { name: "AWS (Lambda, ECS, EKS, API Gateway, S3, RDS, CloudFront)", icon: <SiAmazonaws /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Terraform", icon: <SiTerraform /> },
];

const ObservabilityTesting = [
  { name: "Jest", icon: <SiJest /> },
  { name: "Cypress", icon: <SiCypress /> },
  { name: "Playwright", icon: <SiCypress /> },
  { name: "Sentry", icon: <SiSentry /> },
  { name: "Datadog", icon: <SiDatadog /> },
  { name: "CloudWatch", icon: <SiAmazonaws /> },
  { name: "Prometheus", icon: <SiPrometheus /> },
];

const SkillsData = {
  Frontend,
  BackendAPIs,
  DataAI,
  Databases,
  CloudDevOps,
  ObservabilityTesting,
};

export default SkillsData;
