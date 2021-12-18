import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
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
  <Auth0Provider
    domain="puices.us.auth0.com"
    clientId="cCqRCdsrvl7DnxLC9tIJPMhRESh3BxzT"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <Routes />
    </Provider>
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Routes />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
