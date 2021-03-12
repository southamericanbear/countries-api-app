import React from "react";
import style from "../styles/SearchForm.module.scss";

export const SearchForm = (props) => {
  return (
    <div
      className={`${style.SearchForm} ${
        props.theme === "dark" ? style.dark : null
      }`}
    >
      <form>
        <i className="fas fa-search"></i>
        <input
          type="text"
          name="Search"
          value={props.searchText}
          onChange={(e) => props.searchHandler(e.target.value)}
          placeholder="Search for a country..."
        />
      </form>
    </div>
  );
};
