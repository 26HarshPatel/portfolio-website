import React from "react";
import { Chip, Box } from "@mui/material";

const deploymentPlatforms: { label: string }[] = [
  { label: "AWS EC2" },
  { label: "AWS Lambda" },
  { label: "Vercel" },
  { label: "Firebase" },
  { label: "Netlify" },
];

export default function Deployment_Platforms_Component() {
  return (
    <div className="ml-7 my-10 flex flex-col gap-7">
      <div>
        <hr className="my-[5px] border-t border-[#D9D9D9]" />
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
          className="select-none cursor-pointer"
        >
          {deploymentPlatforms.map(
            (deploymentPlatformsEl, deploymentPlatformsEli) => {
              return (
                <Chip
                  key={deploymentPlatformsEli + deploymentPlatformsEl.label}
                  label={deploymentPlatformsEl.label}
                  color="warning"
                />
              );
            }
          )}
        </Box>
      </div>
    </div>
  );
}
