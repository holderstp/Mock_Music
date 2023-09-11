import React, { useEffect, useState } from "react";
import { musics } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "../FaIcons";
import {
  faArrowAltCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
interface HomePageProps {
  handlePlayer: (index: any) => void;
}

export function HomePage({ handlePlayer }: HomePageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);
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
    <div className="flex flex-col items-center justify-start transform-gpu ">
      <div className="container w-full flex flex-wrap mt-5 justify-start items-center m-auto ">
        {paginateData.map((music: any, index: any) => (
          <div className="w-1/5 rounded-md border-2 border-indigo-400 h-[300px] flex flex-col justify-center items-center transition ease-in-out  hover:-translate-y-2 hover:scale-90 hover:bg-cyan-200 duration-200">
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
      <br />
      <br />
      <div className="paginate flex space-x-4 ">
        <button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
          <FontAwesomeIcon icon={faArrowCircleLeft} size="2xl" />
        </button>
        <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
          <FontAwesomeIcon icon={faArrowCircleLeft} rotation={180} size="2xl" />
        </button>
      </div>
    </div>
  );
}
