"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs"
import ConsultancyHeader from "@/Components/ConsultancyHeader/page";
import ConsultancyTextFlex from "@/Components/ConsultancyTextFlex/page";
// import ConsultancyTab  from "@/Components/ConsultancyTab/page";
// import ConsultancyCarousal from "@/Components/ConsultancyCarousal/page"
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
      <ConsultancyHeader />
      <ConsultancyTextFlex /> 
      <AboutUs_ourDesign />
      {/* <ConsultancyTab/>
      <ConsultancyCarousal/> */}
   
    </>
  );
};

export default Page;
