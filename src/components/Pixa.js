import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ImageItem from "./ImageItem";

export default function Pixa() {
  const [query, setQuery] = useState("");
  const [image_Arr, setImagw_Arr] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // it says on the internt that since i use the doApi only on the useEffect i should declare it inside of the useEffect or use memeorise
    // source: https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    const doApi = async () => {
      console.log(searchParams.get("s"));
      const key = "34881482-4599ff7bb74449f6f2390708c";
      const url = `https://pixabay.com/api/?key=${key}&image_type=photo&pretty=true`;
      const urlQuery = `https://pixabay.com/api/?key=${key}&q=${searchParams.get(
        "s"
      )}&image_type=photo&pretty=true`;
      const res = await fetch(searchParams.get("s") == null ? url : urlQuery);
      const data = await res.json();
      // console.table(data.hits); // check
      setImagw_Arr(data.hits);
    };
    doApi();
  }, [searchParams]);

  const handleSearch = () => {
    // REMOVING WHITE SPACES BEFORE AND AFTER STRING - TRIM()
    // REPLACING ALL SPACES IN THE MIDDLE (EVEN IN CASE OF SEQUENCE) WITH ONE + SIGN - REPLACE(...)
    console.log(query.trim().replace(/\s+/g, "+"));
    if (query === "") {
      navigate("/pixa");
    } else {
      navigate(`/pixa?s=${query}`);
    }
  };
  const handleChange = (e) => {
    // on every change of input - saving it to state
    setQuery(e.currentTarget.value);
  };

  return (
    <div className="d-flex flex-column gap-2 p-4 mt-4 container">
      <h1>Pixabay search</h1>

      <div className="input-group">
        <input
          onChange={(e) => handleChange(e)}
          className="form-control"
          type="text"
          placeholder="search for all images on Pixabay"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="container">
        {image_Arr.length === 0 ? (
          <h1>0 results found for search {query}</h1>
        ) : (
          <div className="row">
            {image_Arr.map((image) => (
              <ImageItem key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
