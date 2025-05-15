"use client";

import "./timeLine.css";

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const MyWorkHistory: {
  title: string;
  isCurrent: boolean;
  startDate?: string;
  endDate?: string;
  position: string;
}[] = [
  {
    title: "Adhyayanyatra Edutech LLP",
    isCurrent: false,
    position: "Full Stack Mern Web Developer | Deployment",
  },
  {
    title: "Inheritx Solution Pvt Ltd.",
    isCurrent: true,
    position: "Full Stack Mern Web Developer ",
  },
];

export default function Mui_Timeline_Component() {
  return (
    <Timeline position="right" sx={{ pl: 0, ml: 0 }}>
      {MyWorkHistory.map((workEl, workEli) => {
        return (
          <TimelineItem key={`${workEli}-${workEl.title}`} sx={{ px: 0 }}>
            <TimelineSeparator>
              <TimelineDot />
              {workEli < MyWorkHistory.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              color={`${workEl.isCurrent ? "#437EFF" : "#000000"}`}
            >
              <p className="ml-4 text-lg font-semibold">{workEl.title}</p>
              <p className="ml-4 text-xs font-light">{workEl.position}</p>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
