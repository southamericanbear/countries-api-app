import React from "react";
import style from "../styles/CountryDetails.module.scss";

export const Loading = ({ country, theme, history }) => {
  return (
    <div>
      {country ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className={`${style.CountryDetailsPage} ${
            theme === "dark" ? style.dark : ""
          } ${style.error}    `}
        >
          <h1>Country not found!</h1>
          <button className={style.back} onClick={() => history.goBack()}>
            <i className="fas fa-long-arrow-alt-left"></i>Back
          </button>
        </div>
      )}
    </div>
  );
};
