export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const SET_NB_PER_PAGE = 'SET_NB_PER_PAGE';
export const TOGGLE_IS_OPEN_SELECT_ITEMS = 'TOGGLE_IS_OPEN_SELECT_ITEMS';

export const setNbPerPage = (number) => ({
  type: SET_NB_PER_PAGE,
  number,
});
export const setTotalItems = (number) => ({
  type: SET_TOTAL_ITEMS,
  number,
});
export const toggleIsOpenSelectItems = () => ({
  type: TOGGLE_IS_OPEN_SELECT_ITEMS,
});
