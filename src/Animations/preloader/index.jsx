"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anime";
import Image from "next/image";
import logo from "@/svgs/logoloader.svg";
import styles from "./style.module.css";

const words = ["interiorमाता"];

export default function Index({ }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [counter, setCounter] = useState(0);
  const [displayText, setDisplayText] = useState("LOADING");
  

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (counter < 100) {
        setCounter(counter + 1);
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [counter]);



  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText("LAUNCHING 3D");
    }, 2600); 
    return () => clearTimeout(timeout);
  }, []); 

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.35, ease: [0.76, 0, 0.24, 1], delay: 2.95 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <div className={styles.text}>
          <motion.div
            className={styles.textInner}
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <Image src={logo} alt="image" />
            {words[index]}
          </motion.div>
          </div>
          <div>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </div>
        </>
      )}
      <div className={styles.counterOuter}>
        <div className={styles.active} style={{ width: `${counter}%`, backgroundColor: "#bbbcc0", height: "15px", position: "relative" }}>
          <div className={styles.percentageCounter}>{counter}%</div>
        </div>
      </div>

     <div className={styles.moment}>
     <div className={styles.loading}>{displayText}</div>
     <div className={styles.loader}>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
</div>
     </div>


    </motion.div>
  );
}
