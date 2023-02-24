import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <BreadCrumb title="Blogs" />
    </div>
  );
};

export default Contact;
