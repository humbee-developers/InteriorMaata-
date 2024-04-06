"use client";
import React, { useEffect , useState } from "react";
import Stairs from "@/Animations/Stairs";
import Preloader from "@/Animations/preloader/index"
import { AnimatePresence } from "framer-motion";
import HomeBanner from "@/Components/Home_page_Banner/page";
import AboutUs_header from "@/Components/AboutUs_header/page";
import AboutUs_threeCards from "@/Components/AboutUs_threeCards/page";
import Marquee from "@/Components/Marquee/page";
import AboutUs_Carousel2 from "@/Components/AboutUs_Carousel2/page";
import AboutUs_flex from "@/Components/AboutUs_flex/page";
import AboutUsInfo from "@/Components/AboutUsInfo/page";
import AboutUs_ourDesign from "@/Components/AboutUs_ourDesign/page";
import Form from "@/Common/Form/page";
import Footer from "@/Common/Footer/page";
import BackgroundImage from "@/images/textureImage.png";
const Page = ({lData}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  function handleLoad(data) {
    console.log("data",data);
    setIsLoading(data);
  }

  return (
   <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
    {/* {isLoading && <Stairs />} */}
    
      <HomeBanner loadImage={handleLoad} />
      <div
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AboutUs_header />
        <AboutUs_threeCards />
        <Marquee />
        <AboutUs_Carousel2 />
        <AboutUs_flex />
        <AboutUsInfo />
        <AboutUs_ourDesign />
        <Form />
        <Footer />
      </div>
   </>
    
  );
};
export default Page;
