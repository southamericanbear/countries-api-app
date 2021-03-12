import { useContext, useEffect } from "react";
import { AppContext } from "../context/Context.provider";
import { getCountries } from "../utils/data";
import { Home } from "./pages/Home";
import { Header } from "./Header";
import "../styles/main.scss";

export const Main = () => {
  const { setCountries, setAllCountries, theme } = useContext(AppContext);

  useEffect(() => {
    getCountries().then(({ data }) => {
      setAllCountries(data);
      setCountries(data);
    });
  }, [setCountries, setAllCountries]);

  return (
    <div className={`Main ${theme === "dark" ? "dark" : ""} `}>
      <Header />
      <Home />
    </div>
  );
};
