// SellerDashboard.js
import React from 'react';
import Wallpaper from './Wallpaper';


const Buyerloggedin = ({ name, phoneNumber, address }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Welcome, Anshul!</h2>
          <h6>Phone Number: 783267899</h6>
          <h6>Address: "420 blah blah"</h6>
        </div>
        <Wallpaper/>
      </div>
    </div>
  );
};

export default Buyerloggedin;