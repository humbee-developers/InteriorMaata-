"use client";
import React, { useEffect, useState } from "react";
import Stairs from "@/Animations/Stairs";
import ProjectPage from "@/Components/ProjectPage/page";
import Project_Flex from "@/Components/Project_brands/page";
import Project_Slider from "@/Components/Project_Slider/page";

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
      <ProjectPage />
      <Project_Flex />
      <Project_Slider />
    </div>
  );
};

export default Page;
