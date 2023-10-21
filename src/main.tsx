import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider}  from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import store  from './redux/store';
import {router} from './routes/routes/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
