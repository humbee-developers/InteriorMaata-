"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs"
import ConsultancyHeader from "@/Components/ConsultancyHeader/page";
import ConsultancyTextFlex from "@/Components/ConsultancyTextFlex/page";
// import ConsultancyTab  from "@/Components/ConsultancyTab/page";
// import ConsultancyCarousal from "@/Components/ConsultancyCarousal/page"
import TextRevel from "@/Animations/TextRevel/page";
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
      <ConsultancyHeader />
      <ConsultancyTextFlex /> 
      <AboutUs_ourDesign />
      <TextRevel phrase={phrase} />
      
      {/* <ConsultancyTab/>
      <ConsultancyCarousal/> */}
   
    </>
  );
};

export default Page;
