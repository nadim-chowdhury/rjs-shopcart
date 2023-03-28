import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import Product from "../components/Product";

const OurStore = () => {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Store</title>
      </Helmet>
      <BreadCrumb title="Store" />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-4">
                <h5 className="mb-4">Filter By</h5>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    In Stock (6)
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Out of Stock (2)
                  </label>
                </div>
              </div>
              <div className="filter-card mb-4">
                <h5 className="mb-4">Price Range</h5>

                <div className="input-group mb-3 min-max">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min"
                    aria-label="Min"
                  />
                  <span className="input-group-text">to</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max"
                    aria-label="Max"
                  />
                </div>
              </div>
              <div className="filter-card mb-4">
                <h5 className="mb-4">Product Categories</h5>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Shirts
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Mobiles
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Shoes
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Laptops
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Ganes
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Headphones
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Cars
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Bikes
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Helicopters
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" />
                  <label className="ms-2" htmlFor="">
                    Planes
                  </label>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex align-items-center gap-10 filter-card mlr">
                  <p className="mb-0 fw-bold">Sort By</p>
                  <select className="form-control form-select w-25 border">
                    <option>Recommended</option>
                    <option>Best Selling</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>

                <div className="all-products d-flex justify-content-between flex-wrap mt-4">
                  {product.map((productData) => {
                    return <Product product={productData} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
