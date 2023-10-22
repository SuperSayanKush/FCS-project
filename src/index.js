import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from './Demo';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import Wallpaper from './Wallpaper';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Seller from './Seller';
import Buyer from './Buyer';
import Aggregator from './Aggregator';
import Sellerloggedin from './Sellerloggedin';
import Buyerloggedin from './Buyerloggedin';
import Aggregatorloggedin from './Aggregatorloggedin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Seller",
    element: <Seller />
  },
  {
    path: "Buyer",
    element: <Buyer />
  },
  {
    path: "Aggregator",
    element: <Aggregator />
  },
  {
    path: "Sellerloggedin",
    element: <Sellerloggedin />
  },
  {
    path: "Buyerloggedin",
    element: <Buyerloggedin />
  }
  ,
  {
    path: "Aggregatorloggedin",
    element: <Aggregatorloggedin />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App></App>
  //   {/* <Demo />
  //   <Navbar />
  //   <Wallpaper/> */}
  //  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
