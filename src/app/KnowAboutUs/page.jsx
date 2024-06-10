"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
import AboutusAnanya from "@/Components/AboutusAnanya/page"
import TeamsPage from "@/Components/TPage/page";
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Stairs/>
      <AboutusAnanya/>
        <TeamsPage />
    </>
     
  );
};

export default Page;
