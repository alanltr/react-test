import { connect } from 'react-redux';

import Cards from 'src/components/Cards';

import { loadMovies, deleteMovie } from 'src/actions/cardsActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  movies: state.cards.movies,
  selectedCategory: state.cards.selectedCategory,
  currentMovies: state.cards.currentMovies,
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
