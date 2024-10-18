"use client";
import React, { useEffect, useRef } from "react";
import Stairs from "@/Animations/Stairs";
import ContactUsImage from "@/Components/ContactUs_Image/page";
import Lenis from "@studio-freight/lenis";
const Page = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with options similar to Locomotive Scroll
    const lenis = new Lenis({
      duration: 1.2, // Duration of the scroll animation
      easing: (t) => 1 - Math.pow(1 - t, 3),
      // easing: (t) => Math.min(1 - Math.pow(2, -10 * t)), // Easing function for a smooth scroll
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
      touchMultiplier: 2, // Adjust the touch sensitivity
    });

    // Function to continuously update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Stairs />
      <ContactUsImage />
    </>
  );
};

export default Page;
