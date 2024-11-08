import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
function MusicListComponent({ song, togglePlayer, setCurrentSongID }) {
  return (
    <>
      <section className=" relative flex justify-between items-center border border-borderColor p-2 rounded-md max-w-[400px] max-h-[250px] shadow-md bg-cardColour">
        <section className="group-hover:opacity-30 transition-opacity duration-300">
          <img
            src={`${song.artist_cover_src}`}
            alt="artist"
            className="max-h-[100px] aspect-square rounded-md"
          />
        </section>
        <section className="flex flex-col justify-end">
          <p className="text-[24px] font-medium text-end">{song.name}</p>
          <p className="text-[16px] text-end">{song.artist}</p>
          <FaCirclePlay
            className="self-end h-6 w-6 pt-1 cursor-pointer"
            onClick={() => {
              setCurrentSongID(song.id);
              togglePlayer();
            }}
          />
        </section>
      </section>
    </>
  );
}

export default MusicListComponent;
