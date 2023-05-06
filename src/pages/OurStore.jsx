import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OurStore = () => {
  const [product, setProduct] = useState([]);

  const items = useSelector((state) => state.cart);

  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  const fetchData = async () => {
    return await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Store</title>
      </Helmet>
      <BreadCrumb title="Store" />

      <div className="store-wrapper home-wrapper-2 py-5 position-relative">
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
                    return (
                      <Product product={productData} key={productData.id} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-fixed bottom-0 end-0 m-4 p-2 rounded-3 cart-x">
          {items.length > 0 ? (
            <div>
              <Link
                to="cart"
                className="d-flex align-items-center gap-10 text-white"
              >
                <div className="d-flex flex-column align-items-center gap-10">
                  <span className="badge bg-white text-dark m-1 h-full fs-6">
                    {items.length}
                  </span>
                  <p className="mb-0">
                    ${totalPrice === 0 ? "0.00" : Math.floor(totalPrice)}
                  </p>
                </div>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default OurStore;
