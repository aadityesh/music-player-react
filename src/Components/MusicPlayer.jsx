import ReactAudioPlayer from "react-audio-player";
import songsObject from "../constants.js";
import { useEffect, useState } from "react";

function MusicPlayer({ togglePlayer, currentSongID, setCurrentSongID }) {
  // console.log(songToPlay);
  const nextSong = () => {
    if (currentSongID < songsObject.length)
      setCurrentSongID((currentSongID) => currentSongID + 1);
  };
  const prevSong = () => {
    if (currentSongID - 1 > 0)
      setCurrentSongID((currentSongID) => currentSongID - 1);
  };
  const track = songsObject.filter((song) => song.id == currentSongID)[0];
  console.log(songsObject.length);

  return (
    <>
      <div className="max-w-[100%] p-2">
        <button
          className="border border-borderColor text-textColour max-w-[200px] max-h-[100px] px-2 py-1 rounded-md"
          onClick={togglePlayer}
        >
          Close X
        </button>
        <section className="flex flex-col gap-3 justify-between items-center max-w-[100%] max-h-[100%] overflow-hidden ">
          <section className="flex gap-x-[100px]">
            {currentSongID !== 1 && (
              <button
                onClick={prevSong}
                className="border border-borderColor text-textColour max-w-[200px] max-h-[100px] px-2 py-1 rounded-md"
              >
                {"< prev"}
              </button>
            )}
            {currentSongID < songsObject.length && (
              <button
                onClick={nextSong}
                className="border border-borderColor text-textColour max-w-[200px] max-h-[100px] px-2 py-1 rounded-md"
              >
                {"next >"}
              </button>
            )}
          </section>
          <section className="flex max-w-[100%] gap-x-5">
            <img
              src={`${track.artist_cover_src}`}
              className="max-h-[300px] max-w-[300px] rounded-[50%]"
              alt=""
            />
          </section>
          <section className="text-center flex flex-col justify-center items-center">
            <p className="text-[30px] font-medium">{track.name}</p>
            <p className="text-[14px]">{track.artist}</p>
          </section>
          <ReactAudioPlayer
            style={{ width: "80%", paddingTop: "15px" }}
            src={`${track.track_src}`}
            autoPlay
            controls
          />
        </section>
      </div>
    </>
  );
}

export default MusicPlayer;
