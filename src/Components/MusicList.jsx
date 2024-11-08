import React, { useState } from "react";
import songsObject from "../constants.js";
import MusicListComponent from "./MusicListComponent.jsx";
import MusicPlayer from "./MusicPlayer.jsx";

function MusicList() {
  const [playerSwitch, setPlayerSwitch] = useState(false);
  const [currentSongID, setCurrentSongID] = useState(0);

  const togglePlayer = () => {
    setPlayerSwitch((e) => !e);
    console.log(playerSwitch);
  };

  return (
    <>
      {playerSwitch ? (
        <div className="pt-[30px]">
          <MusicPlayer
            togglePlayer={togglePlayer}
            currentSongID={currentSongID}
            setCurrentSongID={setCurrentSongID}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 grid-rows-3 gap-5  pt-[70px]">
          {songsObject.map((song) => (
            <MusicListComponent
              key={song.id}
              song={song}
              togglePlayer={togglePlayer}
              setCurrentSongID={setCurrentSongID}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default MusicList;
