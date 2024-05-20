"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
import HowWeWorkHeader from "@/Components/HowWeWorkHeader/page";
import HowWeWorkTimeline from "@/Components/HowWeWorkTimeline/page";
import HowWeWorkText from "@/Components/HowWeWorkText/page";
import ServicesCards from "@/Components/ServicesCards/page";
// import ScrollText from "@/Components/ScrollText/page";
import Services_Slider from "@/Components/Service_Slider/page";
import AboutUs_ourDesign from "@/Components/AboutUs_ourDesign/page";
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Stairs/>
        <HowWeWorkHeader />
        <HowWeWorkTimeline />
        {/* <ScrollText/> */}
         <AboutUs_ourDesign />
        <ServicesCards />
        <Services_Slider/>
        <HowWeWorkText />
      
    </>
  );
};

export default Page;
