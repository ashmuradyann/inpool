import { useEffect, useState } from 'react';
import { gsap } from 'gsap-trial';

import poolImage from '../../images/model/1/001.jpg';

const PoolImage = () => {
  const [image, setImage] = useState(poolImage);

  useEffect(() => {
    let images = [];
    for (let i = 1; i <= 224; i++) {
      if (i < 10) {
        images.push(require(`../../images/model/1/00${i}.jpg`));
      } else if (i >= 10 && i < 100) {
        images.push(require(`../../images/model/1/0${i}.jpg`));
      } else if (i >= 100 && i < 188) {
        images.push(require(`../../images/model/1/${i}.jpg`));
      } else if (i >= 188) {
        images.push(require(`../../images/model/1/${i}.jpg`));
      }
    }

    window.addEventListener('scroll', (e) => {
      let imageNumber;
      if (window.pageYOffset < 6000) {
        imageNumber = Math.ceil(window.pageYOffset / 8 / 4) || 1;
      } else if (window.pageYOffset >= 6000 && window.pageYOffset <= 7000) {
        imageNumber = 191;
      } else if (window.pageYOffset > 7000 && window.pageYOffset < 11200) {
        imageNumber = Math.ceil(window.pageYOffset / 8 / 4 / 4.8 + 150) || 1;
      } else if (window.pageYOffset >= 11200) {
        imageNumber = 223;
      }
      setImage(images[imageNumber]);
    });

    gsap.to('.first-pool-img', 0.7, {
      scrollTrigger: {
        trigger: '.wrapper',
        start: '5000',
        end: '5100',
        scrub: true,
      },
      scale: 1.3,
    });
  }, []);

  return <img className="first-pool-img" src={image} alt="pool-img" />;
};

export default PoolImage;
