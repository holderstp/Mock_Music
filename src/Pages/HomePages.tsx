import { useParams } from "react-router-dom";
import React, { HTMLProps, MouseEventHandler, useState } from "react";
import { musics } from "../data/data";
interface HomePageProps {
  handlePlayer: (index: any) => void;
}

function HomePage({ handlePlayer }: HomePageProps) {
  return (
    <div className="container w-full flex flex-wrap space-x-4 space-y-4 mt-5">
      {musics.map((music, index: any) => (
        <button
          className="w-1/4 rounded-md border-solid border-2 border-rose-400   "
          onClick={() => handlePlayer(index)}
        >
          <img src={music.album_img} className="rounded-md"></img>
          <h1 className="font-bold text-2xl">{music.name}</h1>
          <h3 className="text-xl">{music.author}</h3>
        </button>
      ))}
    </div>
  );
}
export default HomePage;
