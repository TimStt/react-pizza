/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import Categories from '../components/Categories';
import Sorts, { popupList } from '../components/Sorts';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';
import ContentError from '../components/ContentError';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { useNavigate } from 'react-router-dom';

import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import { pizzasfetch } from '../redux/slices/pizzaSlice';

import { selectFilter, setParams } from '../redux/slices/sortSlice';

function Home() {
  const navigate = useNavigate();

  const { sort, valueCategory, valuePage, searchValue } = useSelector(selectFilter);

  const { product, status } = useSelector((state) => state.pizzas);
  const { property: valueSort } = sort;

  const dispatch = useDispatch();

  const isDespatch = useRef(false);
  const isPrimaryRender = useRef(true);

  const renderSkeleton = () => {
    return [...new Array(6)].map((_, indexSleketon) => <Skeleton key={indexSleketon} />);
  };

  const renderPizzas = () => {
    return product
      .filter(({ title }) => {
        return title.toLowerCase().includes(searchValue.toLowerCase());
      })
      .map((pizzas) => <PizzaBlock dataId={pizzas.id} key={pizzas.imageUrl} {...pizzas} />);
  };

  const getPizzas = async () => {
    const limitPages = 5;

    dispatch(
      pizzasfetch({
        limitPages,
        valueCategory,
        valueSort,
        valuePage,
      }),
    );
  };

  // eslint-disable-next-line no-unused-vars
  function setUrlParametres() {
    const queryString = qs.stringify({
      valueSort,

      valueCategory,
      valuePage,
    });

    navigate(`?${queryString}`);
  }

  function saveParametres() {
    if (window.location.search) {
      let parameters = qs.parse(window.location.search.substring(1));
      const sort = popupList.find(({ property }) => property === parameters.valueSort);
      parameters = {
        ...parameters,
        sort,
      };
      if (!isDespatch.current) {
        getPizzas();
      }

      // !isDespatch.current ? fetchPizzas() : null;
      dispatch(setParams(parameters));
      isDespatch.current = true;
    }
  }
  useEffect(() => {
    saveParametres();
  }, []);

  useEffect(() => {
    getPizzas();
  }, [valueCategory, valueSort, valuePage]);

  useEffect(() => {
    if (!isPrimaryRender.current) {
      setUrlParametres();
    } else {
      navigate('');
      isPrimaryRender.current = false;
    }
  }, [valueCategory, valueSort, valuePage]);

  return (
    <div className="content">
      <div className="container">
        <section className="content__top">
          <Categories />
          <Sorts />
        </section>
        <h2 className="content__title">Все пиццы</h2>
        {status === 'error' ? (
          <ContentError />
        ) : (
          <section className="content__items">
            {status === 'loading' ? renderSkeleton() : renderPizzas()}
          </section>
        )}
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
