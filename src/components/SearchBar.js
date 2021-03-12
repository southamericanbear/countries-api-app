import React, { useContext } from "react";
import style from "../styles/SearchBar.module.scss";
import { AppContext } from "../context/Context.provider";
import { DropDown } from "./DropDown";
import { SearchForm } from "./SearchForm";

export const SearchBar = () => {
  const {
    theme,
    regionList,
    searchText,
    setSearchText,
    region,
    setRegion,
  } = useContext(AppContext);

  return (
    <div className={style.SearchBar}>
      <SearchForm
        theme={theme}
        searchText={searchText}
        searchHandler={setSearchText}
      />
      <DropDown
        list={regionList}
        theme={theme}
        selectedItem={region}
        onSelect={setRegion}
        buttonText="Filter by Region"
      />
    </div>
  );
};
