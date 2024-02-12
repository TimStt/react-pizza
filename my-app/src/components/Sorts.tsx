import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setOpenPopup, selectFilter } from '../redux/slices/sortSlice';



type PopupList = {
  name: string;
  property: string;
};

export const popupList: PopupList[] = [
  {
    name: 'популярности',
    property: 'rating',
  },
  {
    name: 'цене',
    property: 'price',
  },
  {
    name: 'алфавиту',
    property: 'title',
  },
];
function Sorts() {
  const { sort, openPopup } = useSelector(selectFilter);
  const { name: nameOfStore } = sort;
  const idSort = popupList.findIndex(({ name }) => name === nameOfStore);
  const sortRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const clickItem = (sortIndex: number, obj: PopupList) => {
    dispatch(
      setSort({
        sortIndex,
        ...obj,
      }),
    );
    dispatch(setOpenPopup(!openPopup));
  };

  useEffect(() => {
    const onClickOutside = (e: any) => {
      const path = e.composedPath();
      !path.includes(sortRef.current) && dispatch(setOpenPopup(false));
    };
    document.body.addEventListener('click', onClickOutside);
    return () => document.body.removeEventListener('click', onClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className="sort__label__icon"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <button type="button" onClick={() => dispatch(setOpenPopup(!openPopup))}>
          {nameOfStore}
        </button>
      </div>
      <div className={`sort__popup ${openPopup ? 'active' : ''}`}>
        <ul>
          {popupList.map((obj, sortIndex) => (
            <li key={sortIndex}>
              <button
                className={idSort === sortIndex ? 'active' : ''}
                onClick={() => clickItem(sortIndex, obj)}
                type="button">
                {obj.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Sorts;
