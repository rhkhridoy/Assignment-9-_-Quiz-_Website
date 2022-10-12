import React from "react";

const Blog = () => {
  return (
    <div className="py-8">
        <h2 className="text-4xl text-center py-8 mb-4 text-blue-700 font-bold">FAQ</h2>
      <div
        tabindex="0"
        className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          1. What is the purpose of React Router?
        </div>
        <div className="collapse-content">
          <p>Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.</p>
        </div>
      </div>
      <div
        tabindex="0"
        className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          2. How does Context Api work?
        </div>
        <div className="collapse-content">
          <p>React Context provides a way to pass data through the component tree without having to pass props down manually at every level</p>
        </div>
      </div>
      <div
        tabindex="0"
        className="collapse mb-5 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          3. What is useRef?
        </div>
        <div className="collapse-content">
          <p>The useRef hook returns a mutable object which doesn't re-render the component when it's changed.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
