import React from "react";
import { Link } from "react-router-dom";

function Orders() {
  return (
    <div className="orders">
      <div className="noOrders">
        <p>You havn't placed any order today</p>
        <Link to={"/"} className="btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Orders;
