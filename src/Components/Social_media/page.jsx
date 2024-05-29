'use client';
import { useEffect, useRef, useState } from 'react';
import styles from "@/Components/Social_media/social.module.css"
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import Stairs from "@/Animations/Stairs";
import { useTransform, useScroll, motion } from 'framer-motion';

const videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
];

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function Home() {
  const gallery1 = useRef(null);
  const gallery2 = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: gallery1,
    offset: ['start end', 'end start']
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: gallery2,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;

  const y1 = useTransform(scrollYProgress1, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress1, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress1, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress1, [0, 1], [0, height * 3]);

  const y1_2 = useTransform(scrollYProgress2, [0, 1], [0, height * 2]);
  const y2_2 = useTransform(scrollYProgress2, [0, 1], [0, height * 3.3]);
  const y3_2 = useTransform(scrollYProgress2, [0, 1], [0, height * 1.25]);
  const y4_2 = useTransform(scrollYProgress2, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
  <>
      <Stairs/>
    <main className={styles.main}>
      <div className={styles.spacer}>
        <div className={styles.instagram}>Instagram</div>
      </div>
      <div ref={gallery1} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} videos={[videos[0], videos[1], videos[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} videos={[videos[3], videos[4], videos[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} videos={[videos[6], videos[7], videos[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} videos={[videos[9], videos[10], videos[11]]} y={y4} />
      </div>
      <div className={styles.spacer}>
        <div className={styles.instagram}>YouTube</div>
      </div>
      <div ref={gallery2} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y1_2} />
        <Column images={[images[3], images[4], images[5]]} y={y2_2} />
        <Column images={[images[6], images[7], images[8]]} y={y3_2} />
        <Column images={[images[9], images[10], images[11]]} y={y4_2} />
      </div>
      <div className={styles.spacer}>
        <div className={styles.instagram}>Thank you</div>
      </div>
    </main>
  </>
  );
}

const Column = ({ images = [], videos = [], y }) => {
  return (
    <motion.div 
      className={styles.column}
      style={{ y }}
    >
      {videos.length > 0 && videos.map((src, i) => (
        <div key={i} className={styles.videoContainer}>
          <video 
            src={`/video/${src}`}
            autoPlay
            loop
            muted
            className={styles.video}
          />
        </div>
      ))}
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image 
          className={styles.IamImage}
            src={`/image/${src}`}
            alt='image'
            fill
          />
        </div>
      ))}
    </motion.div>
  );
};
