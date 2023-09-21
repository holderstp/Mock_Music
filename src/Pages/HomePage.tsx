import { useEffect, useState } from "react";
import { musics } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowCircleLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
interface HomePageProps {
  handlePlayer: (index: any) => void;
  isFavorite: any;
  handleOnFavorite: (index: any, i: any) => void;
  handleOffFavorite: (index: any, i: any) => void;
}
export function HomePage({
  handlePlayer,
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
    setpageSize(8);
  }, [musics, currentPage]);
  return (
    <div className="flex justify-center items-center">
      {currentPage > 1 && (
        <div className="paginate flex animate-bounce ">
          <button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
            <FontAwesomeIcon icon={faArrowCircleLeft} size="2xl" />
          </button>
        </div>
      )}

      <div className="container -z-5 w-full ">
        <div className="sm:flex flex-wrap mt-5 justify-center items-center h-full">
          {paginateData.map((music: any, index: any) => (
            <div className="rounded-md border-2 border-black h-[450px] flex flex-col justify-center items-center transition ease-in-out hover:-translate-y-1 hover:bg-cyan-300 min-w-[300px] duration-200 sm:w-1/2 lg:w-1/5 mx-4 my-4 bg-cyan-200 ">
              <div className="w-4/5">
                <button onClick={() => handlePlayer(music.id)}>
                  <img
                    src={music.album_img}
                    className="rounded-md object-contain"
                  ></img>
                </button>
              </div>
              <div>
                <h1 className="font-bold text-2xl">{music.name}</h1>
              </div>

              <div>
                <h3 className="text-xl">{music.author}</h3>
              </div>
              <div className="mt-[50px] ">
                {music.favorite ? (
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
      {currentPage < totalPage && (
        <div className="paginate flex animate-bounce">
          <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              rotation={180}
              size="2xl"
            />
          </button>
        </div>
      )}
    </div>
  );
}
