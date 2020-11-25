import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Spinner } from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
    <App />

    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
