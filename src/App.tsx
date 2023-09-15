import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import MainLayout from "./Components/MainLayout";

import SearchPage from "./Pages/SearchPage";
import Player from "./Pages/Player";
import { musics } from "./data/data";
import { HomePage } from "./Pages/HomePage";
import Genres from "./Pages/Genres";
import Like from "./Pages/Like";
import { IFavoriteItem } from "./types/favoriteType";
import Login from "./Components/Login";
import { users } from "./data/user";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./Components/UpdateUser";
import ReviewUser from "./Components/ReviewUser";

function App() {
  // let location = useLocation();
  // console.log(location);
  const [isPlaying, setIsplaying] = useState(false);
  const [index, setIndex] = useState(0);
  //
  const [id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [genre, setGenre] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [isFavorite, setIsfavotite] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useState([musics]);
  const [onModalLogin, setOnModalLogin] = useState(false);
  const [onModalUser, setOnModalUser] = useState(false);
  const [islogin, setIslogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setconfimPassword] = useState("");
  const [verifyPass, setverifyPass] = useState(false);
  const [loginSTT, setloginSTT] = useState(false);
  const [signupSTT, setSignupSTT] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState("");
  const [onModalReview, setonModalReview] = useState(false);
  const [reviewUser, setReviewUser] = useState("");
  const [loginInfo, setloginInfo] = useState({
    index: 0,
    avatar: "avatar",
    userName: "userName",

    password: "password",
  });

  ///

  // search Data
  const filterData = musics.filter(
    (music) =>
      search.toLowerCase() === music.name.toLowerCase() ||
      search === music.author.toLowerCase() ||
      search === music.genre.toLowerCase()
  );
  /// favorite data

  // verify user
  let newUsers = [...users];
  console.log("user", newUsers);
  const favoriteData = favoriteList[0].filter(
    (music) => music.favorite === true
  );
  const handlePlayer = (index: any) => {
    setId(index);

    setIsplaying(true);
  };
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handlePlayerSearch = (index: any) => {
    setId(index);
    setIsplaying(true);
  };
  const handlePlayerGenres = (index: any) => {
    setId(index);
    setIsplaying(true);
  };
  const clickSearch = () => {
    setIsSearch(true);
  };
  const clickHome = () => {
    setIsSearch(false);
  };
  const clickLike = () => {
    setIsSearch(false);
    if (loginSTT) {
      setloginSTT(true);
    } else {
      setOnModalLogin(true);
    }
  };
  // favorite
  const handleLogin = () => {
    setOnModalLogin(true);
  };
  const handleOnSignup = () => {
    setOnModalLogin(true);
    setSignupSTT(true);
  };

  const handleLogOut = () => {
    setOnModalLogin(false);
    setloginSTT(false);
  };
  const handleOffLogin = () => {
    console.log("offlogin");
    setOnModalLogin(false);

    setSignupSTT(false);
  };
  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const handlePassWord = (e: any) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassWord = (e: any) => {
    setconfimPassword(e.target.value);
  };
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    validateFormLogin();
    if (signupSTT) {
      validateFormSignUp();
    }
  };
  const handleOnSubmitUpdate = (e: any, image: any) => {
    e.preventDefault();
    users[parseInt(indexUpdate)].avatar = image.preview;
    users[parseInt(indexUpdate)].userName = userName;
    users[parseInt(indexUpdate)].password = password;
    setloginInfo({
      index: index,
      avatar: image.preview,
      userName: userName,
      password: password,
    });
    setloginSTT(true);
    setOnModalUser(false);
  };
  // form sign up
  const validateFormSignUp = () => {
    if (password === confimPassword) {
      setverifyPass(true);
      users.push({
        avatar: "../imgs/shiba.jpg",
        userName: userName,
        password: password,
      });
      setOnModalLogin(false);
    } else {
      setverifyPass(false);
    }
  };

  const validateFormLogin = () => {
    newUsers.forEach((newUser, index) => {
      console.log(userName);
      console.log(password);
      console.log("username", newUser.userName);
      console.log("password", newUser.password);
      if (newUser.userName === userName && newUser.password === password) {
        setloginInfo({
          index: index,
          avatar: newUser.avatar,
          userName: userName,
          password: password,
        });
        setOnModalLogin(false);
        setloginSTT(true);
      } else return;
    });
  };
  let updatedFavorites = [...favoriteList];
  const handleOnFavorite = (index: any, i: any) => {
    // Create a copy of favoriteList
    // Update the favorite status of the selected music item
    updatedFavorites[0][i].favorite = !index;
    // console.log("1109", updatedFavorites[0][i]);
    setFavoriteList(updatedFavorites);

    setIsfavotite(updatedFavorites[0][i].favorite);
  };
  const handleOffFavorite = (index: any, i: any) => {
    let updatedFavorites = [...favoriteList];
    // Create a copy of favoriteList
    // Update the favorite status of the selected music item
    updatedFavorites[0][i].favorite = !index;
    // console.log("1109", updatedFavorites[0][i]);
    setFavoriteList(updatedFavorites);
    setIsfavotite(updatedFavorites[0][i].favorite);
  };
  ///
  const handlePlayFavorite = (index: any) => {
    setId(index);
    setIsplaying(true);
  };
  const pathname = window.location.pathname; //returns the current url minus the domain name
  console.log(pathname);
  if (pathname === "/") {
    window.location.href = "/main/home";
  }

  /// Update user
  const handleUpdateUser = (index: any) => {
    setIndexUpdate(index);
    setOnModalUser(true);
  };
  const handleOffUpdate = () => {
    setOnModalUser(false);
    setonModalReview(false);
  };
  const handleReviewInfo = (index: any) => {
    setonModalReview(true);
    setReviewUser(index);
  };
  return (
    <div
      className="bg-gradient-to-r from-gray-400 to-white-500 "
      // style={{ backgroundImage: `url(${musics[randomNum].album_img})` }}
    >
      <BrowserRouter>
        <Routes>
          (
          {isPlaying ? (
            <Route
              path="/"
              element={
                <Player
                  index={id}
                  setIsFull={setIsFull}
                  setId={setId}
                  isFull={isFull}
                  windowWidth={windowWidth}
                  filterData={filterData}
                  isSearch={isSearch}
                  isFavorite={musics[parseInt(id)].favorite}
                  handleOnFavorite={handleOnFavorite}
                  handleOffFavorite={handleOffFavorite}
                />
              }
            >
              <Route
                path="/main"
                element={
                  <MainLayout
                    clickSearch={clickSearch}
                    clickGenres={clickHome}
                    clickLike={clickLike}
                    clickHome={clickHome}
                    handleLogin={handleLogin}
                    loginStt={loginSTT}
                    loginInfo={loginInfo}
                    handleLogOut={handleLogOut}
                    handleOnSignup={handleOnSignup}
                    handleUpdateUser={handleUpdateUser}
                    handleReviewInfo={handleReviewInfo}
                  />
                }
              >
                <Route
                  path="/main/home"
                  element={
                    <HomePage
                      handlePlayer={handlePlayer}
                      isFavorite={isFavorite}
                      handleOnFavorite={handleOnFavorite}
                      handleOffFavorite={handleOffFavorite}
                    />
                  }
                ></Route>
                <Route
                  path="/main/:name"
                  element={
                    <SearchPage
                      search={search}
                      handleSearch={handleSearch}
                      handlePlayer={handlePlayerSearch}
                      isPlaying={isPlaying}
                      filterData={filterData}
                    />
                  }
                ></Route>
                <Route
                  path="/main/like"
                  element={
                    <Like
                      favoriteData={favoriteData}
                      handlePlayer={handlePlayFavorite}
                      loginStt={loginSTT}
                      handleOnFavorite={handleOnFavorite}
                      handleOffFavorite={handleOffFavorite}
                    />
                  }
                ></Route>
                <Route
                  path="/main/genres/:gen"
                  element={<Genres handlePlayer={handlePlayerGenres} />}
                ></Route>
              </Route>
            </Route>
          ) : (
            <Route
              path="/main"
              element={
                <MainLayout
                  clickSearch={clickSearch}
                  clickGenres={clickHome}
                  clickLike={clickLike}
                  clickHome={clickHome}
                  handleLogin={handleLogin}
                  loginStt={loginSTT}
                  loginInfo={loginInfo}
                  handleLogOut={handleLogOut}
                  handleOnSignup={handleOnSignup}
                  handleUpdateUser={handleUpdateUser}
                  handleReviewInfo={handleReviewInfo}
                />
              }
            >
              <Route
                path="/main/home"
                element={
                  <HomePage
                    handlePlayer={handlePlayer}
                    isFavorite={isFavorite}
                    handleOnFavorite={handleOnFavorite}
                    handleOffFavorite={handleOffFavorite}
                  />
                }
              ></Route>
              <Route
                path="/main/:name"
                element={
                  <SearchPage
                    handleSearch={handleSearch}
                    search={search}
                    handlePlayer={handlePlayerSearch}
                    isPlaying={isPlaying}
                    filterData={filterData}
                  />
                }
              ></Route>
              <Route
                path="/main/like"
                element={
                  <Like
                    favoriteData={favoriteData}
                    handlePlayer={handlePlayFavorite}
                    loginStt={loginSTT}
                    handleOnFavorite={handleOnFavorite}
                    handleOffFavorite={handleOffFavorite}
                  />
                }
              ></Route>
              <Route
                path="/main/genres/:gen"
                element={<Genres handlePlayer={handlePlayerGenres} />}
              ></Route>
            </Route>
          )}
          ){/* <Route path="/login" element={<Login />}></Route> */}
        </Routes>
      </BrowserRouter>
      {onModalLogin ? (
        <Login
          handleOffLogin={handleOffLogin}
          handleUserName={handleUserName}
          handlePassWord={handlePassWord}
          handleOnSubmit={handleOnSubmit}
          signupSTT={signupSTT}
          handleConfirmPassWord={handleConfirmPassWord}
          verifyPass={verifyPass}
        />
      ) : (
        ""
      )}
      {onModalUser && (
        <UpdateUser
          handlePassWord={handlePassWord}
          handleUserName={handleUserName}
          handleOnSubmitUpdate={handleOnSubmitUpdate}
          handleOffUpdate={handleOffUpdate}
        />
      )}
      {onModalReview && (
        <ReviewUser reviewUser={reviewUser} handleOffUpdate={handleOffUpdate} />
      )}
    </div>
  );
}

export default App;
