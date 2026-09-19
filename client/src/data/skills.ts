import type { IconName } from "../components/Icon";

export type Skill = {
  name: string;
  icon: IconName;
  /** Brand or theme color for the icon; omitted where the official mark is near-black/white and would vanish in dark mode. */
  color?: string;
};

export type SkillCategory = {
  category: string;
  icon: IconName;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "AngularJS", icon: "angularjs" },
      { name: "CSS", icon: "css", color: "#663399" },
      { name: "HTML", icon: "html", color: "#E34F26" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "jQuery", icon: "jquery", color: "#0769AD" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Responsive", icon: "responsive", color: "var(--color-accent)" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Ajax", icon: "refresh-cw", color: "var(--color-violet)" },
      { name: "Axios", icon: "axios", color: "#5A29E4" },
      { name: "Express", icon: "express" },
      { name: "Node.js", icon: "nodejs", color: "#5FA04E" },
      { name: "PHP", icon: "php", color: "#777BB4" },
      { name: "REST API", icon: "network", color: "var(--color-sky)" },
      { name: "Web Socket", icon: "websocket", color: "var(--color-rose)" },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "NoSQL - ElasticSearch", icon: "elasticsearch", color: "#005571" },
      { name: "Partitioning", icon: "partitioning", color: "var(--color-sky)" },
      { name: "Redis", icon: "redis", color: "#FF4438" },
      { name: "Replication", icon: "git-fork", color: "var(--color-amber)" },
      { name: "SnowFlake - Beginner", icon: "snowflake", color: "#29B5E8" },
    ],
  },
  {
    category: "Infrastructure",
    icon: "cpu",
    skills: [
      { name: "CentOS", icon: "centos", color: "#262577" },
      { name: "Linux", icon: "linux", color: "#FCC624" },
      { name: "Nginx", icon: "nginx", color: "#009639" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    skills: [
      { name: "Azure Portal", icon: "cloud", color: "var(--color-sky)" },
      { name: "Claude Code - Sonnet", icon: "claude-code", color: "#D97757" },
      { name: "Git", icon: "git", color: "#F03C2E" },
      { name: "Jenkins", icon: "jenkins", color: "#D24939" },
      { name: "Odoo", icon: "odoo", color: "#714B67" },
      { name: "Odoo.sh", icon: "odoo", color: "#714B67" },
      { name: "PuTTY", icon: "terminal", color: "var(--color-accent-dim)" },
      { name: "Render", icon: "render" },
      { name: "Resend", icon: "resend" },
      { name: "Vercel", icon: "vercel" },
      { name: "Visual Studio", icon: "visual-studio", color: "#5C2D91" },
      { name: "Windsurf", icon: "windsurf" },
      { name: "WinSCP", icon: "folder-sync", color: "var(--color-violet)" },
    ],
  },
];
