import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <BreadCrumb title="Wishlist" />
    </div>
  );
};

export default Wishlist;
