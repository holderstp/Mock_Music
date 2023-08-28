import { useParams } from "react-router-dom";
import React from "react";
import { musics } from "../data/data";

const HomePage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="container w-full flex flex-wrap">
      {musics.map((music) => (
        <div className="w-1/4">
          <img src={music.album_img}></img>
          <h1>{music.name}</h1>
          <h3>{music.author}</h3>
          <audio controls src={music.audio}></audio>
        </div>
      ))}
    </div>
  );
};
export default HomePage;
