import React, { useContext } from "react";
import style from "../../styles/GridCountries.module.scss";
import { AppContext } from "../../context/Context.provider";
import { SearchBar } from "../SearchBar";

export const GridCountries = () => {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={`${style.CountryGridPage}  ${
        theme === "dark" ? style.dark : null
      }  `}
    >
      <SearchBar />
    </div>
  );
};
