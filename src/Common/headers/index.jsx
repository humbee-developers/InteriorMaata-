import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import NavSection from "./nav/index";
import nav_logo from "@/svgs/logo.svg";
import "./style1.css";

export default function NewNav() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isActive]);

  const handleNavLink = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="headerMain">
      <div
        className={`nav_logo_outer`}
        onClick={() => router.push("/")}
      >
        <Image
          src={nav_logo}
          alt="Description of the image"
          className="nav_logo"
        />
      </div>
      <div className={`header_sec ${isActive ? "menuOpen" : "menuClosed"}`}>
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
          {isActive && <NavSection navLinkHandler={handleNavLink} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
