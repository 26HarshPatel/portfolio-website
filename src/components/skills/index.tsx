import React from "react";
import { Chip, Box } from "@mui/material";

const industryKnowledgeSkills: { label: string }[] = [
  { label: "Progressive Web Application (PWAs)" },
  { label: "E-Commerce" },
  { label: "AWS EC2" },
  { label: "Optical Character Recognition (OCR)" },
  { label: "Full Stack Development" },
  { label: "Back End Development" },
  { label: "Front End Development" },
  { label: "OpenCV" },
  { label: "Payment Gateway" },
  { label: "Amazon EC2" },
  { label: "Api Development" },
  { label: "Creative visualization" },
  { label: "Programming" },
  { label: "Typescript" },
  { label: "Responsive Web Design" },
  { label: "Middleware" },
  { label: "Express.js" },
  { label: "Web Design" },
  { label: "Web Development" },
];
const toolsAndTechnologiesSkills: { label: string }[] = [
  { label: "Mern Stack" },
  { label: "Javascript" },
  { label: "Typescript" },
  { label: "React.js" },
  { label: "Next.js" },
  { label: "Node.js" },
  { label: "Cascading Style Sheets (CSS)" },
  { label: "Tailwind CSS" },
  { label: "HTML" },
  { label: "AWS Lambda" },
  { label: "REST APIs" },
  { label: "Firebase" },
  { label: "Database" },
  { label: "JSON Web Token (JWT)" },
  { label: "Nginx" },
  { label: "NestJS" },
  { label: "Python (Programming Language)" },
  { label: "MongoDB" },
  { label: "JSON" },
];
const interPersonalSkills: { label: string }[] = [
  { label: "Critical Thinking" },
  { label: "Creative Problem Solving" },
  { label: "Probleem Solving" },
  { label: "Team Work" },
];

const allSkills: {
  title: string;
  skills: { label: string }[];
  color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}[] = [
  {
    title: "Industry Knowledge",
    skills: industryKnowledgeSkills,
    color: "secondary",
  },
  {
    title: "Tools & Technologies",
    skills: toolsAndTechnologiesSkills,
    color: "success",
  },
  {
    title: "Inter Personal Skills",
    skills: interPersonalSkills,
    color: "info",
  },
];

export default function Skills_Component() {
  return (
    <div className="ml-7 my-10 flex flex-col gap-7 select-none">
      {allSkills.map((allSkillsEl, allSkillsEli) => {
        return (
          <div key={`${allSkillsEli}-${allSkillsEl.title}`}>
            <p>{allSkillsEl.title}</p>
            <hr className="my-[5px] border-t border-[#D9D9D9]" />
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
              className="select-none cursor-pointer"
            >
              {allSkillsEl.skills.map(
                (allSkillsDetailedEl, allSkillsDetailedEli) => {
                  return (
                    <Chip
                      key={allSkillsDetailedEli + allSkillsDetailedEl.label}
                      label={allSkillsDetailedEl.label}
                      color={allSkillsEl.color}
                    />
                  );
                }
              )}
            </Box>
          </div>
        );
      })}
    </div>
  );
}
