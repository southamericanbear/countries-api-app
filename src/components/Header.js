import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "./ThemeSwitch";
import { AppContext } from "../context/Context.provider";
import styles from "../styles/Header.module.scss";

export const Header = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div
      className={`${styles.Fwc} ${
        theme === "light" ? styles.light : styles.dark
      }   `}
    >
      <div className={styles.Header}>
        <p>
          <Link to="/">Where in the world?</Link>
        </p>
        <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};
