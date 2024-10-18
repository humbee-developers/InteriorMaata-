import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import styles from "@/Components/Aboutus_Popup/hoverpopup.module.css";

export default function ProjectsPopup({ content, handleNavLink }) {
  const router = useRouter();

  if (!content) return null;

  const handleClick = (e, href) => {
    e.preventDefault();
    handleNavLink();
    setTimeout(() => {
      router.push(href); // Navigate without full page reload
    }, 100); // Adjust the timeout to match the animation duration
  };

  return (
    <div className={styles.popup}>
      {content.map((item, index) => (
        <div key={index} className={styles.popup_item}>
          <Link href={item.href} onClick={(e) => handleClick(e, item.href)}>
            <span className={styles.link_text}>{item.text}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}