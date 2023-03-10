import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <>
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
                Hotline : 880 1831 125227 - 880 1971 258803
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 align-items-center">
              <h2>
                <Link to="/" className="text-white mt-2">
                  <span style={{ color: "#febd69" }}>SHOP</span>CART
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Your Product Here"
                  aria-label="Search Your Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text px-4" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
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
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" alt="img" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark m-1">0</span>
                      <p className="mb-0">$ 500</p>
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
    </>
  );
}
