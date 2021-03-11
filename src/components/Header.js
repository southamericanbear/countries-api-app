import React, { useEffect } from "react";
import Brightness3OutlinedIcon from "@material-ui/icons/Brightness3Outlined";
import styled from "styled-components";

const Navbar = styled.div`
  background: ${(props) => props.theme.background};
  transition: all 0.5s ease;
`;

export const Header = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      window.localStorage.setItem("theme", "dark");
      props.setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      props.setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      props.setTheme(localTheme);
    }
  }, [props]);

  return (
    <Navbar className="navbar">
      <h1>Where in the world?</h1>
      <div className="theme-switcher" onClick={changeTheme}>
        <Brightness3OutlinedIcon className="icon" />
        <span>Dark Mode</span>
      </div>
    </Navbar>
  );
};
