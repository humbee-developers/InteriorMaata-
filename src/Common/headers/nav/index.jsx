"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import "./style.css";
import Popup from "@/Components/Popup/page";

const links = [
  // {
  //   title: "HOME",
  //   href: "/",
  // },
  {
    title: "About us",
    href: "/KnowAboutUs",
  },
  {
    title: "Services",
    href: "/Services",
  },

  {
    title: "PROJECTS",
    href: "/Projects",
  },

  {
    title: "HOW WE WORK",
    href: "/HowWeWork",
  },
  {
    title: "SHOP",
    href: "",
    comingSoon: true, // this indicates the coming soon text
  },
  {
    title: "CONNECT",
    href: "/Connect",
  },
];

export default function Index({ navLinkHandler, popupHandler }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <>
      <motion.div
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
        className="nav"
      >
        <div className="wrapper">
          <div className="container">
            <Body
              links={links}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
              handleNavLink={navLinkHandler}
              popupHandler={popupHandler}
            />
            <Footer />
          </div>
        </div>
      </motion.div>
    </>
  );
}
