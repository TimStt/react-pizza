import React from 'react';
import { Link } from 'react-router-dom';
import emptyImg from '../assets//img/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <section className="basket basket--empty">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyImg} alt="Empty basket" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </section>
  );
};

export default CartEmpty;
