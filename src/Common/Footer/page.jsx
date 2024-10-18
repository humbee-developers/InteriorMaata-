import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import facebook_logo from "@/svgs/facebook.svg";
import Instagram_logo from "@/svgs/instagram.svg";
import youtube_logo from "@/svgs/youtube.svg";
import whatsapp_logo from "@/svgs/whatsapp.svg";
import linkedin_logo from "@/svgs/linkedin.svg";
import ScrollToTop from "react-scroll-to-top";
import styles from "@/Common/Footer/Footer.module.css";
import "./Scroll_To_Top.css";
import svg_icon from "@/svgs/arrow_thin.svg";
import Popup from "@/Components/Popup/page";

const Footer = () => {
  const [popup, setPopup] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const handlePopup = () => {
    setPopup(true);
  };
  const handlePopupClose = () => {
    setPopup(false);
  };

  return (
    <div className={styles.footerMain}>
      <div className={styles.footerPopup}>
        {popup && <Popup close={handlePopupClose} />}
      </div>
      <div className={styles.Footer_Section}>
        <div className={styles.Footer_Content}>
          <div className={styles.justRelative}>
            <a href="tel:+917404040286" className={styles.phone_no}>
              +917404040286
            </a>
            <br />
            <a href="tel:0256-4000981" className={styles.phone_no}>
              0256-4000981
            </a>

            <Link
              href="https://maps.app.goo.gl/jeRd13E7QPZQiKZi9"
              target="_blank"
            >
              <div className={styles.footer_address}>
                4th floor,
                <br /> Karamdham Complex
                <br /> Near Akota Atithi Gruh,
                <br /> Akota, Vadodara
                <div className={styles.justTesting}>
                  <Image
                    src={svg_icon}
                    alt="none"
                    className={styles.footer_icon}
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.footer_Second}>
            <ul className={styles.footerUl}>
              <li className={styles.footer_Search}>
                <Link href="/KnowAboutUs">About Us</Link>
              </li>
              <li className={styles.footer_home}>
                <Link href="/Services">Services</Link>
              </li>
              <li className={styles.footer_Search}>
                <Link href="/Projects">Projects</Link>
              </li>
            </ul>
            <ul className={styles.footerUl}>
              <li className={styles.footer_Search}>
                <Link href="/SocialMedia">Social Media</Link>
              </li>
              <li className={styles.footer_home}>
                <div onClick={handlePopup}>Shop</div>
              </li>
              <li className={styles.footer_Search}>
                <Link href="/Connect">Connect</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_copyright}>
          <div className={styles.footerTagline}>
            <p>
              Copyright &copy; 2024 Interior maata, All Right Reserved. Designed
              & Developed by{" "}
              <Link
                className={styles.adds}
                target="_blank"
                href="https://www.humbeestudio.com/"
              >
                H/dS
              </Link>
            </p>
          </div>
          <div className={styles.footer_social_media}>
            <div className={styles.footer_Facebook}>
              <Link
                href="https://www.facebook.com/interiormaata"
                target="_blank"
              >
                <Image
                  className={styles.footer_icons}
                  src={facebook_logo}
                  alt="none"
                />
              </Link>
            </div>
            <div className={styles.footer_insta}>
              <Link
                href="https://www.instagram.com/interiormaata/"
                target="_blank"
              >
                <Image
                  className={styles.footer_icons}
                  src={Instagram_logo}
                  alt="none"
                />{" "}
              </Link>
            </div>
            <div className={styles.footer_youtube}>
              <Link href="https://wa.me/8866508378 " target="_blank">
                <Image
                  className={styles.footer_icons}
                  src={whatsapp_logo}
                  alt="none"
                />
              </Link>
            </div>
            <div className={styles.footer_whatsapp}>
              <Link
                href="https://www.youtube.com/c/interiormaata"
                target="_blank"
              >
                <Image
                  className={styles.footer_icons}
                  src={youtube_logo}
                  alt="none"
                />
              </Link>
            </div>
            <div className={styles.footer_linkedin}>
              <Link
                href="https://www.linkedin.com/in/ananya-bhattacharjee-3a5383135/"
                target="_blank"
              >
                <Image
                  className={styles.footer_icons}
                  src={linkedin_logo}
                  alt="none"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footer_last_Section}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.9 }}
          >
            <HeadingTextAnimation heading={"interior माता"} />
          </motion.div>
        </div>
      </div>
      <div>
        <ScrollToTop smooth />
      </div>
    </div>
  );
};

export default Footer;
