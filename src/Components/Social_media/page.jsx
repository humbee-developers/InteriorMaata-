"use client";
import { useEffect, useRef, useState } from "react";
import styles from "@/Components/Social_media/social.module.css";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import "./social.css";
import Stairs from "@/Animations/Stairs";
import Button3 from "@/Common/Buttons/button9";
import Button4 from "@/Common/Buttons/button10";
import img1 from "@/images/img1.jpg";
import img2 from "@/images/img2.jpg";
import img3 from "@/images/img3.jpg";
import img4 from "@/images/img4.jpg";
import img5 from "@/images/img5.jpg";
import img6 from "@/images/img6.jpg";
import img7 from "@/images/img7.jpg";
import img8 from "@/images/img8.jpg";
import img9 from "@/images/img9.jpg";
import img10 from "@/images/img10.jpg";
import img11 from "@/images/img11.jpg";
import i1 from "@/images/1.jpg";
import i2 from "@/images/2.jpg";
import i3 from "@/images/3.jpg";
import i4 from "@/images/4.jpg";
import i5 from "@/images/5.jpg";
import i6 from "@/images/6.jpg";
import i7 from "@/images/7.jpg";
import i8 from "@/images/8.jpg";
import i9 from "@/images/9.jpg";
import i10 from "@/images/10.jpg";
import i11 from "@/images/11.jpg";
import i12 from "@/images/12.jpg";

import logo1 from "@/svgs/westside.svg";
import logo2 from "@/svgs/boredMonkey.svg";
import logo3 from "@/svgs/borosil.svg";
import logo4 from "@/svgs/flybed.svg";
import logo5 from "@/svgs/pg.svg";
import logo6 from "@/svgs/royaletuche.svg";
import logo7 from "@/svgs/febindia.svg";
import logo8 from "@/svgs/intel.svg";
import logo9 from "@/svgs/pepperfry.svg";
import logo10 from "@/svgs/ica.svg";

import { useTransform, useScroll, motion } from "framer-motion";

const videos = [
  "videonew10.mp4",
  "videonew11.mp4",
  "videonew12.mp4",
  "videonew1.mp4",
  "videonew2.mp4",
  "videonew3.mp4",
  "videonew4.mp4",
  "videonew5.mp4",
  "videonew6.mp4",
  "videonew7.mp4",
  "videonew8.mp4",
  "videonew9.mp4",
];

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img9,
  img10,
  img11,
];

const image = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12];

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
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: gallery2,
    offset: ["start end", "end start"],
  });

  const { height, width } = dimension;

  const y1 = useTransform(scrollYProgress1, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress1, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress1, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress1, [0, 1], [0, height * 3]);

  const y1_2 = useTransform(
    scrollYProgress2,
    [0, 1],
    [0, width < 575 ? height * 2 : height * 2]
  );
  const y2_2 = useTransform(
    scrollYProgress2,
    [0, 1],
    [0, width < 575 ? height * 2 : height * 3.3]
  );
  const y3_2 = useTransform(
    scrollYProgress2,
    [0, 1],
    [0, width < 575 ? height * 2 : height * 1.25]
  );
  const y4_2 = useTransform(
    scrollYProgress2,
    [0, 1],
    [0, width < 575 ? height * 2 : height * 3]
  );

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
      <Stairs />
      <main className={styles.main}>
        <div className={styles.spacer}>
          <div className={styles.instagram}>
            INSTAGRAM
            <br />
            <span className={styles.InstaTitle}>
              Peek into Perfection with Interior maata
            </span>
          </div>

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
        <div className={styles.outerFirst}>
          <div ref={gallery1} className={styles.gallery}>
            <Column images={[images[0], images[1], images[2]]} y={y1} />
            <Column videos={[videos[0], videos[1], videos[2]]} y={y2} />
            <Column images={[images[6], images[7], images[8]]} y={y3} />
            <Column videos={[videos[3], videos[4], videos[5]]} y={y4} />
          </div>
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
        <div className={styles.outerFirst}>
          <div ref={gallery2} className={styles.gallery}>
            <Column
              images={[image[0], image[1], image[2], image[11]]}
              y={y1_2}
              links={[
                youtubeLinks[0],
                youtubeLinks[1],
                youtubeLinks[2],
                youtubeLinks[11],
              ]}
            />
            <Column
              images={[image[3], image[4], image[5], image[0]]}
              y={y2_2}
              links={[
                youtubeLinks[3],
                youtubeLinks[4],
                youtubeLinks[5],
                youtubeLinks[0],
              ]}
            />
            <Column
              images={[image[6], image[7], image[8], image[0]]}
              y={y3_2}
              links={[
                youtubeLinks[6],
                youtubeLinks[7],
                youtubeLinks[8],
                youtubeLinks[0],
              ]}
              className={width < 575 ? styles.hidden : ""}
            />
            <Column
              images={[image[9], image[10], image[11], image[0]]}
              y={y4_2}
              links={[
                youtubeLinks[9],
                youtubeLinks[10],
                youtubeLinks[11],
                youtubeLinks[0],
              ]}
              className={width < 575 ? styles.hidden : ""}
            />
          </div>
        </div>

        <div className={styles.spacerX} id="brands">
          <div className={styles.instagram1}>
            <p className={styles.center}>BRANDS WE WORKED WITH</p>
            <div className={styles.brands_outer}>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo1} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo2} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo3} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo4} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo5} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo6} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo7} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo8} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo9} alt="none" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo10} alt="none" />
              </div>
            </div>

            <p>THANK YOU!</p>
            <div className={styles.thanks_post}>
              <p className={styles.thanks_post_text}>
                stay social with us & get latest updates on interior trends and
                designs
              </p>
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
    <motion.div className={styles.column} style={{ y }}>
      {videos.length > 0 &&
        videos.map((src, i) => (
          <div key={i} className={styles.videoContainer}>
            <video
              src={`./video/${src}`}
              autoPlay
              playsInline
              loop
              muted
              className={styles.video}
            />
          </div>
        ))}
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer2}>
          {links[i] ? (
            <a href={links[i]} target="_blank" rel="noopener noreferrer">
              <Image className={styles.IamImage} src={src} alt="image" fill />
            </a>
          ) : (
            <Image className={styles.IamImage} src={src} alt="image" fill />
          )}
        </div>
      ))}
    </motion.div>
  );
};
