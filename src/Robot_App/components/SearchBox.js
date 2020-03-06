import React from "react";
const SearchBox = ({ searchfield, search_Change }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={search_Change}
      />
    </div>
  );
};
export default SearchBox;
