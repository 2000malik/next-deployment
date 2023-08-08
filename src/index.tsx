import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppRoutes } from './Routes';
import axios from "axios";
import store, { persistor } from './Setup/redux/store';
import * as _redux from "./Setup"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

_redux.setupAxios(axios, store)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
