"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
import KnowAboutUsHeader from "@/Components/KnowAboutUsHeader/page"
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
      <KnowAboutUsHeader/>
        <TeamsPage />
    </>
     
  );
};

export default Page;
