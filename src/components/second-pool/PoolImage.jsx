import { useEffect, useState } from 'react';
import { gsap, Power3 } from 'gsap';

import poolImage from '../../images/model/2/001.jpeg';

const PoolImage = ({ smoothScroll }) => {
  const [image, setImage] = useState(poolImage);

  useEffect(() => {
    let images = [];
    for (let i = 1; i <= 100; i++) {
      if (i < 10) {
        images.push(require(`../../images/model/2/00${i}.jpeg`));
      } else if (i >= 10 && i < 100) {
        images.push(require(`../../images/model/2/0${i}.jpeg`));
      } else if (i >= 100) {
        images.push(require(`../../images/model/2/100.jpeg`));
      }
    }

    images.forEach((picture) => {
      let img = new Image();
      img.src = picture.fileName;
    });

    smoothScroll.addListener((e) => {
      let imageNumber =
        Math.ceil(e.offset.y / 16 / 10 / 0.2 - 394) || 1;
  
      if (imageNumber <= 1) {
        imageNumber = 0;
      } else if (imageNumber >= 100) {
        imageNumber = 99;
      }
  
      setImage(images[imageNumber]);
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.second-pool-wrapper',
          start: 'top top',
          end: 'bottom',
          pin: true,
          scrub: true,
        },
        opacity: 1,
      })
      .from('.second-pool-img', 1, {
        opacity: 0,
        ease: Power3.easeOut,
      })
      .to('.second-pool-img', {
        opacity: 1,
      })
      .to('.second-pool-img', {
        opacity: 0,
      });
  }, []);

  return <img className="second-pool-img" src={image} alt="pool-img" />;
};

export default PoolImage;
