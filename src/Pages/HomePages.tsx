import { useParams } from "react-router-dom";
import React, { HTMLProps, MouseEventHandler, useState } from "react";
import { musics } from "../data/data";
interface HomePageProps {
  handlePlayer: (index: any) => void;
}

function HomePage({ handlePlayer }: HomePageProps) {
  return (
    <div className="container w-full flex flex-wrap">
      {musics.map((music, index: any) => (
        <button className="w-1/4" onClick={() => handlePlayer(index)}>
          <img src={music.album_img}></img>
          <h1>{music.name}</h1>
          <h3>{music.author}</h3>
        </button>
      ))}
    </div>
  );
}
export default HomePage;
