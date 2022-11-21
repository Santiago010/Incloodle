import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { profileReducer } from "../reducers/profileReducer";
import { teacherReducer } from "../reducers/teacherReducer";
import { studentReducer } from "../reducers/studentReducer";
import { uiReducer } from "../reducers/uiReducer";
const reducers = combineReducers({
  authReducer,
  profileReducer,
  teacherReducer,
  studentReducer,
  uiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
