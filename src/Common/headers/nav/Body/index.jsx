import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import "./style4.css";
import { blur, translate } from "../../anim";
import nav_logo from "@/svgs/logo.svg";
import Image from "next/image";
import Popup from "@/Components/Popup/page";

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  handleNavLink,
}) {
  const [popup, setPopup] = useState(false);
  console.log("popup", popup);
  const router = useRouter();
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
          const { title, href, comingSoon } = link;
          console.log("index: " + index);
          return (
            <Link
              key={`l_${index}`}
              href={href}
              onClick={() => handleNavLink(handleNavLink)}
            >
              <motion.p
                onMouseOver={() => {
                  setSelectedLink({ isActive: true, index });
                }}
                onMouseLeave={() => {
                  setSelectedLink({ isActive: false, index });
                }}
                variants={blur}
                onClick={() => comingSoon && index === 4 && setPopup(true)}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? "open"
                    : "closed"
                }
              >
                {getChars(title)}
                {/* {index === 4 ? <p onClick={setPopup(true)}></p> : null} */}
                {/* {comingSoon && (
                  <span className="coming-soon">(Coming Soon)</span>
                )} */}
              </motion.p>
            </Link>
          );
        })}
      </div>
      {popup && <Popup />}
    </>
  );
}
