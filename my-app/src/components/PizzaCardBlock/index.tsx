import React from 'react';
import { Link } from 'react-router-dom';
import style from './PizzaCard.module.scss';
import { useSelector } from 'react-redux';
import { selectPizza } from '../../redux/slices/cardSlice';

const PizzaCard: React.FC = () => {
  const { price, title, discription, imageUrl } = useSelector(selectPizza);

  return (
    <section className={style.root}>
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <div className={style.discr}>
        <p>{discription}</p>
        <span className="pizza-block__price">{`от ${price} ₽`}</span>
      </div>
      <Link to="/" className="button button--outline button--add go-back-btn">
        <span>Вернуться назад</span>
      </Link>
    </section>
  );
};

export default PizzaCard;
