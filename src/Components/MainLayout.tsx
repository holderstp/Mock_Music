import { useState } from "react";
import { NavLink, Outlet, useParams, Route } from "react-router-dom";
import { musics } from "../data/data";
interface LayoutProps {
  clickSearch: () => void;
  clickHome: () => void;
  clickLike: () => void;
  clickGenres: () => void;
  handleLogin: () => void;
  handleLogOut: () => void;
  loginStt: boolean;
  loginInfo: any;
}

const MainLayout = ({
  clickSearch,
  clickHome,
  clickLike,
  clickGenres,
  handleLogin,
  handleLogOut,
  loginStt,
  loginInfo,
}: LayoutProps) => {
  console.log("login infor", loginInfo);
  const [isShown, setIsShown] = useState(false);
  const [isShownUser, setIsShownUser] = useState(false);

  // this function is called when the mouse hovers over box A
  const handleMouseOver = () => {
    setIsShown(true);
  };

  const handleMouseOverUser = () => {
    setIsShownUser(true);
  };
  // this function is called when the mouse out box A
  const handleMouseOut = () => {
    setTimeout(() => {
      setIsShown(false);
    }, 3000);
  };
  const handleMouseOutUser = () => {
    setTimeout(() => {
      setIsShownUser(false);
    }, 3000);
  };
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="w-full flex bg-black text-white h-[50px] p-4 z-50">
          <ul className="navbar-nav flex justify-start items-center w-1/2 space-x-5 text-xl z-50 ">
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
            <button
              className="nav-item transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
              onClick={() => clickLike()}
            >
              <NavLink to="/main/like">Favorite</NavLink>
            </button>
            {/* genres */}
            <li
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className=" relative bg-black transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 rounded-md  "
            >
              Genres
              {isShown && (
                <ul className="space-y-2 absolute bg-black rounded-md p-2 mt-2 w-[150px]">
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
            {loginStt ? (
              <button
                onMouseOver={handleMouseOverUser}
                onMouseOut={handleMouseOutUser}
                className=" relative bg-black transition ease-in-out hover:translate-y-1 hover:scale-100 duration-200 rounded-md w-[200px]"
              >
                <div className="flex">
                  <img
                    src={loginInfo.avatar}
                    alt="error"
                    className="rounded-full w-[15%]"
                  />
                  {loginInfo.userName}
                </div>

                {isShownUser && (
                  <div className="space-y-2 absolute bg-black rounded-md p-2 mt-2 z-10">
                    <button className="nav-item" onClick={() => clickGenres()}>
                      <NavLink to="/main/genres/beats">
                        Edit information
                      </NavLink>
                    </button>

                    <button className="nav-item" onClick={() => clickGenres()}>
                      <NavLink to="/main/genres/ambient">
                        Review information
                      </NavLink>
                    </button>
                    <button className="nav-item" onClick={handleLogOut}>
                      Log out
                    </button>
                  </div>
                )}
              </button>
            ) : (
              <button
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"
                onClick={() => handleLogin()}
              >
                Login
              </button>
            )}

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
        <div className="w-full px-[10%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MainLayout;
