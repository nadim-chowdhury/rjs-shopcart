/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Header() {
  const items = useSelector((state) => state.cart);
  const [user] = useAuthState(auth);
  const [query, setQuery] = useState("");
  console.log(user);

  let totalPrice = 0.0;
  for (let i = 0.0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setAllProducts(res.data));
  }, [query]);

  return (
    <div>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0 text-uppercase">
                Free Shiping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0 text-uppercase me-1">
                Hotline : 880 1971 258803
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center justify-content-between">
            <div className="col-3 align-items-center">
              <h1 className="flex">
                <Link
                  to="/"
                  className="text-white mt-2 d-flex align-items-center justify-content-between"
                >
                  <span style={{ color: "#febd69" }}>SHOP</span>CART &nbsp;{" "}
                  <span className="fs-6 mb-0">
                    SHOP
                    <br />
                    MORE
                  </span>
                </Link>
              </h1>
            </div>

            <div className="col-4 position-relative">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Your Product Here"
                  aria-label="Search Your Product Here"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query.length > 0 ? (
                  <span
                    className="input-group-text px-4"
                    id="basic-addon2"
                    onClick={() => setQuery("")}
                  >
                    <AiOutlineCloseCircle />
                  </span>
                ) : (
                  <span className="input-group-text px-4" id="basic-addon2">
                    <BsSearch />
                  </span>
                )}
              </div>
              {query.length > 0 ? (
                <div className="position-absolute search-item">
                  {allProducts
                    .filter((item) => {
                      return query.toLowerCase() === ""
                        ? null
                        : item.title.toLowerCase().includes(query);
                    })
                    .map((item) => (
                      <div key={item.id} className="search-item-details">
                        <img src={item.image} alt="" />
                        <div>
                          <h6>
                            <Link
                              to={`/ourstore/${item.id}`}
                              onClick={() => setQuery("")}
                            >
                              {item.title}
                            </Link>
                          </h6>
                          <h5>${item.price}</h5>
                        </div>
                      </div>
                    ))}
                </div>
              ) : null}
            </div>

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="compare-products"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/compare.svg" alt="img" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/wishlist.svg" alt="img" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/user.svg" alt="img" />
                    <p className="mb-0">
                      {user ? (
                        <span className="text-warning">
                          {user.email.slice(0, 6)}...
                        </span>
                      ) : (
                        "Log In"
                      )}
                      <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="img" />
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
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent gap-20 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="img" />
                      <span>Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Mobiles
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Laptops
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="ourstore">
                      Store
                    </NavLink>
                    <NavLink className="text-white" to="blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <marquee loop className="bg-danger fs-5 text-white py-2">
        All Demo products in home pages are static. For using functionality go
        to Store page and Cart page. Store page's all products are coming from
        API.
      </marquee>
    </div>
  );
}
