import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import LoginModal from './LoginModal';
import Buyer from './Buyer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "ller",
//     element: <Seller />
//   }
// ]);

const Navbar=()=> {
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // const openLoginModal = () => {
  //   console.log('opening login modal');
  //   setIsLoginModalOpen(true);
  // };

  // const closeLoginModal = () => {
  //   console.log('Closing login modal');
  //   setIsLoginModalOpen(false);
  // };

  // useEffect(() => {
  //   setIsLoginModalOpen(false);
  // }, []);

  return(
    <nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/Seller"> Login as Seller </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Buyer">Login as Buyer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/Aggregator">Login as Aggregator</a>
            </li>
          </ul>
          {/* <LoginModal open={isLoginModalOpen} onClose={closeLoginModal} /> */}
        </div>
      </nav>
    </nav>
  )
}

export default Navbar;
