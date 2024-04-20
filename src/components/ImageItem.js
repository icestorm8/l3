import React from "react";
import { Link } from "react-router-dom";
export default function ImageItem(props) {
  const image = props.image;

  return (
    <div className="col-md-3 p-0">
      <Link to={image.largeImageURL} target="_blank">
        <img
          className="img-fluid img-thumbnail"
          src={image.webformatURL}
          alt={image.tags[0]}
        ></img>
      </Link>
    </div>
  );
}
