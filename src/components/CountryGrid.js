import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AppContext } from "../context/Context.provider";
import style from "../styles/CountryGrid.module.scss";
import { CountryGridItem } from "./CountryGridItem";

const CountryGrid = ({ history }) => {
  const { theme, countries } = useContext(AppContext);

  return (
    <div className={style.CountryGrid}>
      {countries.map((country) => (
        <CountryGridItem
          key={country.alpha3Code}
          theme={theme}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          onClick={() => {
            history.push(country.alpha3Code);
            window.localStorage.setItem("code", country.alpha3Code);
          }}
        />
      ))}
    </div>
  );
};

export default withRouter(CountryGrid);
