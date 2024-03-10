import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClavelApp } from './ClavelApp';
import { BrowserRouter } from 'react-router-dom';
import './scss/_app.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClavelApp />
    </BrowserRouter>
  </React.StrictMode>,
)
