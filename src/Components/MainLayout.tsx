import { useState } from "react";
import { NavLink, Outlet, useParams, Route } from "react-router-dom";
import { musics } from "../data/data";
interface LayoutProps {
  clickSearch: () => void;
  clickHome: () => void;
  clickLike: () => void;
  clickGenres: () => void;
}

const MainLayout = ({
  clickSearch,
  clickHome,
  clickLike,
  clickGenres,
}: LayoutProps) => {
  const [isShown, setIsShown] = useState(false);

  // this function is called when the mouse hovers over box A
  const handleMouseOver = () => {
    setIsShown(true);
  };

  // this function is called when the mouse out box A
  const handleMouseOut = () => {
    setIsShown(false);
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full flex bg-black text-white h-[50px] ">
          <ul
            className="navbar-nav flex justify-start items-center w-1/2 space-x-5 text-xl  "
            style={{ marginLeft: "10%" }}
          >
            <li className="nav-item" onClick={() => clickHome()}>
              <NavLink to="/main/home">Home Page</NavLink>
            </li>
            <li className="nav-item" onClick={() => clickSearch()}>
              <NavLink to="/main/search">Search</NavLink>
            </li>
            <li className="nav-item" onClick={() => clickLike()}>
              <NavLink to="/main/like">Favorite</NavLink>
            </li>
            {/* genres */}
            <button
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className=" absolute top-[11px] left-[25%] bg-black transition ease-in-out delay-150  hover:translate-x-2 hover:scale-100 duration-200 rounded-md"
            >
              Genres
              {isShown && (
                <ul className="space-y-2 mt-3 p-2 bg-gray-500 ">
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/Beats">Beats</NavLink>
                  </li>

                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/Ambient">Ambient</NavLink>
                  </li>
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/Eletronic">Eletronic</NavLink>
                  </li>
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/Classic">Classic</NavLink>
                  </li>
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/Love">Love</NavLink>
                  </li>
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/Rap">Rap</NavLink>
                  </li>
                </ul>
              )}
            </button>
          </ul>

          <div className="user w-1/2 ">aaa</div>
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MainLayout;
