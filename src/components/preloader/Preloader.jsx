import { useEffect, useState } from 'react';

const Preloader = ({ setLoadedAllImages }) => {

  const [imagesLoadedCount, setImagesLoadedCount] = useState(0)

  useEffect(() => {
    if (imagesLoadedCount === 324) {
      setLoadedAllImages(true)
    }
  }, [imagesLoadedCount])

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
      img.onload = () => console.log(i, 'loaded');
      setImagesLoadedCount(prev => prev + 1)
    });
  }, []);

  return <div>Preloader</div>;
};

export default Preloader;
