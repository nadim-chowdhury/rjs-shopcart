import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, category, image } = props.product;
  return (
    <div key={id} className="m-3" style={{ width: "45%" }}>
      <div className="special-product-card mb-4">
        <div className="store-product">
          <div className="d-flex flex-column align-items-center all-product-card ms-4">
            <img className="me-4" src={image} alt="img" />
            <div className="d-flex justify-content-around me-4">
              <img src={image} alt="img" />
              <img src={image} alt="img" />
            </div>
          </div>
          <div className="special-product-content m-4">
            <h6 className="brand">{category}</h6>
            <h4>{title}</h4>
            <ReactStars
              style={{ color: "#febd69" }}
              classNames="pb-2"
              count={5}
              size={22}
            />
            <p className="price">
              <span>${price}</span> &nbsp; <strike>$899.90</strike>
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

export default Product;
