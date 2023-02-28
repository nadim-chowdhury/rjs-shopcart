import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const Cart = () => {
  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <BreadCrumb title="Cart" />
    </div>
  );
};

export default Cart;
