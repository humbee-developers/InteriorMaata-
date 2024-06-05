import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import "./style4.css";
import { blur, translate } from "../../anim";
import nav_logo from "@/svgs/logo.svg";
import Image from "next/image";
import AboutUsPopup from "@/Components/Aboutus_Popup/page";
import ProjectsPopup from "@/Components/Projects_Popup/page";

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  handleNavLink,
  hoverPopupHandler,
  setHoverPopup,
  hoverPopupContent,
  hoverPopup,
  hoverPopupIndex,
  popupHandler,
}) {
  const router = useRouter();
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false); // State to track if the link is hovered
  const [noExitAnimation, setNoExitAnimation] = useState(false); // State to skip exit animation
  const popupHideTimeout = useRef(null); // Ref to store the timeout ID

  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit={noExitAnimation ? "" : "exit"} // Conditionally skip exit animation
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const handleMouseLeave = () => {
    if (!isPopupHovered && !isLinkHovered) {
      // Set a timeout to hide the popup after a delay (e.g., 300ms)
      popupHideTimeout.current = setTimeout(() => {
        setSelectedLink({ isActive: false, index: null });
        setHoverPopup(false);
      }, 300);
    }
  };

  const handleMouseEnterLink = (index) => {
    setSelectedLink({ isActive: true, index });
    setIsLinkHovered(true); // Set link hover state to true
    clearTimeout(popupHideTimeout.current); // Clear any existing timeout
  };

  const handleMouseLeaveLink = () => {
    setIsLinkHovered(false); // Set link hover state to false
    handleMouseLeave();
  };

  const handleMouseEnterPopup = () => {
    // If the mouse enters the popup during the delay, cancel the timeout
    if (popupHideTimeout.current) {
      clearTimeout(popupHideTimeout.current);
    }
    setIsPopupHovered(true);
  };

  const handleMouseLeavePopup = () => {
    setIsPopupHovered(false);
    handleMouseLeave();
  };

  return (
    <>
      <div className="nav_body">
        <div className={`navOpenLogo`} onClick={() => router.push("/")}>
          <Image
            src={nav_logo}
            alt="Description of the image"
            className="navOpenLogo_img"
          />
        </div>
        {links.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              key={`l_${index}`}
              href={href}
              onClick={(e) => {
                e.preventDefault();

                 index === 3 && popupHandler();
                if (title !== "About us" && title !== "PROJECTS") {
                  setNoExitAnimation(false); // Enable exit animation for other links 
                  handleNavLink();
                  router.push(href);
                  popupHandler;
                } else {
                  setNoExitAnimation(true); // Disable exit animation for "About us" and "PROJECTS"
                  setHoverPopup(true);
                  hoverPopupHandler(title);
                }
              
              }}
            >
              <motion.p
                onMouseOver={() => {
                  handleMouseEnterLink(index);
                  if (title === "About us" || title === "PROJECTS") {
                    setHoverPopup(true);
                    hoverPopupHandler(title);
                  }
                }}
                onMouseLeave={handleMouseLeaveLink}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? "open"
                    : "closed"
                }
                className={
                  hoverPopup && hoverPopupIndex === index ? "blurred" : ""
                }
              >
                {getChars(title)}
              </motion.p>
            </Link>
          );
        })}
      </div>
      {hoverPopup && (
        <div
          onMouseOver={handleMouseEnterPopup}
          onMouseLeave={handleMouseLeavePopup}
        >
          {selectedLink.index ===
            links.findIndex((link) => link.title === "About us") && (
            <AboutUsPopup
              content={hoverPopupContent}
              handleNavLink={handleNavLink}
            />
          )}
          {selectedLink.index ===
            links.findIndex((link) => link.title === "PROJECTS") && (
            <ProjectsPopup
              content={hoverPopupContent}
              handleNavLink={handleNavLink}
            />
          )}
        </div>
      )}
    </>
  );
}
