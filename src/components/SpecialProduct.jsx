import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = ({ src }) => {
  return (
    <div style={{ width: "46%" }} className="m-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <img className="me-4" src={src} alt="img" />
            <div className="d-flex justify-content-between me-4">
              <img style={{ width: "45%" }} src={src} alt="img" />
              <img style={{ width: "45%" }} src={src} alt="img" />
            </div>
          </div>
          <div className="special-product-content">
            <h6 className="brand">BrandaAme</h6>
            <h4>This is a Demo Test Product Title</h4>
            <ReactStars
              style={{ color: "#febd69" }}
              classNames="pb-2"
              count={5}
              size={22}
            />
            <p className="price">
              <span>$499.90</span> &nbsp; <strike>$899.90</strike>
            </p>
            <div className="discount-till">
              <Link className="button mt-2">Add To Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
