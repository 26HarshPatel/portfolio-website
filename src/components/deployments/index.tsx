import React from "react";
import { Chip, Box } from "@mui/material";

const deploymentPlatforms: { label: string }[] = [
  { label: "Reactjs" },
  { label: "Nodejs" },
  { label: "Nextjs" },
  { label: "Typescript" },
  { label: "Javascript" },
  { label: "Critical Problem Solving" },
];

export default function Deployment_Platforms_Component() {
  return (
    <div className="ml-7 my-10 flex flex-col gap-7">
      <div>
        {/* <p></p> */}
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
                  color="primary"
                />
              );
            }
          )}
        </Box>
      </div>
    </div>
  );
}
