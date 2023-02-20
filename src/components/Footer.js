import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-20 align-items-center">
                <img src="images/newsletter.png" alt="img" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>

            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text px-4 subscribe" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-3">Contact Us</h4>
              <div className="footer-links">
                <address className="text-white fs-6 py-2 mb-0">
                  East Jurain <br /> Dhaka-1204, Bangladesh
                </address>
                <p className="text-white mb-0">+8801971258803</p>
                <p className="text-white py-2 mb-0">
                  nadim-chowdhury@outlook.com
                </p>
                <div className="social-icons">
                  <a
                    className="text-white me-2"
                    href="https://www.facebook.com/nadim.ch0wdhury"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    className="text-white me-2"
                    href="https://github.com/nadim-chowdhury"
                  >
                    <BsGithub />
                  </a>
                  <a
                    className="text-white me-2"
                    href="https://www.linkedin.com/in/nadim-chowdhury"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    className="text-white"
                    href="https://twitter.com/nadim_ch0wdhury"
                  >
                    <BsTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-3">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2" to="/">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2" to="/">
                  Refund Policy
                </Link>
                <Link className="text-white py-2" to="/">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2" to="/">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-3">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2" to="/">
                  About Us
                </Link>
                <Link className="text-white py-2" to="/">
                  F.A.Q
                </Link>
                <Link className="text-white py-2" to="/">
                  Contact
                </Link>
                <Link className="text-white py-2" to="/">
                  My Account
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-3">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2" to="/">
                  Mobiles
                </Link>
                <Link className="text-white py-2" to="/">
                  Laptops
                </Link>
                <Link className="text-white py-2" to="/">
                  Watch
                </Link>
                <Link className="text-white py-2" to="/">
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-align-center text-white mb-0 p-2">
                &copy; {new Date().getFullYear()} All Rights Reserved by Nadim
                Chowdhury
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
