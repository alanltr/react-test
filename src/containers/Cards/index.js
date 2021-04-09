import { connect } from 'react-redux';

import Cards from 'src/components/Cards';

import { loadMovies, deleteMovie } from 'src/actions/cardsActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  movies: state.cards.movies,
  moviesLayer: state.cards.moviesLayer,
  selectedCategory: state.cards.selectedCategory,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => {
    dispatch(loadMovies());
  },
  deleteMovie: (e) => {
    dispatch(deleteMovie(e.currentTarget.value));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
