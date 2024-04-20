import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="container position-absolute top-0">
      <div className="container col-10">
        <div className="d-flex flex-row gap-2">
          <span className="lead border border-primary bg-primary p-2 text-white rounded-bottom border-top-0 text-decoration-none">
            Shaked t
          </span>
          <Link
            to="/"
            className="border border-primary bg-white p-2 text-primary rounded-bottom border-top-0 text-decoration-none"
          >
            home
          </Link>
          <Link
            to="/pixa"
            className=" border border-primary bg-white p-2 text-primary rounded-bottom border-top-0 text-decoration-none"
          >
            pixa
          </Link>
        </div>
      </div>
    </nav>
  );
}
