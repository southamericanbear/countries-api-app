import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import style from "../../styles/CountryDetails.module.scss";
import { AppContext } from "../../context/Context.provider";
import { Loading } from "../Loading";

const CountryDetails = ({ match, history }) => {
  const { getCountry, getCountryNameByCode, theme } = useContext(AppContext);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    setCountry(getCountry(match.params.country.toUpperCase()));
  }, [match.params.country, getCountry]);

  return country ? (
    <div
      className={`${style.CountryDetailsPage}
      ${theme === "dark" ? style.dark : ""}
`}
    >
      <main>
        <button className={style.back} onClick={() => history.goBack()}>
          <i className="fas fa-long-arrow-alt-left"></i>Back
        </button>
        <div className={style.countryDetails}>
          <img src={country.flag} alt={country.name} />
          <h1>{country.name}</h1>
          <ul>
            <li>
              <b>Native Name: </b>
              {country.nativeName}
            </li>
            <li>
              <b>Population: </b>
              {country.population}
            </li>
            <li>
              <b>Region: </b>
              {country.region}
            </li>
            <li>
              <b>Sub Region: </b>
              {country.subregion}
            </li>
            <li>
              <b>Capital: </b>
              {country.capital}
            </li>
          </ul>
          <ul>
            <li>
              <b>Top Level Domain: </b>
              {country.topLevelDomain}
            </li>
            <li>
              <b>Currencies: </b>
              {country.currencies.map((currency) => currency.name).join(", ")}
            </li>
            <li>
              <b></b>
            </li>
          </ul>
          {country.borders.length > 0 && (
            <div className={style.borderCountries}>
              <h2>Border Countries:</h2>
              <div className={style.borderCountriesList}>
                {country.borders.map((countryCode) => (
                  <Link to={countryCode} key={countryCode}>
                    <button>{getCountryNameByCode(countryCode)}</button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  ) : (
    <Loading country={country} theme={theme} history={history} />
  );
};

export default withRouter(CountryDetails);
