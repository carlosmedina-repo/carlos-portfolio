import { DiJavascript1 } from "react-icons/di";
import { FaFigma, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGoogleanalytics,
} from "react-icons/si";

const Webflow = [
  { name: "Webflow CMS Architecture", icon: <SiTailwindcss /> },
  { name: "Webflow Interactions", icon: <SiTailwindcss /> },
  { name: "Webflow Animations", icon: <SiTailwindcss /> },
  { name: "Responsive Design", icon: <SiTailwindcss /> },
  { name: "Pixel-Perfect Development", icon: <SiTailwindcss /> },
  { name: "Scalable Component Systems", icon: <SiTailwindcss /> },
];

const Frontend = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "Custom Code Embeds", icon: <DiJavascript1 /> },
  { name: "API Integrations", icon: <DiJavascript1 /> },
  { name: "UI Enhancement Scripting", icon: <DiJavascript1 /> },
];

const DesignUX = [
  { name: "Figma", icon: <FaFigma /> },
  { name: "Design Systems", icon: <FaFigma /> },
  { name: "UX Translation", icon: <FaFigma /> },
  { name: "Responsive UI Development", icon: <FaFigma /> },
  { name: "Pixel-Perfect Implementation", icon: <FaFigma /> },
  { name: "Component-Based Design Alignment", icon: <FaFigma /> },
];

const PerformanceSEO = [
  { name: "SEO Best Practices", icon: <SiGoogleanalytics /> },
  { name: "Core Web Vitals Optimization", icon: <SiGoogleanalytics /> },
  { name: "WCAG Accessibility", icon: <SiGoogleanalytics /> },
  { name: "Performance Optimization", icon: <SiGoogleanalytics /> },
  { name: "Structured Metadata Implementation", icon: <SiGoogleanalytics /> },
];

const IntegrationsMarte = [
  { name: "Google Tag Manager", icon: <SiGoogleanalytics /> },
  { name: "Segment CDP", icon: <SiGoogleanalytics /> },
  { name: "Facebook Ads API", icon: <SiGoogleanalytics /> },
  { name: "OneTrust", icon: <SiGoogleanalytics /> },
  { name: "Transcend", icon: <SiGoogleanalytics /> },
  { name: "A/B Testing Platforms (Optimizely, VWO)", icon: <SiGoogleanalytics /> },
];

const CollaborationDelivery = [
  { name: "Cross-Functional Collaboration", icon: <DiJavascript1 /> },
  { name: "Product Requirement Translation", icon: <DiJavascript1 /> },
  { name: "CRO Alignment", icon: <SiGoogleanalytics /> },
  { name: "Agile Delivery Workflows", icon: <FaGitAlt /> },
  { name: "Stakeholder Communication", icon: <DiJavascript1 /> },
];

const SkillsData = {
  Webflow,
  Frontend,
  DesignUX,
  PerformanceSEO,
  IntegrationsMarte,
  CollaborationDelivery,
};

export default SkillsData;
