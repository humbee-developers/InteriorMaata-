"use client"
import React ,{useEffect} from 'react'
import Stairs from "@/Animations/Stairs"
import ContactUsImage from "@/Components/ContactUs_Image/page"
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Stairs/>
        <ContactUsImage />
     
    </>
  )
}

export default Page