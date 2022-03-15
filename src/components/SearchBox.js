import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b-- green bg-lightest-blue"
        placeholder="search robots"
        onChange={searchChange}
        type="search"
      />
    </div>
  );
};

export default SearchBox;
