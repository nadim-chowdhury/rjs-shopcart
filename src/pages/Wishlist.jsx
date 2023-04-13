import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <BreadCrumb title="Wishlist" />

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="section-heading mb-5">My Wishlist</h3>
            </div>

            <ProductCard
              brand="Xiaomi"
              title="HD Android Tv"
              imgSrc="images/tv.jpg"
            />

            <ProductCard
              brand="Rolex"
              title="Rolex Watch"
              imgSrc="images/watch.jpg"
            />

            <ProductCard
              brand="Apple"
              title="MacBook Pro"
              imgSrc="images/laptop.jpg"
            />

            <ProductCard
              brand="Sony"
              title="Mirrorless Cam"
              imgSrc="images/camera.jpg"
            />

            <ProductCard
              brand="Apple"
              title="Air Buds"
              imgSrc=" images/acc.jpg"
            />

            <ProductCard
              brand="Xiaomi"
              title="HD Android Tv"
              imgSrc="images/tv.jpg"
            />

            <ProductCard
              brand="Apple"
              title="Air Buds"
              imgSrc=" images/acc.jpg"
            />

            <ProductCard
              brand="Sony"
              title="Mirrorless Cam"
              imgSrc="images/camera.jpg"
            />

            <ProductCard
              brand="boAt"
              title="Sound Speaker"
              imgSrc="images/speaker.jpg"
            />

            <ProductCard
              brand="Apple"
              title="MacBook Pro"
              imgSrc="images/laptop.jpg"
            />

            <ProductCard
              brand="boAt"
              title="Sound Speaker"
              imgSrc="images/speaker.jpg"
            />

            <ProductCard
              brand="Rolex"
              title="Rolex Watch"
              imgSrc="images/watch.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
