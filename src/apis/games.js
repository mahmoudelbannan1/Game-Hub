import { axiosInistance } from "./config";

export const getGameList = () => {
  return axiosInistance.get("/gamehub");
};
export const getGameDetails = (id) => {
  return axiosInistance.get(`/gamehub/${id}`);
};
