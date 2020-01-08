import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
 
const appRoot = document.getElementById('root');

ReactDOM.render(<App />, appRoot);
 
if (module.hot) {
  module.hot.accept();
}