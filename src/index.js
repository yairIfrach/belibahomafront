import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import config from "react-global-configuration";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

config.set({ serverAddress: "http://192.168.40.23:8080" });

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
