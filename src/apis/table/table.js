import { instance } from "..";

export const fetchRecommandList = () => {
  return instance.get("/api/recommand");
};
