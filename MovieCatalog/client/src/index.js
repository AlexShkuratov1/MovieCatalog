import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div class="body">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);
