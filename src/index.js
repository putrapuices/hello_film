import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const stateFilm = {
  tes: "Coba redux",
};

const reducerFilm = (state = stateFilm) => {
  return state;
};

const store = createStore(reducerFilm);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Routes />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
