import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './_Pagination.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setPage } from '../../redux/slices/sortSlice';

const Pagination: React.FC = () => {
  const { valuePage } = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => dispatch(setPage(event.selected + 1))}
        pageRangeDisplayed={2}
        pageCount={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={valuePage - 1}
      />
    </>
  );
};

// Example items, to simulate fetching from another resources.

export default Pagination;
