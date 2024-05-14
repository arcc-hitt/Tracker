import React from "react";
import ReactDOM from "react-dom/client";
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
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);