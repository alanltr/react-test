/* eslint-disable array-callback-return */
import {
  LOAD_MOVIES,
  saveMovies,
  saveCategories,
  DELETE_MOVIE,
  updateMoviesArray,
  setCurrentMovies,
} from 'src/actions/cardsActions';
import { setTotalItems } from 'src/actions/paginationActions';

import { movies$ } from 'src/assets/data/movies';

const restaurantMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      // Chargement de nos films
      movies$.then((data) => {
        // Sauvegarde dans le state de nos films
        store.dispatch(saveMovies(data));

        // On détermine le tableau en fonction de la pagination
        const { nbItemsPerPage } = store.getState().pagination;
        const currentMovies = data.filter((movie) => movie.id < (nbItemsPerPage + 1));
        store.dispatch(setCurrentMovies(currentMovies));

        // On enregistre dans le state le nb total pour la pagination
        store.dispatch(setTotalItems(data.length));

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

      // On enregistre dans le state le nb total pour la pagination
      store.dispatch(setTotalItems(newArray.length));

      // Ensuite on s'occupe d'actualiser les catégories
      const categoryArr = [];
      newArray.map((item) => {
        categoryArr.push(item.category);
      });

      // On retire les doublons du tableau
      const filteredCategories = [...new Set(categoryArr)];
      // Sauvegarde dans le state de nos catégories
      store.dispatch(saveCategories(filteredCategories));

      // On détermine le tableau en fonction de la pagination
      const { nbItemsPerPage } = store.getState().pagination;
      const currentMovies = newArray.filter((movie) => movie.id < (nbItemsPerPage + 1));
      store.dispatch(setCurrentMovies(currentMovies));

      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default restaurantMiddleware;
