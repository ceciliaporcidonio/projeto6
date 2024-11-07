// src/index.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Atualize para importar de 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Selecione o contêiner root
const container = document.getElementById('root');

// Crie a raiz usando createRoot
const root = ReactDOM.createRoot(container);

// Renderize o App com o Provider do Redux
root.render(
  <React.StrictMode> {/* Modo estrito para melhores práticas */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
