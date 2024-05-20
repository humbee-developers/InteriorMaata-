import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./style.css";

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let direction = 1; // 1 = forward, -1 = backward scroll

    const roll1 = roll(".rollingText", { duration: 90 }),
          scroll = ScrollTrigger.create({
            onUpdate(self) {
              if (self.direction !== direction) {
                direction *= -1;
                gsap.to(roll1, { timeScale: direction, overwrite: true });
              }
            }
          });

    function roll(targets, vars) {
      vars = vars || {};
      vars.ease || (vars.ease = "none");
      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 90);
        }
      }),
        elements = gsap.utils.toArray(targets),
        clones = elements.map(el => {
          let clone = el.cloneNode(true);
          el.parentNode.appendChild(clone);
          return clone;
        }),
        positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], { overwrite: false, top: el.offsetTop }));
      positionClones();
      elements.forEach((el, i) => tl.to([el, clones[i]], { xPercent: -100, ...vars }, 0));
      window.addEventListener("resize", () => {
        let time = tl.totalTime();
        tl.totalTime(0);
        positionClones();
        tl.totalTime(time);
      });
      return tl;
    }
  }, []);

  return (
    <div>
      <div className="wrapperRollingText">
        <div className="rollingText text">
          MOODBOARD • MOODBOARD • MOODBOARD • MOODBOARD • MOODBOARD • MOODBOARD • MOODBOARD • MOODBOARD • MOODBOARD •
        </div>
      </div>
    </div>
  );
}

export default Page;
