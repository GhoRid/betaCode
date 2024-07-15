import { atom } from "recoil";

export const locationState = atom({
  key: "locationState",
  default: {
    center: {
      lat: 35.17828963,
      lng: 126.909254315,
    },
    errMsg: null,
    isLoading: true,
  },
});
