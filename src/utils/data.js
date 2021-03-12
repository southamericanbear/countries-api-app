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

export const getBorders = (borders) => {
  if (borders.length === 0) return "None";
  if (borders.length > 0) {
    return borders.toString();
  }
  return borders;
};

export const getNestedData = (response) => {
  let formattedResponse = "";

  if (response.length === 1) return response[0].name;
  for (let i = 0; i < response.length; i++) {
    formattedResponse += `${response[i].name},`;
  }
  return formattedResponse;
};
