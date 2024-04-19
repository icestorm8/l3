import React, { useEffect, useState } from "react";

export default function Pixa() {
  const [query, setQuery] = useState("");
  const [image_Arr, setImagw_Arr] = useState([]);
  useEffect(() => {
    doApi(query);
  }, []);
  const handleSearch = () => {
    // REMOVING WHITE SPACES BEFORE AND AFTER STRING - TRIM()
    // REPLACING ALL SPACES IN THE MIDDLE (EVEN IN CASE OF SEQUENCE) WITH ONE + SIGN - REPLACE(...)
    console.log(query.trim().replace(/\s+/g, "+"));
  };
  const handleChange = (e) => {
    // on every change of input - saving it to state
    setQuery(e.currentTarget.value);
  };

  const doApi = async (query = "") => {
    const key = "34881482-4599ff7bb74449f6f2390708c";
    const url = `https://pixabay.com/api/?key=${key}&image_type=photo&pretty=true`;
    const urlQuery = `https://pixabay.com/api/?key=${key}&q=cats&image_type=photo&pretty=true`;
    const res = await fetch(query === "" ? url : urlQuery);
    const data = await res.json();
    console.table(data);
  };
  return (
    <div className="d-flex flex-column gap-2 p-4 mt-4 border">
      <div className="input-group">
        <input
          onChange={(e) => handleChange(e)}
          className="form-control"
          type="text"
          placeholder="search query"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="border">
        <h1>j</h1>
      </div>
    </div>
  );
}
