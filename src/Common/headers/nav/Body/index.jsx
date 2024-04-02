import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import "./style4.css";
import { blur, translate } from "../../anim";
import nav_logo from "@/svgs/logo.svg";
import Image from "next/image";

export default function Body({ links, selectedLink, setSelectedLink, handleNavLink }) {
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
    <div className="nav_body">
      <div className={`navOpenLogo`}>
        <Image
          src={nav_logo}
          alt="Description of the image"
          className="navOpenLogo_img"
        />
      </div>
      {links.map((link, index) => {
        const { title, href, comingSoon } = link;
        return (
          <Link key={`l_${index}`} href={href} onClick={() => handleNavLink(handleNavLink)}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
            >
              {getChars(title)}
              {comingSoon && <span className="coming-soon">(Coming Soon)</span>}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
