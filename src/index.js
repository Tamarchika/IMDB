import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_API_KEY}`;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
