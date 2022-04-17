import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./store/reducers/index";
const store = createStore(reducers);
//========================================
// import store, { persistor } from "./store";
// import { PersistGate } from 'redux-persist/lib/integration/react';
//========================================

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


{/* <PersistGate persistor={persistor}>
</PersistGate> */}