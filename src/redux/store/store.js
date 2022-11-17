import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/authReducer";
import { profileReducer } from "../reducers/profileReducer";
import { teacherReducer } from "../reducers/teacherReducer";
const reducers = combineReducers({
  authReducer,
  profileReducer,
  teacherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
// export const store = configureStore({
//   reducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: myCustomApiService
//       }
//     })
//   devTools: true,
// });
