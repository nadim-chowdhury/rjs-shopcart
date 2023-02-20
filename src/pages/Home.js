import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 my-auto">
              <div className="main-banner position-relative p-1">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="img"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S15+ Pro</h5>
                  <p>
                    From $999 or $41.62/mo <br /> for 24 mo Footnote
                  </p>
                  <Link to="/" className="button">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="img"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>PRO GADGETS </h4>
                    <h5>MacBook Pro</h5>
                    <p>
                      From $1,299 or $61.82/mo <br /> for 24 mo Footnote
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="img"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>PRO GADGETS</h4>
                    <h5>Rolex Watch</h5>
                    <p>
                      From $699 or $21.42/mo <br /> for 24 mo Footnote
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="img"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>PRO GADGETS</h4>
                    <h5>iPad Pro</h5>
                    <p>
                      From $399 or $41.42/mo <br /> for 24 mo Footnote
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="img"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>PRO GADGETS</h4>
                    <h5>Headphone</h5>
                    <p>
                      From $199 or $11.42/mo <br /> for 24 mo Footnote
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="img" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $50</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="img" />
                  <div>
                    <h6>Daily Serprice Offers</h6>
                    <p className="mb-0">Save upto 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="img" />
                  <div>
                    <h6>Suppurt 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="img" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory default prices</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="img" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
