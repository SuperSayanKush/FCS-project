// SellerDashboard.js
import React from 'react';

const Sellerloggedin = ({ name, phoneNumber, address }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Welcome, Kushagra!</h2>
          <h6>Phone Number: 1234567899</h6>
          <h6>Address: "G-20 New Delhi"</h6>
        </div>
        <p>
          <div>
            <h1>Offers :</h1>
            <h2>0</h2>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Sellerloggedin;