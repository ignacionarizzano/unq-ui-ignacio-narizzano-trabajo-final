import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');

const renderApp = () => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
