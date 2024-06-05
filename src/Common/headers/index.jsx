import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import NavSection from "./nav/index";
import nav_logo from "@/svgs/logo1.svg";
import "./style1.css";
import Popup from "@/Components/Popup/page";

export default function NewNav() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [popup, setPopup] = useState(false);
  const navRef = useRef();
  console.log("popup", popup);

  // useEffect(() => {
  //   if (isActive) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [isActive]);

  const handleNavLink = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePopup = () => {
    setPopup(true);
  };
  const closePopup = () => {
    setPopup(false);
  };
  console.log("child", popup);

  return (
    <div className="headerMain">
      {popup && <Popup close={closePopup} />}
      <div className={`nav_logo_outer`} onClick={() => router.push("/")}>
        <Image
          src={nav_logo}
          alt="Description of the image"
          className="nav_logo"
        />
      </div>
      <div
        ref={navRef}
        className={`header_sec ${isActive ? "menuOpen" : "menuClosed"}`}
      >
        <div className="bar">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="new_header_el"
          >
            <div
              className={`${"burger"} ${isActive ? "burgerActive" : ""}`}
            ></div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && (
            <NavSection
              navLinkHandler={handleNavLink}
              popupHandler={handlePopup}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
