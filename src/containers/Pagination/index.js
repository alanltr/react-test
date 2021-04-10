import { connect } from 'react-redux';

import Pagination from 'src/components/Pagination';

import {
  setCurrentMovies,
} from 'src/actions/cardsActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  nbItemsPerPage: state.pagination.nbItemsPerPage,
  totalItems: state.pagination.totalItems,
  movies: state.cards.movies,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  setCurrentMovies: (arr) => {
    dispatch(setCurrentMovies(arr));
    console.log(arr)
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
