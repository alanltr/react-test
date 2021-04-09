import { connect } from 'react-redux';

import Cards from 'src/components/Cards';

import { loadMovies } from 'src/actions/cardsActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  movies: state.cards.movies,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => {
    dispatch(loadMovies());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
