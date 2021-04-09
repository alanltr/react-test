import { LOAD_MOVIES, saveMovies, saveCategories } from 'src/actions/cardsActions';
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

    default:
      next(action);
  }
};
export default restaurantMiddleware;
