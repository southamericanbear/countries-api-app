import React, { useContext } from "react";
import style from "../../styles/GridCountries.module.scss";
import { AppContext } from "../../context/Context.provider";
import { SearchBar } from "../SearchBar";
import CountryGrid from "../CountryGrid";

export const Home = () => {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={`${style.CountryGridPage}  ${
        theme === "dark" ? style.dark : null
      }  `}
    >
      <SearchBar />
      <CountryGrid />
    </div>
  );
};
