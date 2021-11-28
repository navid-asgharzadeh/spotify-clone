import { atom } from "recoil";

export const playListIdState = atom({
  key: "playlistIdState", // always should be unique
  default: "37i9dQZF1DX4sWSpwq3LiO", //Peaceful piano playlist
});

export const playListState = atom({
  key: "playlistState", // always should be unique
  default: null,
});
