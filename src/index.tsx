import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import {addChangeCanvasHandler, getState} from './state/state'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
function render() {
  root.render(
    <React.StrictMode>
      <App canvas={getState()}/>
    </React.StrictMode>
  );
}

addChangeCanvasHandler(render);
render();
