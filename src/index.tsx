import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './redux'
import Main from './router'
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  </React.StrictMode>
);
