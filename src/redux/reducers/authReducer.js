import { types } from "../types/types";

const initialState = {
  err: null,
  jwt: null,
  message: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        err: action.payload.err,
        jwt: action.payload.jwt,
        message: action.payload.message,
      };
    case types.authLogout:
      return {
        ...state,
        err: null,
        jwt: null,
        message: null,
      };
    default:
      return state;
  }
};
