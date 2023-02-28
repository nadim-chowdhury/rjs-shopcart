import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <div className="col-3 mb-4">
      <div className="blog-card">
        <div className="card-image">
          <img src={props.imgSrc} className="img-fluid" alt="img" />
        </div>

        <div className="blog-content">
          <p className="date">{new Date().toLocaleString()}</p>
          <h5 className="title">{props.title}</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            suscipit?
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
