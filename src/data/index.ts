export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  honors?: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const name = "Chelsea (Siyuan) Chen";
export const title = "Industrial Engineer at Applied Materials";
export const locationText = "Austin, Texas";

export const about = [
  "Hi! I'm Chelsea — an Industrial Engineer at <strong>Applied Materials</strong> focused on semiconductor manufacturing logistics and warehouse automation. I build tools and data pipelines that help operations run smoothly and improve efficiency.",
  "I hold an M.S. in <strong>Operations Research</strong> from UT Austin and a B.S. in <strong>Financial Statistics</strong> from CUHK-Shenzhen. Outside of work, you'll find me hiking around Austin, at Pilates, or volunteering with the <strong>Austin Humane Society</strong>.",
];

export const experience: Experience[] = [
  {
    company: "Applied Materials",
    location: "Austin, TX",
    role: "Logistics Industrial Engineer | Analysis Automation",
    period: "June 2025 — Present",
    bullets: [
      "Automated warehouse assignment tools and inventory replenishment pipelines, achieving 95% accuracy and saving 20+ hours of engineering effort per week.",
      "Built end-to-end process models and capacity forecasting workflows using Databricks and PostgreSQL, reducing analysis cycle times from hours to minutes.",
    ],
    technologies: ["Python", "Excel", "ARIS", "Databricks", "PostgreSQL", "API Integration"],
  },
  {
    company: "CDK Global",
    location: "Austin, TX",
    role: "Financial Data Analyst Intern",
    period: "June 2024 — Dec 2024",
    bullets: [
      "Built ETL pipelines and Tableau dashboards for SaaS metrics, improving data extraction efficiency by 25% and reducing reporting time by 11%.",
      "Enhanced financial reporting and streamlined cross-team processes, reducing forecast variance by 8% and recovering $30K in unclaimed funds.",
    ],
    technologies: ["SQL", "Oracle", "Alteryx", "Tableau", "Excel"],
  },
  {
    company: "Tencent | Tencent Education",
    location: "Shenzhen, China",
    role: "Product Analyst Intern",
    period: "July 2022 — Sept 2022",
    bullets: [
      "Designed A/B tests and automated dashboards tracking LTV and CAC, boosting revenue by 6% and reducing churn by 8%.",
    ],
    technologies: ["SQL", "Tableau", "A/B Testing", "EDA", "Python"],
  },
];

export const education: Education[] = [
  {
    school: "The University of Texas at Austin",
    degree: "M.S. in Operations Research and Industrial Engineering",
    period: "Sept 2023 — June 2025",
    gpa: "3.7/4.0",
    details: "Linear/Integer Programming, Decision Analysis, Stochastic Processes, Statistical Methods",
  },
  {
    school: "The Chinese University of Hong Kong, Shenzhen",
    degree: "B.S. in Financial Statistics",
    period: "Sept 2019 — June 2023",
    gpa: "3.6/4.0",
    honors: "First Class Honors",
    details: "Teaching Assistant/Grader — Mathematical Statistics",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Industrial Engineering",
    skills: ["Process Mapping", "Continuous Improvement", "Root Cause Analysis", "Warehouse Optimization"],
  },
  {
    name: "Data Analytics",
    skills: ["SQL (PostgreSQL)", "Databricks / Spark", "Python", "API Data Integration"],
  },
  {
    name: "Project Management",
    skills: ["Jira", "Confluence", "Smartsheet", "Microsoft Project"],
  },
  {
    name: "Visualization",
    skills: ["Tableau", "Power BI", "Excel (Power Pivot, Power Query)", "Matplotlib"],
  },
];

export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chelsea-siyuan-chen/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>`,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];
