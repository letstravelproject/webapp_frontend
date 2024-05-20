import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import First from './First';
// import Second from './Second';
// import Third from './Third';

// import Fifth from './Fifth';
// import Project from './Project'
// import LifeCycle from './LifeCycle';
// import Employee from './Employee';
// import Form from './Form';
// import Seventh from './Seventh';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
     

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
