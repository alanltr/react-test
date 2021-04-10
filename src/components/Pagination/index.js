// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/fr_FR';

// == Import
import './pagination.scss';

// == Composant
const PaginationPerso = ({
  nbItemsPerPage,
  totalItems,
  movies,
  setCurrentMovies,
}) => {
  const onChange = (current, pageSize) => {
    const offset = (current - 1) * pageSize;
    const currentMovies = movies.slice(offset, offset + pageSize);
    setCurrentMovies(currentMovies);
  };

  return (
    <Pagination
      defaultPageSize={8}
      pageSize={nbItemsPerPage}
      defaultCurrent={1}
      onChange={onChange}
      total={totalItems}
      locale={localeInfo}
    />
  );
};
PaginationPerso.propTypes = {
  nbItemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  setCurrentMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
};

// == Export
export default PaginationPerso;
