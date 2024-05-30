'use client';
import { useEffect, useRef, useState } from 'react';
import styles from "@/Components/Social_media/social.module.css"
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import Stairs from "@/Animations/Stairs";
import Button3 from "@/Common/Buttons/button9";
import Button4 from "@/Common/Buttons/button10";


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
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",

];


const image = [
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

const youtubeLinks = [
  "https://www.youtube.com/watch?v=OnPoeKh4fVI",
  "https://www.youtube.com/watch?v=cqFI4btKywA",
  "https://www.youtube.com/watch?v=r-5bEF8OO-0",
  "https://www.youtube.com/watch?v=Bp0b5sRTYZ4",
  "https://www.youtube.com/watch?v=HtA1pzYJlAM",
  "https://www.youtube.com/watch?v=LEFk_6kdIck",
  "https://www.youtube.com/watch?v=zdiOYYdyDLI",
  "https://www.youtube.com/watch?v=12rE2Qjp3jY",
  "https://www.youtube.com/watch?v=kpVrWzaChdc",
  "https://www.youtube.com/watch?v=wXSCvooa7EA",
  "https://www.youtube.com/watch?v=5-a_xNCk0fs",
  "https://www.youtube.com/watch?v=yR2U8iaQ3cE",
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
        <div className={styles.instagram}>INSTAGRAM</div>
        <div className={styles.data}>
          <div className={styles.dataOuter}>
            <div className={styles.dataHeading}>602</div>
            <div className={styles.dataName}>UPDATES</div>
          </div>
          <div className={styles.dataOuter}>
          <div className={styles.dataHeading}>246K</div>
            <div className={styles.dataName}>FOLLOWERS</div>
          </div>
          <div className={styles.dataOuter}>
          <div className={styles.dataHeading}> 3K+</div>
            <div className={styles.dataName}>AVG.LIKES</div>
          </div>
          <div className={styles.dataOuter}> 
          <div className={styles.dataHeading}>492%</div>
            <div className={styles.dataName}>AVG.ACTIVITY</div>
          </div>
        </div>
       
      </div>
      <div ref={gallery1} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]}  y={y1} />
        <Column  videos={[videos[3], videos[4], videos[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]}  y={y3} />
        <Column  videos={[videos[9], videos[10], videos[11]]} y={y4} />
      </div>
      <div className={styles.spacer1}>
        <div className={styles.instagram}>YOUTUBE</div>
        <div className={styles.data}>
          <div className={styles.dataOuter}>
            <div className={styles.dataHeading}>226</div>
            <div className={styles.dataName}>UPDATES</div>
          </div>
          <div className={styles.dataOuter}>
          <div className={styles.dataHeading}>830K</div>
            <div className={styles.dataName}>FOLLOWERS</div>
          </div>
          <div className={styles.dataOuter}>
          <div className={styles.dataHeading}>73M</div>
            <div className={styles.dataName}>AVG.LIKES</div>
          </div>
          <div className={styles.dataOuter}> 
          <div className={styles.dataHeading}>156%</div>
            <div className={styles.dataName}>AVG.ACTIVITY</div>
          </div>
        </div>
      </div>
      <div ref={gallery2} className={styles.gallery}>
        <Column images={[image[0], image[1], image[2]]} y={y1_2} links={[youtubeLinks[0], youtubeLinks[1], youtubeLinks[2]]} />
        <Column images={[image[3], image[4], image[5]]} y={y2_2} links={[youtubeLinks[3], youtubeLinks[4], youtubeLinks[5]]} />
        <Column images={[image[6], image[7], image[8]]} y={y3_2} links={[youtubeLinks[6], youtubeLinks[7], youtubeLinks[8]]} />
        <Column images={[image[9], image[10], image[11]]} y={y4_2} links={[youtubeLinks[9], youtubeLinks[10], youtubeLinks[11]]} />
      </div>
      <div className={styles.spacer}>
        <div className={styles.instagram}>
          <p>THANK YOU!</p>
          <div className={styles.thanks_post}>
            <p className={styles.thanks_post_text}>stay social with us & get latest updates on interior trends and designs</p>
           <div className={styles.thanks_instapost}>
            <Button3 button_text="Follow on instagram" />
            <Button4 button_text="subscribe on youtube" />
            </div>
          </div>
          </div>
      </div>
    </main>
  </>
  );
}

const Column = ({ images = [], videos = [], links = [], y }) => {
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
          {links[i] ? (
            <a href={links[i]} target="_blank" rel="noopener noreferrer">
              <img
                className={styles.IamImage}
                src={`/image/${src}`}
                alt='image'
                fill
              />
            </a>
          ) : (
            <img
              className={styles.IamImage}
              src={`/image/${src}`}
              alt='image'
              fill
            />
          )}
        </div>
      ))}
    </motion.div>
  );
};
