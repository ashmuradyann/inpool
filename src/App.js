import { useEffect, useLayoutEffect, useRef } from "react";
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import LocomotiveScroll from 'locomotive-scroll'
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Scrollbar from 'smooth-scrollbar';
import MouseFollower from "mouse-follower";

import Header from "./components/header/Header";
import FirstPool from "./components/first-pool/FirstPool";
import SecondPool from "./components/second-pool/SecondPool";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const wrapperRef = useRef()
  const containerRef = useRef()

  // настройки locomotive-scroll
  // const options = {
  //   smooth: true,
  //   // multiplier: 0,
  // }

  useLayoutEffect(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      container: document.body,
      speed: 0.5,
      activeState: "mf-cursor-mousedown",
    });

    // это lib locomotive-scroll 
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector('.wrapper'),
    //   smooth: true,
    //   multiplier: 0,
    //   scrollbarClass: "c-scrollbar"
    // });

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
    // это lib smooth-scrollbar
    // Scrollbar.init(wrapperRef.current, {
      //   damping: 0.07,
      //   thumbMinSize: "100",
      //   alwaysShowTracks: true,
      // })
      
      const ctx = gsap.context(() => {
      // это lib ScrollSmoother с gsap не получился импортировать
      // smoother.current = ScrollSmoother.create({
      //   smooth: 1,
      //   effects: true,
      // });
      ScrollTrigger.create({
        trigger: '.wrapper',
        pin: true,
        start: '0',
        end: 'bottom',
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
    // <LocomotiveScrollProvider options={options} containerRef={containerRef}>
    <div data-scroll-container ref={wrapperRef} className="wrapper flex-column">
      <Header />
      <FirstPool />
      <SecondPool />
    </div>
    // </LocomotiveScrollProvider>
  )
}

export default App;
