import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "@/Animations/Stairs/anim";
import "./stairs.css";
import styles from "@/Animations/Stairs/css.module.css"
const words = ["interiorमाता"];
export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useEffect(() => {
    if (index === words.length - 1) return;
    const timeoutId = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 500 : 150
    );
    return () => clearTimeout(timeoutId);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.4 },
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
        <div className={styles.counterContainer}>
          <motion.p
            className={styles.preloader_text}
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </div>
      )}
    </motion.div>
  );
}
