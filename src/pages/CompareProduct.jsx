import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

const CompareProduct = () => {
  return (
    <div>
      <Helmet>
        <title>Compare Products</title>
      </Helmet>
      <BreadCrumb title="Compare-Products" />

      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading mb-5">Product Comparision</h3>
            </div>

            <div className="col-3">
              <div className="compare-product-card">
                <div className="product-card-image">
                  <img src="images/tv.jpg" alt="img" />
                </div>
                <div className="compare-product-details">
                  <h3 className="title mb-4 mt-2">Demo Product</h3>
                  <h5 style={{ color: "#bf4800" }} className="price mb-4">
                    $151
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto hic quae inventore nobis sapiente id quas ipsa
                    autem ut assumenda!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card">
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="img" />
                </div>
                <div className="compare-product-details">
                  <h3 className="title mb-4 mt-2">Demo Product</h3>
                  <h5 style={{ color: "#bf4800" }} className="price mb-4">
                    $151
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto hic quae inventore nobis sapiente id quas ipsa
                    autem ut assumenda!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card">
                <div className="product-card-image">
                  <img src="images/laptop.jpg" alt="img" />
                </div>
                <div className="compare-product-details">
                  <h3 className="title mb-4 mt-2">Demo Product</h3>
                  <h5 style={{ color: "#bf4800" }} className="price mb-4">
                    $151
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto hic quae inventore nobis sapiente id quas ipsa
                    autem ut assumenda!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card">
                <div className="product-card-image">
                  <img src="images/homeapp.jpg" alt="img" />
                </div>

                <div className="compare-product-details">
                  <h3 className="title mb-4 mt-2">Demo Product</h3>
                  <h5 style={{ color: "#bf4800" }} className="price mb-4">
                    $151
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto hic quae inventore nobis sapiente id quas ipsa
                    autem ut assumenda!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProduct;
