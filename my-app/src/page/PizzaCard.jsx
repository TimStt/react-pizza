import React, { useEffect } from 'react';
import PizzaCardBlock from '../components/PizzaCardBlock';
import ContentError from '../components/ContentError';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pizzafetch, selectStatus } from '../redux/slices/cardSlice';

function PizzaCard() {
  const status = useSelector(selectStatus);
  const { id } = useParams();

  const dispath = useDispatch();
  useEffect(() => {
    dispath(pizzafetch(id));
  }, []);
  if (status === 'error') {
    return <ContentError />;
  }
  return (
    <div className="container--card">
      {status === 'success' ? <PizzaCardBlock /> : 'Загрузка.......'}
    </div>
  );
}

export default PizzaCard;
