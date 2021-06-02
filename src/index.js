import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
// import data store related functions
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  // all components under App will have access to the data in the redux data store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
