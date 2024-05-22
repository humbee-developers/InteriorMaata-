"use client";
import React, { useEffect, useRef } from "react";
import Stairs from "@/Animations/Stairs";
import HowWeWorkHeader from "@/Components/HowWeWorkHeader/page";
import HowWeWorkTimeline from "@/Components/HowWeWorkTimeline/page";
import HowWeWorkText from "@/Components/HowWeWorkText/page";
import TextRevel from "@/Animations/TextRevel/page";
import ServicesCards from "@/Components/ServicesCards/page";
import Services_Slider from "@/Components/Service_Slider/page";
import AboutUs_ourDesign from "@/Components/AboutUs_ourDesign/page";
import Lenis from "@studio-freight/lenis";

const Page = () => {
  const phrase = 'Get Your Home Designed In The Comfort Of Your Home Without Any Hassle. Our Team Of Excellent Designers Will Guide You In Designing Your Home Exactly The Way You Want.';
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with options similar to Locomotive Scroll
    const lenis = new Lenis({
      duration: 1.5, // Duration of the scroll animation
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
      <HowWeWorkHeader />
      <HowWeWorkTimeline />
      <TextRevel phrase={phrase} />
      <AboutUs_ourDesign />
      <ServicesCards />
      <Services_Slider />
      <HowWeWorkText />
    </>
  );
};

export default Page;
