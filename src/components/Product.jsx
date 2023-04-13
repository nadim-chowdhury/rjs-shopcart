import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, category, image } = props.product;
  const dispatch = useDispatch();

  return (
    <div key={id} className="m-3" style={{ width: "45%" }}>
      <div className="special-product-card mb-4">
        <div className="store-product">
          <Link to={`${id}`} style={{ color: "#444" }}>
            <div className="d-flex align-items-center all-product-card ms-4">
              <img className="me-4" src={image} alt="img" />

              <div className="me-4">
                <h6 className="brand">{category}</h6>
                <p className="price mb-0">
                  <span>${price}</span> &nbsp; <strike>$899.90</strike>
                </p>

                <ReactStars
                  style={{ color: "#febd69" }}
                  classNames="pb-2"
                  count={5}
                  size={22}
                />
              </div>
            </div>
            <h4 className="ms-4 my-2">{title.slice(0, 27)}</h4>
          </Link>
          <div className="special-product-content ms-4">
            <button
              onClick={() => dispatch(add(props.product))}
              className="button my-2"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
