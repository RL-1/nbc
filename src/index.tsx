import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import './index.css'
import { SnackbarProvider } from "notistack";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
          <App />
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>
);

