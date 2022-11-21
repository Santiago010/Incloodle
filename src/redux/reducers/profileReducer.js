import { types } from "../types/types";

const intialState = {
  err: null,
  message: null,
  data: [],
  profile: {
    name: "",
    rut: "",
    email: "",
    password: "",
    id: 0,
    rol: 0,
  },
};

export const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.profileGet:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        data: action.payload.data,
      };
    case types.profileChoose:
      return {
        ...state,
        profile: action.payload,
      };
    case types.profileFilterByRol:
      return {
        ...state,
        data: state.data.filter((profile) => profile.rol === action.payload),
      };
    case types.profileFilterByName:
      return {
        ...state,
        data: state.data.filter((profile) =>
          profile.name.includes(action.payload)
        ),
      };
    default:
      return state;
  }
};
