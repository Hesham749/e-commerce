import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./rtk/Store";
import { Provider } from "react-redux";
import "flowbite";

import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Toaster position="top-center" />
        T
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);


