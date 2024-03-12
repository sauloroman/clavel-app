import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './scss/_app.scss';
import { ClavelApp } from './ClavelApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <ClavelApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
