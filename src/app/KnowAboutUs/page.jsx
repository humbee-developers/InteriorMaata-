"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
// import AboutusAnanya from "@/Components/AboutusAnanya/page"
import AboutusAnanya from "@/Components/AboutusAnanya/page";
import TeamsPage from "@/Components/TPage/page";
import Ananya from "@/Components/Ananya/page"
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
      <Ananya/>
      {/* <AboutusAnanya/> */}
      {/* <AboutusAnanya/> */}
        <TeamsPage />
    </>
  );
};

export default Page;
