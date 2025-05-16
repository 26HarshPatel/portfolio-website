"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  const pathsArray: {
    label: string;
    pathName: string;
  }[] = [
    {
      label: "My Work",
      pathName: "/",
    },
    {
      label: "Contact Me",
      pathName: "/contact-me",
    },
  ];
  return (
    <div className="w-full py-3 bg-white">
      <div className="flex justify-end px-5 gap-4 max-w-5xl mx-auto">
        {pathsArray.map((pathObjEl, pathObjEli) => {
          return (
            <div
              key={pathObjEli}
              onClick={() => router.push(pathObjEl.pathName)}
              className="select-none cursor-pointer"
            >
              <span
                className={`${
                  pathObjEl.pathName === pathName
                    ? "text-[#437EFF]"
                    : "text-black"
                }`}
              >
                {pathObjEl.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
