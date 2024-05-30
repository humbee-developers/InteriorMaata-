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
  popupHandler
}) {
  const router = useRouter();
  const [isPopupHovered, setIsPopupHovered] = useState(false);
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
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const handleMouseLeave = () => {
    if (!isPopupHovered) {
      // Set a timeout to hide the popup after a delay (e.g., 300ms)
      popupHideTimeout.current = setTimeout(() => {
        setSelectedLink({ isActive: false, index: null });
        setHoverPopup(false);
      }, 300);
    }
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
                handleNavLink();
                router.push(href);
              }}
            >
              <motion.p
                onMouseOver={() => {
                  setSelectedLink({ isActive: true, index });
                  if (title === "About us" || title === "PROJECTS") {
                    setHoverPopup(true);
                    hoverPopupHandler(title);
                  }
                }}
                onMouseLeave={handleMouseLeave}
                variants={blur}
                onClick={index === 3 && popupHandler}
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
          onMouseEnter={handleMouseEnterPopup}
          onMouseLeave={handleMouseLeavePopup}
          animate={
            selectedLink.isActive && selectedLink.index 
              ? "open"
              : "closed"
          }
        >
          {selectedLink.index === links.findIndex(link => link.title === "About us") && (
            <AboutUsPopup content={hoverPopupContent} />
          )}
          {selectedLink.index === links.findIndex(link => link.title === "PROJECTS") && (
            <ProjectsPopup content={hoverPopupContent} />
          )}
        </div>
      )}
    </>
  );
}
