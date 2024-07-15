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
