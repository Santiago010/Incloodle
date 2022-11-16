import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import { store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
