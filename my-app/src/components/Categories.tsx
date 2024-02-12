import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, selectFilter } from '../redux/slices/sortSlice';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const dispatch = useDispatch();
  const { valueCategory } = useSelector(selectFilter);

  return (
    <div className="categories">
      <ul>
        <li>
          {categories.map((nameCategory, index) => (
            <button
              key={index}
              onClick={() => dispatch(setCategory(index))}
              type="button"
              className={valueCategory === index ? 'active' : ''}>
              {nameCategory}
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}
export default Categories;
