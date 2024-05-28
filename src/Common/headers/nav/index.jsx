import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import "./style.css";

const links = [
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
  // {
  //   title: "HOW WE WORK",
  //   href: "/HowWeWork",
  // },
  {
    title: "SHOP",
    href: "", // Updated with actual link
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
  const [hoverPopup, setHoverPopup] = useState(false);
  const [hoverPopupContent, setHoverPopupContent] = useState(null);
  const [hoverPopupIndex, setHoverPopupIndex] = useState(null);

  const hoverPopupHandler = (title) => {
    if (title === "About us") {
      setHoverPopupContent([
        { text: "How We Work", href: "/HowWeWork" },
        { text: "About Ananya", href: "/KnowAboutUs" },
        { text: "About Team", href: "/KnowAboutUs" },
        { text: "Social Media", href: "/" },
        { text: "Brands We Work", href: "/" },

      ]);
    } else if (title === "PROJECTS") {
      setHoverPopupContent([
        { text: "Interior", href: "/Projects" },
        { text: "Architecture", href: "/Projects" },
        { text: "Commercials", href: "/Projects" },
      ]);
    }
    setHoverPopupIndex(links.findIndex((link) => link.title === title));
  };

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
              hoverPopupHandler={hoverPopupHandler}
              setHoverPopup={setHoverPopup}
              popupHandler={popupHandler}
              hoverPopupContent={hoverPopupContent}
              hoverPopup={hoverPopup}
              hoverPopupIndex={hoverPopupIndex}
            />
          </div>
        </div>
            <Footer />
      </motion.div>
    </>
  );
}
