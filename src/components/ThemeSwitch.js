import React from "react";
import styles from "../styles/ThemeSwitch.module.scss";

export const ThemeSwitch = (props) => {
  return (
    <div className={styles.ThemeSwitch} onClick={props.toggleTheme}>
      <p>
        {props.theme === "light" ? (
          <i className="far fa-moon"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </p>
      <p>Dark Mode</p>
    </div>
  );
};
