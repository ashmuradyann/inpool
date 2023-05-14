import { useEffect, useRef, useState } from 'react';

import preloaderLogo from '../../images/logos/fav.svg';

import './preloader.scss'

const Preloader = ({ setLoadedAllImages }) => {
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const preloaderRef = useRef()

  const allImagesCount = 324;

  useEffect(() => {
    if (progress === 100) {
      preloaderRef.current.style.opacity = 0
      setTimeout(() => {
        setLoadedAllImages(true)
      }, 300)
    }
  }, [progress])

  useEffect(() => {
    if (imagesLoadedCount > 0) {
      let percent = Number(((imagesLoadedCount / allImagesCount) * 100).toFixed(0));
      setProgress(percent);
    }
  }, [imagesLoadedCount]);

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
    for (let i = 1; i <= 100; i++) {
      if (i < 10) {
        images.push(require(`../../images/model/2/00${i}.jpeg`));
      } else if (i >= 10 && i < 100) {
        images.push(require(`../../images/model/2/0${i}.jpeg`));
      } else if (i >= 100) {
        images.push(require(`../../images/model/2/100.jpeg`));
      }
    }

    images.forEach((picture, i) => {
      const img = new Image();
      img.src = picture;
      img.onload = () => {
        setImagesLoadedCount((prev) => prev + 1);
      };
    });
  }, []);

  return (
    <div ref={preloaderRef} className="preloader flex-column">
      <div className="preloader-logo-wrapper flex-center">
        <img src={preloaderLogo} alt="preloader-logo" />
      </div>
      <div className="preloader-progress flex-center">
        <p>{progress}%</p>
      </div>
    </div>
  );
};

export default Preloader;
