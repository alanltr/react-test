// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

// == Import
import './cards.scss';

// == Composant
const Cards = ({
  movies,
  loadMovies,
  selectedCategory,
}) => {
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="cards-component">
      {selectedCategory === ' ' && movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
      {selectedCategory !== ' ' && movies.map((movie) => (
        selectedCategory === movie.category
        && <Card key={movie.id} {...movie} />
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
  string: PropTypes.func.isRequired,
};

// == Export
export default Cards;
