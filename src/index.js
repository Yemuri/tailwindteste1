import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavDrop from './components/header/NavDrop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <NavDrop /> */}
  </React.StrictMode>
);