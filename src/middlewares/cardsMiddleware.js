import {
  LOAD_MOVIES,
  saveMovies,
  saveCategories,
  DELETE_MOVIE,
  updateMoviesArray,
} from 'src/actions/cardsActions';
import { movies$ } from 'src/assets/data/movies';

const restaurantMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      // Chargement de nos films
      movies$.then((data) => {
        // Sauvegarde dans le state de nos films
        store.dispatch(saveMovies(data));

        const categoryArr = [];
        // On map sur notre tableau pour récupérer les catégories
        // et on les met dans un tableau
        data.map((item) => {
          categoryArr.push(item.category);
        });
        // On retire les doublons du tableau
        const categories = [...new Set(categoryArr)];
        // Sauvegarde dans le state de nos catégories
        store.dispatch(saveCategories(categories));
      });

      next(action);
      break;
    }
    case DELETE_MOVIE: {
      const { id } = action;
      const originalArray = store.getState().cards.movies;

      // On recupere un tableau en enlevant l'élément don on fourni l'id
      const newArray = originalArray.filter((movie) => movie.id !== id);
      // Puis on l'enregistre dans le state
      store.dispatch(updateMoviesArray(newArray));

      // Ensuite on s'occupe d'actualiser les catégories
      const categoryArr = [];
      newArray.map((item) => {
        categoryArr.push(item.category);
      });

      // On retire les doublons du tableau
      const filteredCategories = [...new Set(categoryArr)];
      // Sauvegarde dans le state de nos catégories
      store.dispatch(saveCategories(filteredCategories));

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default restaurantMiddleware;
