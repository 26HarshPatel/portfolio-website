"use client";

import Deployment_Platforms_Component from "@/components/deployments";
import Skills_Component from "@/components/skills";
import Mui_Timeline_Component from "@/components/timeline";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="my-7 px-2 lg:px-10">
      {/* Image section */}
      <section className="flex justify-start gap-5 items-end flex-wrap ">
        <Image
          src={`/images/profile_pic_background_removed.png`}
          width={200}
          height={200}
          alt="Image is loading.."
          priority={true}
        />
        <div className="select-none">
          <p className="text-3xl font-semibold">Harsh Patel</p>
          <p>MERN FULL STACK DEVELOPER | DEPLOYMENT</p>
        </div>
      </section>
      <hr className="my-[5px] border-t border-[#D9D9D9]" />
      {/* Work Flow Section */}
      <section className="my-20">
        <h2 className="text-2xl">My Work Flow</h2>
        <div className="flex justify-start my-10">
          <Mui_Timeline_Component />
        </div>
      </section>{" "}
      <hr className="my-[5px] border-t border-[#D9D9D9]" />
      {/* Skills Section */}
      <section className="my-20">
        <h2 className="text-2xl">Skills</h2>
        <Skills_Component />
      </section>
      <section className="my-20">
        <h2 className="text-2xl">Deployment Platforms</h2>
        <Deployment_Platforms_Component />
      </section>
    </div>
  );
}
