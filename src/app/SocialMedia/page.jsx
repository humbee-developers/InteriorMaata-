"use client";
import React, { useEffect } from "react";
import SocialMedia from "@/Components/Social_media/page";
const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <SocialMedia />
    </>
  );
};

export default page;
