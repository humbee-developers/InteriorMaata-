"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs"
import ServicesCards from "@/Components/ServicesCards/page";
import Slider from "@/Components/Project_Slider/page"
// import ServicesFlex from "@/Components/ServicesFlex/page";
const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  
  return (
    <div>

    <Stairs>
      <ServicesCards />
      {/* <ServicesFlex /> */}
      </Stairs>
    </div>
  );
};

export default page;
