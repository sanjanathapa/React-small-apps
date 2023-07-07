import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//import BooksContext from './contexts/books';
import { Provider } from './contexts/books';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BooksContext.Provider value={6}>
  <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  // </BooksContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
