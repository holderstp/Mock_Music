import { useState } from "react";

import sound1 from "../public/imgs/greenmusic.png";
import sound2 from "../public/imgs/soundorg.png";
import sound3 from "../public/imgs/soundcl.png";
import sound4 from "../public/imgs/blue.png";
import sound5 from "../public/imgs/red.png";
import sound6 from "../public/imgs/swing.gif";
import sound7 from "../public/imgs/red2.png";
import sound8 from "../public/imgs/double.png";
import sound9 from "../public/imgs/music.png";
import sound10 from "../public/imgs/icons8-audio-wave.gif";
import sound11 from "../public/imgs/icons8-music-heart.gif";
import sound12 from "../public/imgs/icons8-music-library.gif";
import sound13 from "../public/imgs/icons8-microphone.gif";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/MainLayout";

import SearchPage from "./Pages/SearchPage";
import Player from "./Pages/Player";
import { musics } from "./data/data";
import { HomePage } from "./Pages/HomePage";
import Genres from "./Pages/Genres";
import Like from "./Pages/Like";

import Login from "./Components/Login";
import { users } from "./data/user";

import UpdateUser from "./Components/UpdateUser";
import ReviewUser from "./Components/ReviewUser";

function App() {
  let arraySound = [
    sound1,
    sound2,
    sound3,
    sound4,
    sound5,
    sound6,
    sound7,
    sound8,
    sound9,
    sound10,
    sound11,
    sound12,
    sound13,
  ];
  // let location = useLocation();
  // console.log(location);
  const [isPlaying, setIsplaying] = useState(false);
  const [index, setIndex] = useState(0);
  //
  const [id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isFavorite, setIsfavotite] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useState([musics]);
  const [onModalLogin, setOnModalLogin] = useState(false);
  const [onModalUser, setOnModalUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setconfimPassword] = useState("");
  const [verifyPass, setverifyPass] = useState(false);
  const [loginSTT, setloginSTT] = useState(false);
  const [signupSTT, setSignupSTT] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState("");
  const [onModalReview, setonModalReview] = useState(false);
  const [reviewUser, setReviewUser] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  const [loginInfo, setloginInfo] = useState({
    index: 0,
    avatar: "avatar",
    userName: "userName",
    password: "password",
  });
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

  const favoriteData = favoriteList[0].filter(
    (music) => music.favorite === true
  );
  // const favoriteData = musics.filter((music) => music.favorite === true);
  const handlePlayer = (index: any) => {
    setId(index);
    setIsplaying(true);
  };
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    setWindowWidth(window.innerWidth);
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
    setSignupSTT(false);
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
    // thay doi data
    users[parseInt(indexUpdate)].avatar = image.preview;
    users[parseInt(indexUpdate)].userName = userName;
    users[parseInt(indexUpdate)].password = password;
    // thay doi hien thi
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
      setSignupErrorMessage("");
      setverifyPass(true);
      users.push({
        avatar: "../imgs/shiba.jpg",
        userName: userName,
        password: password,
      });
      setOnModalLogin(false);
    } else {
      setverifyPass(false);
      setSignupErrorMessage("Password and confirm password must equal !");
    }
  };
  // const handleSetIsplaying=()=>{
  //   setIsplaying(!isPlaying)
  // }}
  const validateFormLogin = () => {
    newUsers.forEach((newUser, index) => {
      console.log(userName);
      console.log(password);
      console.log("username", newUser.userName);
      console.log("password", newUser.password);
      if (newUser.userName === userName && newUser.password === password) {
        setLoginErrorMessage("");
        setIndex(index);
        setloginInfo({
          index: index,
          avatar: newUser.avatar,
          userName: userName,
          password: password,
        });
        setOnModalLogin(false);
        setloginSTT(true);
      } else {
        setLoginErrorMessage("User name or password incorrect !");
      }
    });
  };

  const handleOnFavorite = (index: any, i: any) => {
    let updatedFavorites = [...favoriteList];
    // Create a copy of favoriteList
    // Update the favorite status of the selected music item
    updatedFavorites[0][i].favorite = !index;
    // console.log("1109", updatedFavorites[0][i]);
    setFavoriteList(updatedFavorites);

    setIsfavotite(updatedFavorites[0][i].favorite);
    // setIsfavotite(!isFavorite);
  };
  const handleOnFavoriteHomePage = (index: any, i: any) => {
    let updatedFavorites = [...favoriteList];
    // Create a copy of favoriteList
    // Update the favorite status of the selected music item
    updatedFavorites[0][i].favorite = !index;
    // console.log("1109", updatedFavorites[0][i]);
    setFavoriteList(updatedFavorites);

    setIsfavotite(updatedFavorites[0][i].favorite);
    // setIsfavotite(!isFavorite);
  };
  const handleOffFavorite = (index: any, i: any) => {
    let updatedFavorites = [...favoriteList];
    // Create a copy of favoriteList
    // Update the favorite status of the selected music item
    updatedFavorites[0][i].favorite = !index;
    // console.log("1109", updatedFavorites[0][i]);
    setFavoriteList(updatedFavorites);
    setIsfavotite(updatedFavorites[0][i].favorite);
    // setIsfavotite(!isFavorite);
  };
  const handleOffFavoriteHomePage = (index: any, i: any) => {
    let updatedFavorites = [...favoriteList];
    // Create a copy of favoriteList
    // Update the favorite status of the selected music item
    updatedFavorites[0][i].favorite = !index;
    // console.log("1109", updatedFavorites[0][i]);
    setFavoriteList(updatedFavorites);
    setIsfavotite(updatedFavorites[0][i].favorite);
    // setIsfavotite(!isFavorite);
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

  let sound = arraySound[Math.floor(Math.random() * arraySound.length)];
  console.log("radom", sound);
  const handleSetIsplaying = () => {
    setIsplaying(!isPlaying);
  };
  return (
    <div
      className="bg-gradient-to-r from-gray-400 to-white-500 "
      // style={{ backgroundImage: `url(${sound})` }}
      style={{ backgroundImage: `${isPlaying ? `url(${sound6})` : ""}` }}
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
                  handleSetIsplaying={handleSetIsplaying}
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
                      handleOnFavorite={handleOnFavoriteHomePage}
                      handleOffFavorite={handleOffFavoriteHomePage}
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
                    handleOnFavorite={handleOnFavoriteHomePage}
                    handleOffFavorite={handleOffFavoriteHomePage}
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
          loginErrorMessage={loginErrorMessage}
          signupErrorMessage={signupErrorMessage}
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
