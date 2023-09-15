import { useParams } from "react-router-dom";
import { musics } from "../data/data";
import { useEffect } from "react";
import React, { useState } from "react";
interface GenresProps {
  handlePlayer: (index: any) => void;
}

const Genres = ({ handlePlayer }: GenresProps) => {
  const [isGen, setisGen] = useState(false);
  const params = useParams();
  console.log("3920390239102390312", typeof params.gen);
  //Genres Data
  const genresData = musics.filter(
    (music) => params.gen?.toLowerCase() === music.genre.toLowerCase()
  );
  console.log("gennnnnnn", genresData);

  setTimeout(() => {
    setisGen(true);
  }, 100);
  return (
    <div className="container -z-1 w-full h-screen">
      {isGen && (
        <div className="sm:flex flex-wrap mt-5 justify-center items-center h-full ">
          {genresData.map((data: any, index: any) => (
            <div className="rounded-md border-2 border-black h-[450px] flex flex-col justify-center items-center transition ease-in-out hover:-translate-y-1 hover:bg-cyan-300 min-w-[300px] duration-200 sm:w-1/2 lg:w-1/5 mx-4 my-4 bg-cyan-200">
              <button
                className="w-full flex flex-col items-center"
                onClick={() => handlePlayer(data.id)}
              >
                <img src={data.album_img} className="rounded-md w-2/3"></img>
                <h1 className="font-bold text-2xl">{data.name}</h1>
                <h3 className="text-xl">{data.author}</h3>
              </button>
            </div>
          ))}
        </div>
      )}

      <br />
      <br />
    </div>
  );
};

export default Genres;
