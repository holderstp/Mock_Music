import React, { useEffect, useState } from "react";
import { musics } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "../FaIcons";
import {
  faArrowAltCircleRight,
  faArrowCircleLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
interface HomePageProps {
  handlePlayer: (index: any) => void;
  isFavorite: any;
  handleOnFavorite: (index: any, i: any) => void;
  handleOffFavorite: (index: any, i: any) => void;
}
export function HomePage({
  handlePlayer,
  isFavorite,
  handleOnFavorite,
  handleOffFavorite,
}: HomePageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(8);
  const [totalPage, setTotalpage] = useState(0);
  const [paginateData, setpaginateData] = useState<any>([]);
  useEffect(() => {
    const counttotalpage = Math.ceil(musics.length / pageSize);
    //tinh so trang
    setTotalpage(counttotalpage);
    const start = (currentPage - 1) * pageSize;
    const end = currentPage * pageSize;
    const result = musics.slice(start, end);
    setpaginateData(result);
  }, [musics, currentPage]);
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="paginate flex animate-pulse ">
        <button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
          <FontAwesomeIcon icon={faArrowCircleLeft} size="2xl" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-start transform-gpu z--10">
        <div className="container w-full flex flex-wrap mt-5 justify-center items-center h-full ">
          {paginateData.map((music: any, index: any) => (
            <div className="rounded-md border-2 border-black h-[400px] flex flex-col justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-cyan-200 min-w[200px] duration-200 md:w-1/3 sm:w-1/2 xl:w-1/4">
              <div className="w-4/5">
                <button onClick={() => handlePlayer(music.id)}>
                  <img src={music.album_img} className="rounded-md"></img>
                </button>
              </div>
              <div>
                <h1 className="font-bold text-2xl">{music.name}</h1>
              </div>

              <div>
                <h3 className="text-xl">{music.author}</h3>
              </div>
              <div className="mt-[10%] ">
                {isFavorite ? (
                  <button
                    onClick={() => handleOnFavorite(music.favorite, index)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="2xl"
                      style={{ color: "red" }}
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => handleOffFavorite(music.favorite, index)}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="2xl"
                      style={{ color: "white" }}
                    />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
      </div>
      <div className="paginate flex animate-pulse">
        <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
          <FontAwesomeIcon icon={faArrowCircleLeft} rotation={180} size="2xl" />
        </button>
      </div>
    </div>
  );
}
