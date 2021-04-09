import { connect } from 'react-redux';

import Cards from 'src/components/Cards';

// === mapStateToProps
const mapStateToProps = (state) => ({
  movies: state.cards.movies,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
