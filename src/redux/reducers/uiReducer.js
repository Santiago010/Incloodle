import { types } from "../types/types";

const initialState = {
  loading: false,
  showLoginLoader: false,
  showModalSearchStudent: false,
  showModalSearchContens: false,
  showModalSearchPedingExam: false,
  showModalChangePass: false,
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
    case types.uiShowModalSearchStudent:
      return {
        ...state,
        showModalSearchStudent: action.payload,
      };
    case types.uiShowModalSearchContens:
      return {
        ...state,
        showModalSearchContens: action.payload,
      };
    case types.uiShowModalSearchExamPeding:
      return {
        ...state,
        showModalSearchPedingExam: action.payload,
      };
    case types.uiShowModalChangePass:
      return {
        ...state,
        showModalChangePass: action.payload,
      };
    default:
      return state;
  }
};
