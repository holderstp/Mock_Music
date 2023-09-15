import { useParams } from "react-router-dom";
import { musics } from "../data/data";
import { useEffect, useState } from "react";
interface Props {
  // img: string;
  // name: string;
  // author: string;
  // audio: string;
  // musicId: string;
  // id: string;
  // isFull: boolean;
  // genre: string;
  // genres: string;
  // isSearch: boolean;
  isPlaying: boolean;
  filterData: any;
  search: string;
  // windowWidth: number;
  // setId: (e: string) => void;
  // setIsFull: (e: boolean) => void;
  handleSearch: (e: any) => void;
  handlePlayer: (index: any) => void;
}

const SearchPage = ({
  // img,
  // name,
  // author,
  // audio,
  // musicId,
  // isFull,
  // id,
  // genre,
  // genres,
  // isSearch,
  filterData,
  isPlaying,
  search,
  // windowWidth,
  // setId,
  handleSearch,
  handlePlayer,
}: Props) => {
  const params = useParams();
  console.log(params);
  console.log(isPlaying);
  console.log(filterData);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center">
        <input
          className="search1 min-w-[400px]"
          onChange={(e) => handleSearch(e)}
          autoFocus
          placeholder="Search by name, author, genres"
          type="text"
        />
      </div>
      <div className="container w-full -z-1 sm:flex flex-wrap mt-5 justify-center items-center h-full ">
        {filterData.map((music: any, index: any) => (
          <div className="rounded-md border-2 border-black h-[450px] flex flex-col justify-center items-center transition ease-in-out hover:-translate-y-1 hover:bg-cyan-200 min-w-[300px] duration-200 sm:w-1/2 lg:w-1/5 mx-4 my-4">
            <button
              className="w-full flex flex-col items-center"
              onClick={() => handlePlayer(music.id)}
            >
              <img src={music.album_img} className="rounded-md w-2/3"></img>
              <h1 className="font-bold text-2xl">{music.name}</h1>
              <h3 className="text-xl">{music.author}</h3>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchPage;
