import { useEffect } from 'react';
import { gsap } from 'gsap';

import PoolImage from './PoolImage';

import './second-pool.scss';

const SecondPool = ({ smoothScroll }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.second-pool-header',
          start: 'top top',
          end: 'bottom',
          pin: true,
          scrub: true,
        },
        opacity: 1,
      })
      .from('.second-pool-header', {
        y: 100,
        opacity: 0,
      })
      .to('.second-pool-header', {
        opacity: 1,
        y: 0,
      })
      .to('.second-pool-header', {
        opacity: 0,
        y: -100,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.second-pool-text',
          start: 'top top',
          end: '1480',
          pin: true,
          scrub: true,
        },
        opacity: 1,
      })
      .from('.second-pool-text', {
        y: 100,
        opacity: 0,
        duration: 500,
      })
      .to('.second-pool-text', {
        opacity: 1,
        y: 0,
        duration: 800,
      })
      .to('.second-pool-text', {
        opacity: 0,
        y: -200,
        duration: 500,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.pool-img-dots-wrapper',
          start: '200',
          end: '2600',
          scrub: true,
        },
        opacity: 1,
      })
      .from('.pool-img-dots-wrapper', {
        opacity: 0,
      })
      .to('.pool-img-dots-wrapper', {
        opacity: 1,
      })
      .to('.pool-img-dots-wrapper', {
        opacity: 0,
      });
  }, []);

  return (
    <>
      <div className="second-pool-header flex-column">
        <h5>Технологии</h5>
        <h2>Инновационные преимущества.</h2>
      </div>
      <div className="second-pool-text flex-center">
        <p>
          <strong>
            Совокупность сорокалетней традиции изготовления бассейнов Compass
            Pools
          </strong>
          <br />
          и иновационных технологий водоподготовки INPOOL CONCEPT
        </p>
      </div>
      <div className="second-pool second-pool-wrapper">
        <div className="second-pool-img-wrapper flex-center">
          <div className="pool-img-dots-wrapper">
            <div data-text="Жалюзийное покрытие" className="img-dot img-dot-1"></div>
            <div data-text="Ребра жёсткости Maxi RIB" className="img-dot img-dot-2"></div>
            <div data-text="Теплообменник" className="img-dot img-dot-3"></div>
            <div data-text="Фильтр с высокой загрузкой INPOOL" className="img-dot img-dot-4"></div>
            <div data-text="Система управления бассейном INPOOL ASM CONTROL" className="img-dot img-dot-5"></div>
            <div data-text="Клапан автоматической обратной промывки фильтра Besgo" className="img-dot img-dot-6"></div>
            <div data-text="Станция дозирования хим. реагентов INPOOL Dispense Control" className="img-dot img-dot-7"></div>
            <div data-text="Ультрафиолет среднего давления" className="img-dot img-dot-8"></div>
            <div data-text="Циркуляционный насос фильтрации" className="img-dot img-dot-9"></div>
            <div data-text="Циркуляционный насос системы автоматической очистки бассейна Vantage" className="img-dot img-dot-10"></div>
            <div data-text="Коллектор автоматической системы очистки бассейна Vantage" className="img-dot img-dot-11"></div>
          </div>
          <PoolImage smoothScroll={smoothScroll} />
        </div>
      </div>
    </>
  );
};

export default SecondPool;
