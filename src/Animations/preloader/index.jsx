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

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
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
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
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
          <motion.div
            className={styles.text}
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <Image src={logo} alt="image" />
            {words[index]}
          </motion.div>
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
        <div className={styles.active} style={{ width: `${counter}%`, backgroundColor: "red", height: "20px", position: "relative" }}>
          <div className={styles.percentageCounter}>{counter}%</div>
        </div>
      </div>
    </motion.div>
  );
}
