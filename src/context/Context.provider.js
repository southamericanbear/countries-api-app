import React, { createContext, useEffect, useState } from "react";
import { searchByName, searchByRegion } from "../utils/data";

export const AppContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  allCountries: [],
  setAllCountries: () => {},
  countries: [],
  getCountry: () => {},
  setCountries: () => {},
  getCountryNameByCode: () => {},
  selectedCountry: {},
  searchText: "",
  setSearchText: () => {},
  regionList: [],
  region: "",
  setRegion: () => {},
});

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [regionList] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar",
  ]);

  const [searchText, setSearchText] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const getCountryNameByCode = (code) => {
    const country = allCountries.find((country) => country.alpha3Code === code);
    const name = country ? country.name : code;
    return name;
  };

  const getCountry = (code) =>
    allCountries.find((country) => country.alpha3Code === code);

  useEffect(() => {
    const countriesByRegion = searchByRegion(allCountries, region);
    const newCountries = searchByName(countriesByRegion, searchText);
    setCountries(newCountries);
  }, [allCountries, searchText, region]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        regionList,
        searchText,
        setSearchText,
        allCountries,
        setAllCountries,
        countries,
        getCountry,
        setCountries,
        getCountryNameByCode,
        region,
        setRegion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
