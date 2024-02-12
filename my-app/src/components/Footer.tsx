import React from 'react';

import vkIcon from '../assets/img/vkIcon.svg';
import fkIcon from '../assets/img/fkIcon.svg';
import viberIcon from '../assets/img/viberIcon.svg';
import tgIcon from '../assets/img/tgIcon.svg';
type FooterProps = {
  logoPizza: string;
};

const Footer: React.FC<FooterProps> = ({ logoPizza }) => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__inner">
          <section className="footer__logo logo">
            <img width="38" src={logoPizza} alt="Pizza logo" />
            <div>
              <h1>Pizza Huk</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </section>
          <section className="footer__menu">
            <label htmlFor="about__company">Pizza Huk</label>
            <nav id="about__company">
              <ul>
                <li>О компании</li>
                <li>Пользовательское соглашение</li>
                <li>Условия гарантии</li>
              </ul>
            </nav>
          </section>
          <section className="footer__menu">
            <label htmlFor="help">Помощь</label>
            <nav id="help">
              <ul>
                <li>Пиццерия</li>
                <li>Контакты</li>
                <li>Отследить заказ</li>
                <li>Поддержка</li>
              </ul>
            </nav>
          </section>
          <section className="footer__contacts">
            <label htmlFor="messengers">Остались вопросы? Мы всегда на связи:</label>
            <div className="footer__contacts__messengers" id="messengers">
              <a href="#">
                <img src={vkIcon} alt="" />
              </a>
              <a href="#">
                <img src={fkIcon} alt="" />
              </a>
              <a href="#">
                <img src={viberIcon} alt="" />
              </a>
              <a href="#">
                <img src={tgIcon} alt="" />
              </a>
              <a href="#">Написать нам</a>
            </div>
          </section>
        </div>
        <section className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} Pizza Huk. Все права защищены.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
