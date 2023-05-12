import logo from '../../images/logos/logo.svg';

import './header.scss';

const Header = () => {
  return (
    <header className="flex-between">
      <a href="">
        <img src={logo} alt="header-logo" />
      </a>
      <div className="header-right">
        <a className="header-phone" href="tel:+74957554696">+7 495 755-46-96</a>
        <a className="button" href="">Заказать звонок</a>
      </div>
    </header>
  );
};

export default Header;
