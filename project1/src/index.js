import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// second();

// function second() {

//   root.render(
//     <div>
//       <p>
//         It's
//       </p>
//       <h2>
//         {new Date().toLocaleDateString()}
//       </h2>
//       <h3>
//         {new Date().toLocaleTimeString()}
//       </h3>
//       <p>
//         time
//       </p>
//       <button onClick={second}>Update</button>
//     </div>
//   )
// }

// setInterval(second, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
