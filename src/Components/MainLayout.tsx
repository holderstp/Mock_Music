import { useState } from "react";
import { NavLink, Outlet, useParams, Route } from "react-router-dom";
import { musics } from "../data/data";
interface LayoutProps {
  clickSearch: () => void;
  clickHome: () => void;
  clickLike: () => void;
  clickGenres: () => void;
  handleLogin: () => void;
}

const MainLayout = ({
  clickSearch,
  clickHome,
  clickLike,
  clickGenres,
  handleLogin,
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
      <div className="flex flex-col w-full ">
        <div className="w-full flex bg-black text-white h-[50px] p-4 z-50">
          <ul
            className="navbar-nav flex justify-start items-center w-1/2 space-x-5 text-xl z-50 "
            // style={{ marginLeft: "10%" }}
          >
            <li
              className="nav-item transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
              onClick={() => clickHome()}
            >
              <NavLink to="/main/home">Home Page</NavLink>
            </li>
            <li
              className="nav-item transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
              onClick={() => clickSearch()}
            >
              <NavLink to="/main/search">Search</NavLink>
            </li>
            <li
              className="nav-item transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
              onClick={() => clickLike()}
            >
              <NavLink to="/main/like">Favorite</NavLink>
            </li>
            {/* genres */}
            <li
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className=" relative bg-black transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 rounded-md "
            >
              Genres
              {isShown && (
                <ul className="space-y-2 absolute bg-black rounded-md p-2 mt-2">
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/beats">Beats</NavLink>
                  </li>

                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/ambient">Ambient</NavLink>
                  </li>
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/eletronic">Eletronic</NavLink>
                  </li>
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/classic">Classic</NavLink>
                  </li>
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/love">Love</NavLink>
                  </li>
                  <li className="nav-item" onClick={() => clickGenres()}>
                    <NavLink to="/main/genres/rap">Rap</NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <div className="user w-1/2 flex justify-end items-center space-x-5 text-xl ">
            <button
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"
              onClick={() => handleLogin()}
            >
              Login
            </button>
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200">
              Sign Up
            </button>

            {/* <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200">
              <div>Login</div>
            </button>
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200">
              <div>Sign Up</div>
            </button> */}
          </div>
        </div>
        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MainLayout;
