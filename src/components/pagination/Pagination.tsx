import React, { useState } from 'react'
import styles from './Pagination.module.scss';

interface IPaginationProps {
  currentPage: number,
  productsPage: number,
  setCurrentPage: any,
  totalProducts: number,

}

const Pagination = ({
  currentPage,
  productsPage,
  setCurrentPage,
  totalProducts
}: IPaginationProps)  => {


  const pageNumber : number[] = [];

  const [pageNumberLimit] = useState(3);

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const paginate = (pageNumber : number | undefined) => {
    setCurrentPage(pageNumber);
  }

  const paginateNextPage = () => {
    setCurrentPage(currentPage + 1);

    if(currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  const paginagePrevPage = () => {
    setCurrentPage(currentPage - 1);

    if((currentPage-1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }

  }

  for(let i = 0; i <= Math.ceil(totalProducts / productsPage) + 1; i++) {
    pageNumber.push(i);
  }

  return (
    <>
    <div className={styles.pagination}>
      <li
        onClick={paginagePrevPage}
        className={currentPage === 1 ? `${styles.hidden}` : ''}

      >
      {"<"}
      </li>

      {pageNumber.map((number : number) => {
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
          return (
            <li key={number} onClick={() => paginate(number)} 
            className={currentPage === number ? `${styles.active}` : ''}
            >
              {number}
            </li>
          )
        }}
        )
      }

      <li onClick={paginateNextPage} 
      className={currentPage === 9 ? `${styles.hidden}` : ''}>
        {">"}
      </li>
    </div>
    
    </>
  )
}

export default Pagination