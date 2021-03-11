import { useContext, useEffect } from "react";
import { AppContext } from "../context/Context.provider";
import { getCountries } from "../utils/data";
import { GridCountries } from "./GridCountries";

export const Main = () => {
  const { setCountries, setAllCountries } = useContext(AppContext);

  useEffect(() => {
    getCountries().then(({ data }) => {
      setAllCountries(data);
      setCountries(data);
    });
  }, [setCountries, setAllCountries]);

  return <GridCountries />;
};
