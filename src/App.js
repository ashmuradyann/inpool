import { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import MouseFollower from "mouse-follower";

import Header from "./components/header/Header";
import FirstPool from "./components/first-pool/FirstPool";
import SecondPool from "./components/second-pool/SecondPool";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const [loaded, setLoaded] = useState(false)

  const wrapperRef = useRef()

  const smoothScroll = Scrollbar.init(document.body, {
    damping: 0.1,
    thumbMinSize: "100",
    delegateTo: document,
    alwaysShowTracks: true
  })

  useLayoutEffect(() => {
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          smoothScroll.scrollTop = value;
        }
        return smoothScroll.scrollTop
      }
    })

    ScrollTrigger.scrollerProxy(document.querySelector(".first-pool-img-wrapper"), {
      scrollTop(value) {
        console.log(value)
        if (arguments.length) {
          smoothScroll.scrollTop = value;
        }
        return smoothScroll.scrollTop
      }
    })

    smoothScroll.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({
      scroller: document.body,
      pinType: 'transform'
    });

    document.querySelector(".scroll-content").addEventListener("scroll", () => {
      console.log(12)
    })

    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      container: document.body,
      speed: 0.5,
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

    const ctx = gsap.context(() => {
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
    <div ref={wrapperRef} className="wrapper flex-column">
      <Header />
      <FirstPool smoothScroll={smoothScroll} />
      <SecondPool smoothScroll={smoothScroll} />
    </div>
  )
}

export default App;
