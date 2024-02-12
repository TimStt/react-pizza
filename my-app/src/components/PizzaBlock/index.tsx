/* eslint-disable object-curly-newline */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  addItem,
  culcTotalPrice,
  culcTotalCount,
  selectPizzaById,
} from '../../redux/slices/basketSlice';

type PizzaBlockProps = {
  dataId: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  dataId,
  imageUrl,
  title,
  types,
  sizes,
  price,
}) => {
  const [sizeActiv, setSizeActiv] = React.useState(0);
  const [typeActiv, setTypeActiv] = React.useState(0);
  const pizzaItem = useSelector(selectPizzaById(dataId));

  const typeNamePizz = ['тонкое', 'традицционная'];

  const saveBusket = () => {
    dispatch(
      addItem({
        dataId,
        imageUrl,
        title,
        price,
        size: sizes[sizeActiv],
        type: typeNamePizz[typeActiv],
      }),
    );
    dispatch(culcTotalPrice());
    dispatch(culcTotalCount());
  };

  const dispatch = useDispatch();

  return (
    <article data-id={dataId} className="pizza-block">
      {' '}
      <Link to={'pizza/' + dataId}>
        <img className="pizza-block__image" src={imageUrl} alt={title} />
      </Link>
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId, index) => (
            <li key={typeId}>
              <button
                className={typeActiv === index ? 'active' : ''}
                type="button"
                onClick={() => setTypeActiv(index)}>
                {typeNamePizz[typeId]}
              </button>
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, sizeIndex) => (
            <li key={sizeIndex}>
              <button
                className={sizeActiv === sizeIndex ? 'active' : ''}
                onClick={() => setSizeActiv(sizeIndex)}
                type="button">
                {`${size} см`}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{`от ${price} ₽`}</div>
        <button
          className="button button--outline button--add"
          onClick={() => saveBusket()}
          type="button">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{pizzaItem ? pizzaItem.count : 0}</i>
        </button>
      </div>
    </article>
  );
};

export default PizzaBlock;
