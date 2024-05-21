"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
import HowWeWorkHeader from "@/Components/HowWeWorkHeader/page";
import HowWeWorkTimeline from "@/Components/HowWeWorkTimeline/page";
import HowWeWorkText from "@/Components/HowWeWorkText/page";
import TextRevel from "@/Animations/TextRevel/page";
import ServicesCards from "@/Components/ServicesCards/page";
// import ScrollText from "@/Components/ScrollText/page";
import Services_Slider from "@/Components/Service_Slider/page";
import AboutUs_ourDesign from "@/Components/AboutUs_ourDesign/page";
const Page = () => {
  const phrase = 'Get Your Home Designed In The Comfort Of Your Home Without Any Hassle. Our Team Of Excellent Designers Will Guide You In Designing Your Home Exactly The Way You Want.';
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
        <TextRevel phrase={phrase} />
        {/* <ScrollText/> */}
         <AboutUs_ourDesign />
        <ServicesCards />
        <Services_Slider/>
        <HowWeWorkText />
      
    </>
  );
};

export default Page;
