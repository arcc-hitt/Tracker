import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './state/index.js';
import { Provider } from 'react-redux';

import App from "./App.jsx";
import "./index.css";

const store = configureStore({
  reducer: {
    goals: goalsReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);