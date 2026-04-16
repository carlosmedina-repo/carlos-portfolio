import { DiJavascript1 } from "react-icons/di";
import { FaFigma, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGoogleanalytics,
} from "react-icons/si";

const Webflow = [
  { name: "Webflow CMS", icon: <SiTailwindcss /> },
  { name: "Webflow Interactions", icon: <SiTailwindcss /> },
  { name: "Webflow Animations", icon: <SiTailwindcss /> },
  { name: "Webflow Component Design", icon: <SiTailwindcss /> },
  { name: "Webflow Responsive Layouts", icon: <SiTailwindcss /> },
  { name: "Webflow Hosting", icon: <SiTailwindcss /> },
  { name: "Webflow SEO Optimization", icon: <SiTailwindcss /> },
];

const FrontEndDevelopment = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript (ES6+)", icon: <DiJavascript1 /> },
  { name: "Responsive Web Design", icon: <FaFigma /> },
  { name: "Custom Code Embeds", icon: <DiJavascript1 /> },
  { name: "Cross-Browser Debugging", icon: <DiJavascript1 /> },
];

const DesignCollaboration = [
  { name: "Figma", icon: <FaFigma /> },
  { name: "Pixel-Perfect Implementation", icon: <FaFigma /> },
  { name: "Design Systems", icon: <FaFigma /> },
  { name: "UI/UX Collaboration", icon: <FaFigma /> },
];

const SEOAccessibility = [
  { name: "Technical SEO", icon: <SiGoogleanalytics /> },
  { name: "Core Web Vitals", icon: <SiGoogleanalytics /> },
  { name: "Schema Markup", icon: <SiGoogleanalytics /> },
  { name: "WCAG Compliance", icon: <SiGoogleanalytics /> },
  { name: "Semantic HTML", icon: <SiHtml5 /> },
  { name: "Accessibility Best Practices", icon: <SiGoogleanalytics /> },
];

const TrackingAnalytics = [
  { name: "Google Tag Manager", icon: <SiGoogleanalytics /> },
  { name: "Segment CDP", icon: <SiGoogleanalytics /> },
  { name: "Facebook Ads API", icon: <SiGoogleanalytics /> },
  { name: "Event Tracking", icon: <SiGoogleanalytics /> },
  { name: "Conversion Tracking", icon: <SiGoogleanalytics /> },
  { name: "Marketing Attribution", icon: <SiGoogleanalytics /> },
];

const CompliancePrivacy = [
  { name: "OneTrust", icon: <SiTailwindcss /> },
  { name: "Cookie Consent Management", icon: <SiTailwindcss /> },
  { name: "Privacy Compliance Implementation", icon: <SiTailwindcss /> },
];

const OptimizationCRO = [
  { name: "A/B Testing Platforms", icon: <SiGoogleanalytics /> },
  { name: "CRO Experimentation Support", icon: <SiGoogleanalytics /> },
  { name: "Landing Page Optimization", icon: <SiGoogleanalytics /> },
  { name: "Funnel Optimization", icon: <SiGoogleanalytics /> },
];

const DevelopmentTools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Version Control", icon: <FaGitAlt /> },
  { name: "Browser DevTools", icon: <DiJavascript1 /> },
  { name: "Debugging Workflows", icon: <DiJavascript1 /> },
  { name: "Performance Optimization", icon: <SiGoogleanalytics /> },
];

const SkillsData = {
  Webflow,
  FrontEndDevelopment,
  DesignCollaboration,
  SEOAccessibility,
  TrackingAnalytics,
  CompliancePrivacy,
  OptimizationCRO,
  DevelopmentTools,
};

export default SkillsData;
