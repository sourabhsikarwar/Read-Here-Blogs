import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <b>Blogs</b>
        </div>
        <div className="links">
          <Link to="/?cat=art" className="link">
            <h6>Art</h6>
          </Link>
          <Link to="/?cat=technology" className="link">
            <h6>Technology</h6>
          </Link>
          <Link to="/?cat=design" className="link">
            <h6>Design</h6>
          </Link>
          <Link to="/?cat=science" className="link">
            <h6>Science</h6>
          </Link>
          <span>Sourabh</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write" className="link">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
