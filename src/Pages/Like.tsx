import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FavoriteProps {
  favoriteData: any;
  handlePlayer: (index: any) => void;
  loginStt: any;
  handleOnFavorite: (favorite: any, index: any) => void;
  handleOffFavorite: (favorite: any, index: any) => void;
}

const Like = ({
  favoriteData,
  handlePlayer,
  loginStt,
  handleOnFavorite,
  handleOffFavorite,
}: FavoriteProps) => {
  return (
    <>
      {loginStt ? (
        <div className="container -z-2 w-full ">
          <div className="sm:flex flex-wrap mt-5 justify-center items-center h-full ">
            {favoriteData.map((data: any, index: any) => (
              <div className="rounded-md border-2 border-black h-[450px] flex flex-col justify-center items-center transition ease-in-out hover:-translate-y-1 hover:bg-cyan-200 min-w-[300px] duration-200 sm:w-1/2 lg:w-1/5 mx-4 my-4">
                <button
                  className="w-full flex flex-col items-center"
                  onClick={() => handlePlayer(data.id)}
                >
                  <img src={data.album_img} className="rounded-md w-2/3"></img>
                  <h1 className="font-bold text-2xl">{data.name}</h1>
                  <h3 className="text-xl">{data.author}</h3>
                </button>
                {/* <div className="mt-[50px] ">
                  {data.favorite ? (
                    <button
                      onClick={() => handleOnFavorite(data.favorite, index)}
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="2xl"
                        style={{ color: "red" }}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOffFavorite(data.favorite, index)}
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="2xl"
                        style={{ color: "white" }}
                      />
                    </button>
                  )}
                </div> */}
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Like;
