"use client";
import React, { useEffect, useState, useRef } from "react";
import Preloader from "@/Animations/preloader/index";
import { AnimatePresence } from "framer-motion";
import HomeBanner from "@/Components/Home_page_Banner/page";
import AboutUs_header from "@/Components/AboutUs_header/page";
import TextRevel from "@/Animations/TextRevel/page";
import AboutUs_threeCards from "@/Components/AboutUs_threeCards/page";
import AboutUs_Carousel2 from "@/Components/AboutUs_Carousel2/page";
import AboutUs_flex from "@/Components/AboutUs_flex/page";
import MarqueeTest from "@/Components/MarqueeTest/page"
import AboutUsInfo from "@/Components/AboutUsInfo/page";
import NewRevel from "@/Animations/newRevel/page";
// import AboutUs_ourDesign from "@/Components/AboutUs_ourDesign/page";
import "./home.css"
import Lenis from "@studio-freight/lenis";
const Page = ({ lData }) => {
  const paragraph = 'INTERIORMAATA STUDIO : STEP INTO A REALM WHERE TRADITION DANCE WITH MODERN MINIMALISM, CREATING SPACES THAT RESONATE WITH SOULFUL ELEGANCE';
  const [isLoading, setIsLoading] = useState(true);
  const [isCounter,setCounter]= useState  (0)
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  // const lenisRef = useRef(null);
  // useEffect(() => {
  //   // Initialize Lenis with options similar to Locomotive Scroll
  //   const lenis = new Lenis({
  //     duration: 1.2, // Duration of the scroll animation
  //     easing: (t) => 1 - Math.pow(1 - t, 3), 
  //     // easing: (t) => Math.min(1 - Math.pow(2, -10 * t)), // Easing function for a smooth scroll
  //     smooth: true,
  //     direction: "vertical",
  //     gestureDirection: "vertical",
  //     smoothTouch: true,
  //     touchMultiplier: 2,  // Adjust the touch sensitivity
  //   });

  //   // Function to continuously update Lenis
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   lenisRef.current = lenis;

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  
  function handleLoad(data) {
    console.log("data", data);
    setIsLoading(data);
  }
  function handleCounter(data) {
    console.log("cc", data);
    setCounter(data);
  }
  

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader counter={isCounter} />}
      </AnimatePresence>
      <HomeBanner loadImage={handleLoad} counter={handleCounter} />
    
        <div className="bg">
        <AboutUs_header />
        {/* <TextRevel phrase={phrase} /> */}
        <NewRevel paragraph={paragraph}/>
        <AboutUs_threeCards />
        <MarqueeTest/>
        <AboutUs_Carousel2 />
        <AboutUs_flex />
        <AboutUsInfo />
        </div>
    </>
  );
};
export default Page;
