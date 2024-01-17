import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NoRelay from './NoRelay';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
    {/* <NoRelay /> */}
  </React.StrictMode>
);

reportWebVitals();
