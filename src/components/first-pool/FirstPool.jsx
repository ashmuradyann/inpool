import { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

import PoolImage from './PoolImage';

import inpoolLogo from '../../images/inpool.svg';

import './first-pool.scss';

const FirstPool = () => {
  const classNames = [
    '.first-pool-title',
    '.first-pool-text-1',
    '.first-pool-text-2',
    '.first-pool-text-3',
    '.first-pool-text-4',
    '.first-pool-text-5',
    '.first-pool-text-6',
    '.first-pool-text-7',
  ];

  useEffect(() => {
    gsap.from('.pool-header-text-1', 1, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
    });

    gsap.from('.pool-header-text-2', 1, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      delay: 0.2,
    });

    gsap.from('.pool-header-text-3', 1, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      delay: 0.3,
    });

    gsap.from('.first-pool-img-wrapper', 1, {
      opacity: 0,
      scale: 0.8,
      ease: Power3.easeOut,
    });

    gsap.to('.first-pool-header', 0.7, {
      scrollTrigger: {
        trigger: '.first-pool-header',
        start: '0',
        pin: true,
        end: '700',
        scrub: true,
      },
      y: -40,
      opacity: 0,
      ease: Power3.easeOut,
    });

    classNames.forEach((className) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: className,
            start: 'top top',
            end: 'bottom',
            pin: true,
            scrub: true,
          },
          opacity: 1,
        })
        .from(className, {
          y: 100,
          opacity: 0,
        })
        .to(className, {
          opacity: 1,
          y: 0,
        })
        .to(className, {
          opacity: 0,
          y: -100,
        });
    });
  }, []);

  return (
    <>
      <div className="first-pool-header flex-column">
        <h3 className="pool-header-text-1">
          Композитные бассейны
          <br />
          <mark>премиум качества</mark>
        </h3>
        <div className="flex-between">
          <p className="pool-header-text-2">
            Бассейны
            <br />
            Сompass pools
          </p>
          <a href="" className="pool-header-text-3">
            <div>
              INPOOL Concept® — технологии
              <br />
              строительства бассейнов
            </div>
            <img src={inpoolLogo} alt="inpool-logo" />
          </a>
        </div>
      </div>
      <div className="first-pool-title flex-column">
        <h5>Compass tools</h5>
        <h2>
          Совершенство
          <br />
          формы.
        </h2>
      </div>
      <div className="first-pool-text-1 flex-column">
        <p>
          <strong>Строим со знанием того, зачем бассейны нужны вам,</strong> как
          оптимизировать
        </p>
        <p>их конфигурацию под ваши потребности,</p>
        <p>нужды и как ими пользоваться с</p>
        <p>максимальной пользой и</p>
        <p>удовлетворением.</p>
      </div>
      <div className="first-pool-text first-pool-text-2 flex-column">
        <h3>Слой полиэфирной смолы, усиленный стекловолокном</h3>
      </div>
      <div className="first-pool-text first-pool-text-3 flex-column">
        <h3>Усиление из стеклоткани</h3>
      </div>
      <div className="first-pool-text first-pool-text-4 flex-column">
        <h3>Ceramic Core®</h3>
      </div>
      <div className="first-pool-text first-pool-text-5 flex-column">
        <h3>Слой винилэфирной смолы, усиленный стекловолокном</h3>
      </div>
      <div className="first-pool-text first-pool-text-6 flex-column">
        <h3>Барьерный слой винилэфирной смолы</h3>
      </div>
      <div className="first-pool first-pool-text first-pool-text-7 flex-column">
        <h3>Покрытие Bi-Luminate & Nova Colours</h3>
      </div>
      <div className="first-pool first-pool-wrapper">
        <div className="first-pool-img-wrapper flex-center">
          <PoolImage />
        </div>
      </div>
    </>
  );
};

export default FirstPool;
