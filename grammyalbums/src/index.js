import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './Store/store';
import App from './App';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

