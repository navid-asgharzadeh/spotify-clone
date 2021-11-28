import { atom } from "recoil";

export const currentTrackState = atom({
  key: "currentTrackIdState", // always should be unique
  default: null,
});
export const isPlaying = atom({
  key: "isPlayingState", // always should be unique
  default: false,
});
