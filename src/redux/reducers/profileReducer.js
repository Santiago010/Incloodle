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
    rut: 0,
  },
};

export const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.profileGet:
      return {
        ...state,
        err: false,
        message: "found succesfully",
        data: action.payload,
      };
    case types.profileChoose:
      return {
        ...state,
        profile: action.payload,
      };
    case types.profilesAdd:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        data: [...state.data, action.payload.values],
      };
    case types.profileDelete:
      return {
        ...state,
        data: state.data.filter((profile) => profile.rut !== action.payload),
      };
    default:
      return state;
  }
};
