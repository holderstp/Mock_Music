import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams, Route } from "react-router-dom";
import { musics } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faHome,
  faMusic,
  faSearch,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
interface LayoutProps {
  clickSearch: () => void;
  clickHome: () => void;
  clickLike: () => void;
  clickGenres: () => void;
  handleLogin: () => void;
  handleOnSignup: () => void;
  handleLogOut: () => void;
  handleUpdateUser: (index: any) => void;
  handleReviewInfo: (index: any) => void;
  loginStt: boolean;
  loginInfo: any;
}

const MainLayout = ({
  clickSearch,
  clickHome,
  clickLike,
  clickGenres,
  handleLogin,
  handleOnSignup,
  handleLogOut,
  handleUpdateUser,
  handleReviewInfo,
  loginStt,
  loginInfo,
}: LayoutProps) => {
  console.log("login infor", loginInfo);
  const [isShown, setIsShown] = useState(false);
  const [isShownUser, setIsShownUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // this function is called when the mouse hovers over box A
  const handleMouseOver = () => {
    setIsShown(true);
  };
  const handleOnClick = () => {
    setIsShown(!isShown);
  };

  const handleMouseOverUser = () => {
    setIsShownUser(true);
  };
  const handleClickOverUser = () => {
    setIsShownUser(true);
  };
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  // this function is called when the mouse out box A
  const handleMouseOut = () => {
    setTimeout(() => {
      setIsShown(false);
    }, 2000);
  };
  const handleMouseOutUser = () => {
    setTimeout(() => {
      setIsShownUser(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex-col w-full h-creen">
        <div className="w-full flex bg-black text-white h-[60px] p-4 z-50 fixed">
          <ul className="navbar-nav hidden sm:flex justify-start items-center w-1/2 space-x-5 text-xl z-50 ">
            <li
              className="nav-item transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
              onClick={() => clickHome()}
            >
              <NavLink to="/main/home">Home </NavLink>
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
            <button
              // onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleOnClick}
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
            </button>
          </ul>
          <div className="w-1/3 sm:hidden  flex justify-start items-center">
            <button onClick={handleOpenMenu} className="relative">
              <FontAwesomeIcon icon={faBars} />
              {isOpenMenu && (
                <div className="absolute bg-black rounded-md">
                  <ul className="z-50 w-[100px]">
                    <li
                      className="nav-item transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
                      onClick={() => clickHome()}
                    >
                      <NavLink to="/main/home">
                        <FontAwesomeIcon icon={faHome} />
                      </NavLink>
                    </li>
                    <li
                      className="nav-item transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
                      onClick={() => clickSearch()}
                    >
                      <NavLink to="/main/search">
                        <FontAwesomeIcon icon={faSearch} />
                      </NavLink>
                    </li>
                    <button
                      className="nav-item transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
                      onClick={() => clickLike()}
                    >
                      <NavLink to="/main/like">
                        <FontAwesomeIcon icon={faHeart} />
                      </NavLink>
                    </button>
                    {/* genres */}
                    <li
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      className=" relative bg-black transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200 rounded-md  "
                    >
                      <FontAwesomeIcon icon={faMusic} />
                      {isShown && (
                        <ul className="space-y-2 absolute bg-black rounded-md p-2 mt-2 w-[150px]">
                          <li
                            className="nav-item"
                            onClick={() => clickGenres()}
                          >
                            <NavLink to="/main/genres/beats">Beats</NavLink>
                          </li>

                          <li
                            className="nav-item"
                            onClick={() => clickGenres()}
                          >
                            <NavLink to="/main/genres/ambient">Ambient</NavLink>
                          </li>
                          <li
                            className="nav-item"
                            onClick={() => clickGenres()}
                          >
                            <NavLink to="/main/genres/eletronic">
                              Eletronic
                            </NavLink>
                          </li>
                          <li
                            className="nav-item"
                            onClick={() => clickGenres()}
                          >
                            <NavLink to="/main/genres/classic">Classic</NavLink>
                          </li>
                          <li
                            className="nav-item"
                            onClick={() => clickGenres()}
                          >
                            <NavLink to="/main/genres/love">Love</NavLink>
                          </li>
                          <li
                            className="nav-item"
                            onClick={() => clickGenres()}
                          >
                            <NavLink to="/main/genres/rap">Rap</NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>

          <div className="user w-2/3 flex justify-end items-center text-xl ">
            {loginStt ? (
              <button
                // onMouseOver={handleMouseOverUser}
                onMouseOut={handleMouseOutUser}
                onClick={handleClickOverUser}
                className=" relative bg-black transition ease-in-out hover:scale-105 duration-200 rounded-md w-[300px] z-50 "
              >
                <div className="flex justify-center items-center h-[50px]">
                  <img
                    src={loginInfo.avatar}
                    alt="error"
                    className="rounded-md w-[40px] mr-5 h-[90%]"
                  />
                  <div className="font-bold text-lg"> {loginInfo.userName}</div>
                </div>

                {isShownUser && (
                  <div className="space-y-2 absolute bg-black rounded-md z-50 w-full">
                    <div>
                      <button
                        className="nav-item"
                        onClick={() => handleUpdateUser(loginInfo.index)}
                      >
                        Edit information
                      </button>
                    </div>
                    <div>
                      <button
                        className="nav-item"
                        onClick={() => handleReviewInfo(loginInfo.index)}
                      >
                        Review information
                      </button>
                    </div>
                    <div>
                      <button className="nav-item" onClick={handleLogOut}>
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </button>
            ) : (
              <button
                className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 mr-5"
                onClick={() => handleLogin()}
              >
                Login
              </button>
            )}

            <button
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hidden md:inline-block"
              onClick={() => handleOnSignup()}
            >
              Sign Up
            </button>
            <button
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200  md:hidden"
              onClick={() => handleOnSignup()}
            >
              <FontAwesomeIcon icon={faSignInAlt} />
            </button>

            {/* <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200">
              <div>Login</div>
            </button>
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200">
              <div>Sign Up</div>
            </button> */}
          </div>
        </div>
        <div className="w-full px-[10%] py-[60px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MainLayout;
