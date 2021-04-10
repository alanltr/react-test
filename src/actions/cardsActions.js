export const LOAD_MOVIES = 'LOAD_MOVIES';
export const SAVE_MOVIES = 'SAVE_MOVIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const TOGGLE_IS_OPEN_SELECT = 'TOGGLE_IS_OPEN_SELECT';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const UPDATE_MOVIES_ARRAY = 'UPDATE_MOVIES_ARRAY';
export const SET_CURRENT_MOVIES = 'SET_CURRENT_MOVIES';

export const setCurrentMovies = (newArray) => ({
  type: SET_CURRENT_MOVIES,
  newArray,
});
export const updateMoviesArray = (newArray) => ({
  type: UPDATE_MOVIES_ARRAY,
  newArray,
});
export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  id,
});
export const setSelectedCategory = (value) => ({
  type: SET_SELECTED_CATEGORY,
  value,
});
export const toggleIsOpenSelect = () => ({
  type: TOGGLE_IS_OPEN_SELECT,
});
export const saveCategories = (data) => ({
  type: SAVE_CATEGORIES,
  data,
});
export const saveMovies = (data) => ({
  type: SAVE_MOVIES,
  data,
});
export const loadMovies = () => ({
  type: LOAD_MOVIES,
});
