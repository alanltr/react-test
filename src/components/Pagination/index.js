// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Select from 'rc-select';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/fr_FR';

// == Import
import './pagination.scss';


function onShowSizeChange(current, pageSize) {
  console.log(current);
  console.log(pageSize);
}



// == Composant
const PaginationPerso = ({
  nbItemsPerPage,
  totalItems,
  movies,
  setCurrentMovies,
}) => {
  const onChange = (current, pageSize) => {
    console.log('onChange:current=', current);
    console.log('onChange:pageSize=', pageSize);
    console.log(movies);

    const offset = (current - 1) * pageSize;
    const currentMovies = movies.slice(offset, offset + pageSize);
    console.log(currentMovies)
    setCurrentMovies(currentMovies)
  };

  return (
    <Pagination
      selectComponentClass={Select}
      // showQuickJumper
      // showSizeChanger
      defaultPageSize={8}
      pageSize={nbItemsPerPage}
      defaultCurrent={1}
      onShowSizeChange={onShowSizeChange}
      onChange={onChange}
      total={totalItems}
      locale={localeInfo}
    />
  );
};
PaginationPerso.propTypes = {
  nbItemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

// == Export
export default PaginationPerso;
