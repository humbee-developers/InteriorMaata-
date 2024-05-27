import React from "react";
import Link from "next/link";
import styles from "@/Components/Projects_Popup/projectsPopup.module.css"

export default function ProjectsPopup({ content }) {
  if (!content) return null;

  return (
    <div className={styles.popup}>
      {content.map((item, index) => (
        <div key={index} className={styles.popup_item}>
          <Link className={styles.link_text} href={item.href}>
            {item.text}
          </Link>
        </div>
      ))}
    </div>
  );
}
