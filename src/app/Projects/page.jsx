"use client"
import React , {useEffect , useRef} from 'react'
import Stairs from "@/Animations/Stairs"
import ProjectPage from "@/Components/ProjectPage/page"
import Project_Flex from "@/Components/Projects_Flex/page"
import Project_Slider from "@/Components/Project_Slider/page"
import Lenis from "@studio-freight/lenis";
const Page = () => {
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
  //     touchMultiplier: 2, // Adjust the touch sensitivity
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
  return (
    <div>
    <Stairs/>
      <ProjectPage/>
      <Project_Flex />  
      <Project_Slider />
    </div>
  )
}

export default Page