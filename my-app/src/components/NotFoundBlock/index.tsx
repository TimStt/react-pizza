import React from 'react';
import style from './NotFoundBlock.module.scss';
import errorBg500 from '../../assets/img/error_bg1300.avif';
import errorBg330 from '../../assets/img/error_bg330.avif';
import errorBgJpag from '../../assets/img/error_bg1300.jpg';

// import PropTypes from 'prop-types'

const NotFoundBlock: React.FC = () => {
  return (
    <section className={style.root}>
      <div>
        <h1>
          Ничего не найдено <span>😢</span>
        </h1>
        <p className={style.discr}>К сожалению такая страница не существует, попробуйте еще раз</p>
      </div>
      <picture>
        <source srcSet={errorBg500} type="image/avif" media="(min-width: 1200px)"></source>
        <source srcSet={errorBg330} type="image/avif" media="(max-width: 1200px)"></source>
        <img src={errorBgJpag} alt="error404" />
      </picture>
    </section>
  );
};

// NotFound.propTypes = {}

export default NotFoundBlock;
