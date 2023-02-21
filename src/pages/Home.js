import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

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

      <section className="home-wrapper-2 pt-5">
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

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-10 align-items-center justify-content-around">
                  <div>
                    <h6>Laptops</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="img" />
                </div>

                <div className="d-flex gap-10 align-items-center justify-content-around">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="img" />
                </div>

                <div className="d-flex gap-10 align-items-center justify-content-around">
                  <div>
                    <h6>Smart TV</h6>
                    <p>14 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="img" />
                </div>

                <div className="d-flex gap-10 align-items-center justify-content-around">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/watch.jpg" alt="img" />
                </div>

                <div className="d-flex gap-10 align-items-center justify-content-around">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="img" />
                </div>

                <div className="d-flex gap-10 align-items-center justify-content-around">
                  <div>
                    <h6>Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="img" />
                </div>

                <div className="d-flex gap-10 align-items-center justify-content-around">
                  <div>
                    <h6>Accessories</h6>
                    <p>14 Items</p>
                  </div>
                  <img src="images/acc.jpg" alt="img" />
                </div>

                <div className="d-flex gap-10 align-items-center justify-content-around">
                  <div>
                    <h6>Home Appliances</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white p-3">
                <Marquee className="d-flex justify-content-between">
                  <div className="mx-4 mq-img w-25">
                    <img src="images/brand-01.png" alt="img" />
                  </div>
                  <div className="mx-4 mq-img w-25">
                    <img src="images/brand-02.png" alt="img" />
                  </div>
                  <div className="mx-4 mq-img w-25">
                    <img src="images/brand-03.png" alt="img" />
                  </div>
                  <div className="mx-4 mq-img w-25">
                    <img src="images/brand-04.png" alt="img" />
                  </div>
                  <div className="mx-4 mq-img w-25">
                    <img src="images/brand-05.png" alt="img" />
                  </div>
                  <div className="mx-4 mq-img w-25">
                    <img src="images/brand-06.png" alt="img" />
                  </div>
                  <div className="mx-4 mq-img w-25">
                    <img src="images/brand-07.png" alt="img" />
                  </div>
                  <div className="mx-4 mq-img w-25">
                    <img src="images/brand-08.png" alt="img" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper pt-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading mb-5">Featured Collections</h3>
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
              brand="boAt"
              title="Sound Speaker"
              imgSrc="images/speaker.jpg"
            />
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading mb-5">Our Latest Blogs</h3>
            </div>

            <BlogCard
              title="Amazing Tools For Daily Use"
              imgSrc="https://images.pexels.com/photos/7821597/pexels-photo-7821597.jpeg"
            />
            <BlogCard
              title="Get Your Desire Products"
              imgSrc="https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg"
            />
            <BlogCard
              title="EveryThing You Need"
              imgSrc="https://images.pexels.com/photos/7693229/pexels-photo-7693229.jpeg"
            />

            <BlogCard
              title="Buy Anytime, Anywhere"
              imgSrc="https://images.pexels.com/photos/235209/pexels-photo-235209.jpeg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
