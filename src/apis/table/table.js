import { instance } from "..";

export const fetchRecommandList = () => {
  return instance.get("/api/recommand");
};

export const fetchPlaceInfo = (name) => {
  return instance.get(`/api/${name}`);
};

export const fetchSearchingResult = (name) => {
  return instance.get(`/api/search/${name}`);
};

export const fetchMapList = () => {
  return instance.get("/api/map");
};

export const fetchCategory = (category) => {
  return instance.get(`/api/category/${category}`);
};
