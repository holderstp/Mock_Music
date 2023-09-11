interface FavoriteProps {
  favoriteData: any;
  handlePlayer: (index: any) => void;
}

const Like = ({ favoriteData, handlePlayer }: FavoriteProps) => {
  return (
    <div className="flex flex-col items-center justify-start transform-gpu ">
      <div className="container w-full flex flex-wrap mt-5 justify-start items-center m-auto ">
        {favoriteData.map((data: any, index: any) => (
          <div className="w-1/5 rounded-md border-2 border-indigo-400 h-[300px] flex flex-col justify-center items-center transition ease-in-out  hover:-translate-y-1 hover:scale-100 hover:bg-cyan-200 duration-200">
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
      <br />
      <br />
    </div>
  );
};

export default Like;
