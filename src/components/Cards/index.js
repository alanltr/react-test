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
  deleteMovie,
}) => {
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="cards-component">
      {/* Si aucune catégorie sélectionnée */}
      {selectedCategory === ' ' && movies.map((movie) => (
        <Card
          key={movie.id}
          {...movie}
          deleteMovie={deleteMovie}
        />
      ))}
      {/* Si une catégorie est sélectionnée */}
      {selectedCategory !== ' ' && movies.map((movie) => (
        // Et que sa catégorie = la catégorie sélectionnée
        selectedCategory === movie.category && (
        <Card
          key={movie.id}
          {...movie}
          deleteMovie={deleteMovie}
        />
        )))}
    </div>
  );
};

Cards.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loadMovies: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

// == Export
export default Cards;
