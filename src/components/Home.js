import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Link to={"/pixa"} className="btn btn-primary">
        Pixa
      </Link>
    </div>
  );
}
