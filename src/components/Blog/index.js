import React from "react";
import BlogSlider from "./BlogSlider";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="heading">
                <h3>Latest Blog</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
              </div>
            </div>
          </div>
          <BlogSlider />
        </div>
      </div>
    </>
  );
};

export default Blog;
