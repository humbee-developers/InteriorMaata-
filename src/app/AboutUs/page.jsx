"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <Stairs/>
    </div>
  );
};

export default page;
