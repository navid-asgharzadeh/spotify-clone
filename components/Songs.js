import { useRecoilValue } from "recoil";
import { playListState } from "../atoms/playlist";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilValue(playListState);
  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
}

export default Songs;
