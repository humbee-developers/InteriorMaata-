"use client";
import React, { useEffect, useRef } from "react";
import Stairs from "@/Animations/Stairs";
import ProjectPage from "@/Components/ProjectPage/page";
import Project_Flex from "@/Components/Projects_Flex/page";
import Project_Slider from "@/Components/Project_Slider/page";
import Link from "next/link";
import ProjectLayout from "@/Components/ProjectLayout/ProjectLayout";

const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <Stairs />
      {/* <Link href={"/Projects/Interior"}>Link</Link>
      <Link href={"/Projects/Architecture"}>Link</Link>
      <Link href={"/Projects/Commercial"}>Link</Link>
      <ProjectLayout /> */}
      <ProjectPage />
      <Project_Flex />
      <Project_Slider />
    </div>
  );
};

export default Page;
