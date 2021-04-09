import { connect } from 'react-redux';

import Filter from 'src/components/Filter';

import {
  toggleIsOpenSelect,
  setSelectedCategory,
  loadMovies,
} from 'src/actions/cardsActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  categories: state.cards.categories,
  isOpenSelect: state.cards.isOpenSelect,
  selectedCategory: state.cards.selectedCategory,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleSelect: () => {
    dispatch(toggleIsOpenSelect());
  },
  setSelectedCategory: (e) => {
    dispatch(setSelectedCategory(e.target.value));
  },
  loadMovies: () => {
    dispatch(loadMovies());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
