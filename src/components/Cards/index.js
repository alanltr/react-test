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
      {/* Si aucune catégorie sélectionnée */}
      {selectedCategory === ' ' && movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
      {/* Si une catégorie est sélectionnée */}
      {selectedCategory !== ' ' && movies.map((movie) => (
        // Et que sa catégorie = la catégorie sélectionnée
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
  selectedCategory: PropTypes.string.isRequired,
};

// == Export
export default Cards;
