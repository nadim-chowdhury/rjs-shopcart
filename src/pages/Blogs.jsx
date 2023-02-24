import React from "react";
import { Helmet } from "react-helmet";
import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper py-5">
        <div className="container-xxl">
          <div className="row d-flex flex-wrap justify-content-between">
            <BlogCard
              title="Amazing Tools For Daily Use"
              imgSrc="https://images.pexels.com/photos/7821597/pexels-photo-7821597.jpeg"
            />

            <BlogCard
              title="EveryThing You Need"
              imgSrc="https://images.pexels.com/photos/7693229/pexels-photo-7693229.jpeg"
            />
            <BlogCard
              title="Get Your Desire Products"
              imgSrc="https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg"
            />

            <BlogCard
              title="Buy Anytime, Anywhere"
              imgSrc="https://images.pexels.com/photos/235209/pexels-photo-235209.jpeg"
            />

            <BlogCard
              title="Buy Anytime, Anywhere"
              imgSrc="https://images.pexels.com/photos/235209/pexels-photo-235209.jpeg"
            />
            <BlogCard
              title="Get Your Desire Products"
              imgSrc="https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg"
            />
            <BlogCard
              title="Amazing Tools For Daily Use"
              imgSrc="https://images.pexels.com/photos/7821597/pexels-photo-7821597.jpeg"
            />
            <BlogCard
              title="EveryThing You Need"
              imgSrc="https://images.pexels.com/photos/7693229/pexels-photo-7693229.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
