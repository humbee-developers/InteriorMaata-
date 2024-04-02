"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs"
import ConsultancyHeader from "@/Components/ConsultancyHeader/page";
import ConsultancyTextFlex from "@/Components/ConsultancyTextFlex/page";
import ConsultancyTab  from "@/Components/ConsultancyTab/page";
import ConsultancyCarousal from "@/Components/ConsultancyCarousal/page"
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
    <Stairs>
      <ConsultancyHeader />
      <ConsultancyTextFlex /> 
      <ConsultancyTab/>
      <ConsultancyCarousal/>
    </Stairs>
    </div>
  );
};

export default Page;
