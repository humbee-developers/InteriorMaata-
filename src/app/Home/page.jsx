"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/Animations/preloader/index";
import { AnimatePresence } from "framer-motion";
// import HomeBanner from "@/Components/Home_page_Banner/page";
import KnowAboutUsHeader from "@/Components/KnowAboutUsHeader/page";
// import AboutUs_header from "@/Components/AboutUs_header/page";
import AboutUs_threeCards from "@/Components/AboutUs_threeCards/page";
import AboutUs_Carousel2 from "@/Components/AboutUs_Carousel2/page";
import AboutUs_flex from "@/Components/AboutUs_flex/page";
import MarqueeTest from "@/Components/MarqueeTest/page";
import AboutUsInfo from "@/Components/AboutUsInfo/page";
import NewRevel from "@/Animations/newRevel/page";
import "./home.css";

const HomeBanner = dynamic(() => import("@/Components/Home_page_Banner/page"));
const HomeBanner1 = dynamic(() =>
  import("@/Components/Home_page_Banner/page2")
);

const Page = ({ lData }) => {
  const paragraph =
    "INTERIOR MAATA STUDIO : STEP INTO A REALM WHERE TRADITION DANCE WITH MODERN MINIMALISM, CREATING SPACES THAT RESONATE WITH SOULFUL ELEGANCE";
  const [isLoading, setIsLoading] = useState(true);
  const [isCounter, setCounter] = useState(0);
  const [width, setWidth] = useState(null);
  

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Initialize width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
      {width && (
        <>
          {width > 575 ? (
            <HomeBanner loadImage={handleLoad} counter={handleCounter} />
          ) : (
            <HomeBanner1 loadImage={handleLoad} counter={handleCounter} />
          )}
        </>
      )}

      <div className="bg_Image" as="preload" priority="true">
        {/* <AboutUs_header /> */}
        <KnowAboutUsHeader />
        <NewRevel paragraph={paragraph} />
        <AboutUs_threeCards />
        <MarqueeTest />
        <AboutUs_Carousel2 />
        <AboutUs_flex />
        <AboutUsInfo />
      </div>
    </>
  );
};
export default Page;
