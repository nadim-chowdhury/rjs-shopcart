import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function ProductCard(props) {
  return (
    <div className="col-2 mb-4">
      <Link to="/" className="blog-card">
        <div className="wishlist-icon d-flex justify-content-end">
          <Link>
            <img
              className="p-2 me-2 mt-2 rounded"
              style={{ backgroundColor: "#ededed" }}
              src="images/wish.svg"
              alt="wishlist"
            />
          </Link>
        </div>

        <div className="card-image d-flex justify-content-between align-items-start">
          <img src={props.imgSrc} className="img-fluid" alt="img" />

          <div className="action-bar m-2">
            <div className="d-flex flex-column">
              <Link to="/">
                <img src="images/view.svg" alt="img" />
              </Link>
              <Link to="/">
                <img src="images/prodcompare.svg" alt="img" />
              </Link>
              <Link to="/">
                <img src="images/add-cart.svg" alt="img" />
              </Link>
            </div>
          </div>
        </div>

        <div className="blog-content">
          <p className="date">{props.brand}</p>
          <h5 className="title">{props.title}</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mb-0">$100.00</p>
          <ReactStars
            style={{ color: "#febd69" }}
            classNames="pb-2"
            count={5}
            size={22}
          />
        </div>
      </Link>
    </div>
  );
}
