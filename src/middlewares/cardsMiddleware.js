import { LOAD_MOVIES, saveMovies } from 'src/actions/cardsActions';
import { movies$ } from 'src/assets/data/movies';

const restaurantMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      // Chargement de nos films
      movies$.then((data) => {
        store.dispatch(saveMovies(data));
      });

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default restaurantMiddleware;
