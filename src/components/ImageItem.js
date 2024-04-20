import React from "react";

export default function ImageItem(props) {
  const image = props.image;

  return (
    <div className="col-md-3 p-0 ">
      <img
        className="img-fluid img-thumbnail"
        src={image.webformatURL}
        alt={image.tags[0]}
      ></img>
    </div>
  );
}
