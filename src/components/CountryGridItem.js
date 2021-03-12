import React from "react";
import style from "../styles/CountryGridItem.module.scss";

export const CountryGridItem = ({
  theme,
  flag,
  name,
  population,
  region,
  capital,
  onClick,
}) => {
  return (
    <div
      className={`${style.Country}
        ${theme === "light" ? style.light : style.dark}`}
      onClick={onClick}
    >
      <img className={style.flag} src={flag} alt={name} />
      <div className={style.infoBlock}>
        <h1>{name}</h1>
        <ul>
          <li>
            <strong>Population:&nbsp;</strong>
            {population}
            <br />
          </li>
          <li>
            <strong>Region:&nbsp;</strong>
            {region}
            <br />
          </li>
          <li>
            <strong>Capital:&nbsp;</strong>
            {capital}
            <br />
          </li>
        </ul>
      </div>
    </div>
  );
};
