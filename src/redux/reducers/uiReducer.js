import { types } from "../types/types";

const initialState = {
  loading: false,
  showLoginLoader: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiStopLoading:
      return {
        ...state,
        loading: false,
      };
    case types.uiStartLoginLoader:
      return {
        ...state,
        showLoginLoader: true,
      };
    case types.uiStopLoginLoader:
      return {
        ...state,
        showLoginLoader: false,
      };
    default:
      return state;
  }
};
