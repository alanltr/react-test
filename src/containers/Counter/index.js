import { connect } from 'react-redux';

import Counter from 'src/components/Counter';

import {
  setNbPerPage,
  toggleIsOpenSelectItems,
} from 'src/actions/paginationActions';
import { deleteMovie } from 'src/actions/cardsActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isOpenSelect: state.pagination.isOpenSelect,
  nbItemsPerPage: state.pagination.nbItemsPerPage,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleSelect: () => {
    dispatch(toggleIsOpenSelectItems());
  },
  setNbPerPage: (e) => {
    dispatch(setNbPerPage(e.target.value));
  },
  deleteMovie: () => {
    dispatch(deleteMovie());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
