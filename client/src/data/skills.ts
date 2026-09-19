import type { IconName } from "../components/Icon";

export type Skill = {
  name: string;
  icon: IconName;
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
      { name: "CSS", icon: "css" },
      { name: "HTML", icon: "html" },
      { name: "JavaScript", icon: "javascript" },
      { name: "jQuery", icon: "jquery" },
      { name: "React", icon: "react" },
      { name: "Responsive", icon: "responsive" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Ajax", icon: "refresh-cw" },
      { name: "Axios", icon: "axios" },
      { name: "Express", icon: "express" },
      { name: "Node.js", icon: "nodejs" },
      { name: "PHP", icon: "php" },
      { name: "REST API", icon: "network" },
      { name: "Web Socket", icon: "websocket" },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "Partitioning", icon: "partitioning" },
      { name: "Replication", icon: "git-fork" },
      { name: "SnowFlake - Beginner", icon: "snowflake" },
    ],
  },
  {
    category: "Infrastructure",
    icon: "cpu",
    skills: [
      { name: "CentOS", icon: "centos" },
      { name: "Linux", icon: "linux" },
      { name: "Nginx", icon: "nginx" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    skills: [
      { name: "Azure Portal", icon: "cloud" },
      { name: "Claude Code - Sonnet", icon: "claude-code" },
      { name: "Git", icon: "git" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "Odoo", icon: "odoo" },
      { name: "Odoo.sh", icon: "odoo" },
      { name: "PuTTY", icon: "terminal" },
      { name: "Render", icon: "render" },
      { name: "Resend", icon: "resend" },
      { name: "Vercel", icon: "vercel" },
      { name: "Visual Studio", icon: "visual-studio" },
      { name: "Windsurf", icon: "windsurf" },
      { name: "WinSCP", icon: "folder-sync" },
    ],
  },
];
