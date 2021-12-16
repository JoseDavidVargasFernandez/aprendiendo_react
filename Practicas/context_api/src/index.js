import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProveedorTema} from './contextos/ContextoTema';

ReactDOM.render(
  <React.StrictMode>
    <ProveedorTema>
      <App />
    </ProveedorTema>
  </React.StrictMode>,
  document.getElementById('root')
);


