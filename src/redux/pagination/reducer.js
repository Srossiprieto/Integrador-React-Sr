import { INCREMENT_PAGE } from './actions';

const initialState = {
  currentPage: 0,
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    default:
      return state;
  }
};