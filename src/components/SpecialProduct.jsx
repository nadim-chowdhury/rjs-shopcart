import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = ({ src }) => {
  return (
    <div className="col-4">
      <div className="special-product-card mb-4">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center special-product">
            <img src={src} alt="img" />
            <img src={src} alt="img" />
            <img src={src} alt="img" />
          </div>
          <div className="special-product-content mt-4">
            <h6 className="brand">BrandName</h6>
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
