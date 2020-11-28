import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner animation="grow" />}>
      <App />

    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
