import axios from "axios";

export const getCountries = () => {
  return axios.get(`https://restcountries.eu/rest/v2/all`);
};

export const searchByName = (countries, search) => {
  if (search === "") {
    return countries;
  }

  const newCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });

  return newCountries;
};

export const searchByRegion = (countries, region) => {
  if (!region) return countries;
  return countries.filter((country) => country.region === region);
};
