import Image from "next/image";
import React from "react";
import i0 from "@/images/teamCard1.png";
import i1 from "@/images/team2.png";
import i2 from "@/images/teamCard3.png";
import i3 from "@/images/teamcard4.png";
import i4 from "@/images/teamcard5.png";
import "./teamCard.css";

const images = [i0, i1, i2, i3, i4];

const Page = () => {
  return (
    <div>
      <section id="projects" className="c-section cc-projects">
        <div className="c-container">
          <div className="c-projects-layout">
            <div className="c-projects-wrapper-team">
              {images.map((image, index) => (
                <div key={index} className={`c-project cc-${index + 1}`}>
                  <Image src={image} alt="image" className="c-image-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
