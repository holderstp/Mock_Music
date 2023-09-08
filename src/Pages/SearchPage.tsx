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
  const filterData = musics.filter(
    (music) =>
      search.toLowerCase() === music.name.toLowerCase() ||
      search === music.author.toLowerCase() ||
      search === music.genre.toLowerCase()
  );

  return (
    <div className="flex flex-col">
      <div>
        <input
          onChange={(e) => handleSearch(e)}
          autoFocus
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="flex space-x-4">
        {filterData.map((item, index) => (
          <button className="w-1/4" onClick={() => handlePlayer(index)}>
            <img src={item.album_img}></img>
            <h1>{item.name}</h1>
            <h3>{item.author}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};
export default SearchPage;
