import Image from "next/image";
import i0 from "@/images/teamCard1.png";
import i1 from "@/images/team2.png";
import i2 from "@/images/teamCard3.png";
import i3 from "@/images/teamcard4.png";
import i4 from "@/images/teamcard5.png";
import "./teamCard.css";
const Page = () => {
  return (
    <div>
      <section id="projects" className="c-section cc-projects">
        <div className="c-container">
          <div className="c-projects-layout">
            <div className="c-projects-wrapper-team">
              <div className="c-project cc-1">
                <Image src={i0} alt="image" className="c-image-contain" />
              </div>
              <div className="c-project cc-2">
                <Image src={i1} alt="image" className="c-image-contain" />
              </div>
              <div className="c-project cc-3">
                <Image src={i2} alt="image" className="c-image-contain" />
              </div>
              <div className="c-project cc-4">
                <Image src={i3} alt="image" className="c-image-contain" />
              </div>
              <div className="c-project cc-5">
                <Image src={i4} alt="image" className="c-image-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
