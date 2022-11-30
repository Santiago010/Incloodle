import { types } from "../types/types";

const initialState = {
  loading: false,
  showLoginLoader: false,
  showModalSearchStudent: false,
  showModalSearchContens: false,
  showModalSearchpendingExam: false,
  showModalChangePass: false,
  showModalSearchExamCorrected: false,
  messageResetPass: "",
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
    case types.uiShowModalSearchExampending:
      return {
        ...state,
        showModalSearchpendingExam: action.payload,
      };
    case types.uiShowModalChangePass:
      return {
        ...state,
        showModalChangePass: action.payload,
      };
    case types.uiResetPass:
      return {
        ...state,
        messageResetPass: action.payload,
      };
    case types.uiShowModalSearchExamCorrected:
      return {
        ...state,
        showModalSearchExamCorrected: action.payload,
      };
    default:
      return state;
  }
};
