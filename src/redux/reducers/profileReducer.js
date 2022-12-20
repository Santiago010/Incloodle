import { types } from "../types/types";

const intialState = {
  err: null,
  message: null,
  profiles: [],
  periods: [],
  careers: [],
  profile: {
    name: "",
    rut: "",
    email: "",
    password: "",
    id: 0,
    rol: 0,
  },
  period: {},
  career: {},
  dataFiltered: [],
};

export const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.profileGet:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        profiles: action.payload.data,
      };
    case types.profileChoose:
      return {
        ...state,
        profile: action.payload,
      };
    case types.profileFilterByRol:
      return {
        ...state,
        dataFiltered: state.profiles.filter(
          (profile) => profile.rol === action.payload
        ),
      };
    case types.profileFilterByName:
      return {
        ...state,
        dataFiltered: state.profiles.filter((profile) =>
          profile.name.toLowerCase().includes(action.payload)
        ),
      };
    case types.filtersEmptyFilter:
      return {
        ...state,
        dataFiltered: [],
      };
    case types.profileGetPeriods:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        periods: action.payload.data,
      };
    case types.profileGetCareers:
      return {
        ...state,
        err: action.payload.err,
        message: action.payload.message,
        careers: action.payload.data,
      };
    case types.profileChoosenPeriod:
      return {
        ...state,
        period: action.payload,
      };
    case types.profileChoosenCareer:
      return {
        ...state,
        career: action.payload,
      };
    default:
      return state;
  }
};
