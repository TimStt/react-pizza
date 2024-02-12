import React, { useRef, useState } from 'react';
import style from './_Search.module.scss';
import logoSearch from '../../assets/img/search.svg';
import iconClean from '../../assets/img/clean_search.svg';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/sortSlice';

// eslint-disable-next-line no-unused-vars

function debounce(func: (valueText: string) => void, delay: number) {
  let timeId: NodeJS.Timeout;
  return function (...args: string[]) {
    const copyFunction = () => {
      func.apply(this, args);
    };
    clearTimeout(timeId);

    timeId = setTimeout(copyFunction, delay);
  };
}

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const changeInput = (event: React.MouseEvent): void => {
    const valueText = (event.target as HTMLInputElement).value;
    setInputValue(valueText);
    debounceSearch(valueText);
  };

  const debounceSearch = (valueText: string) =>
    debounce(() => {
      dispatch(setSearchValue(valueText));
    }, 600);

  const cleanInput = () => {
    setInputValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };
  return (
    <section className={style.search}>
      <form className={style.form} method="get">
        <img className={style.logo} src={logoSearch} alt="поиск по сайту" />
        <input
          ref={inputRef}
          value={inputValue}
          onInput={() => changeInput}
          type="search"
          id="search"
          placeholder="Искать пиццу..."
          className={style.inp}
        />

        {inputValue && (
          <button className={style.clean} onClick={() => cleanInput()} type="button">
            <img src={iconClean} alt="Очистить поиск" />
          </button>
        )}
      </form>
    </section>
  );
};

export default Search;
