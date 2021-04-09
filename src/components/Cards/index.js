// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

// == Import
import './cards.scss';

// == Composant
const Cards = ({ movies, loadMovies }) => {
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="cards-component">
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loadMovies: PropTypes.func.isRequired,
};

// == Export
export default Cards;
