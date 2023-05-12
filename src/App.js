import { useEffect, useLayoutEffect, useRef } from "react";
import gsap, { Power3 } from 'gsap-trial';
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import Scrollbar from 'smooth-scrollbar';
import MouseFollower from "mouse-follower";

import Header from "./components/header/Header";
import FirstPool from "./components/first-pool/FirstPool";
import SecondPool from "./components/second-pool/SecondPool";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = () => {
  const wrapperRef = useRef()
  const smoother = useRef()

  useLayoutEffect(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      container: document.body,
      speed: 0.5,
      activeState: "mf-cursor-mousedown",
    });

    [...document.querySelectorAll("a"), ...document.querySelectorAll(".img-dot")].forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.addState('-pointer')
      })
      el.addEventListener('mouseleave', () => {
        cursor.removeState('-pointer');
      })
      el.addEventListener('mousedown', () => {
        cursor.addState('-down');
      })
      el.addEventListener('mouseup', () => {
        cursor.removeState('-down');
      })
    })

    // Scrollbar.init(wrapperRef.current, {
    //   damping: 0.07,
    //   thumbMinSize: "100",
    //   alwaysShowTracks: true,
    // })

    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
      });
      ScrollTrigger.create({
        trigger: '.first-pool-img-wrapper',
        pin: true,
        start: '0',
        end: '13000',
      });
      ScrollTrigger.create({
        trigger: '.second-pool-img-wrapper',
        pin: true,
        start: '12000',
        end: '15000'
      });
      ScrollTrigger.create({
        trigger: '.pool-img-dots-wrapper',
        pin: true,
        start: '12000',
        end: '15000'
      });
      gsap.to('.first-pool', 0.7, {
        scrollTrigger: {
          trigger: '.wrapper',
          start: '11300',
          pin: true,
          end: '11800',
          scrub: true,
        },
        opacity: 0,
        ease: Power3.easeOut,
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="wrapper flex-column">
      <Header />
      <FirstPool />
      <SecondPool />
    </div>
  )
}

export default App;
