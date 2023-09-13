import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
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

function App() {
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
  const [islogin, setIslogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginSTT, setloginSTT] = useState(false);
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
  // favorite
  const handleLogin = () => {
    setOnModalLogin(true);
  };
  const handleOffLogin = () => {
    console.log("offlogin");
    setOnModalLogin(false);
  };
  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const handlePassWord = (e: any) => {
    setPassword(e.target.value);
  };
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    validateFormLogin();
  };
  const validateFormLogin = () => {
    newUsers.forEach((newUser) => {
      console.log(userName);
      console.log(password);
      console.log("username", newUser.userName);
      console.log("password", newUser.password);
      if (newUser.userName === userName && newUser.password === password) {
        setOnModalLogin(false);
        setloginSTT(true);
      } else return;
    });
  };

  const handleFavorite = (index: any, i: any) => {
    let updatedFavorites = [...favoriteList];
    // Create a copy of favoriteList
    // Update the favorite status of the selected music item
    updatedFavorites[0][i].favorite = !index;
    // console.log("1109", updatedFavorites[0][i]);

    setFavoriteList(updatedFavorites);
    setIsfavotite(!isFavorite);
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

  return (
    <div className="h-screen">
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
                  isFavorite={isFavorite}
                  handleFavorite={handleFavorite}
                />
              }
            >
              <Route
                path="/main"
                element={
                  <MainLayout
                    clickSearch={clickSearch}
                    clickGenres={clickHome}
                    clickLike={clickHome}
                    clickHome={clickHome}
                    handleLogin={handleLogin}
                  />
                }
              >
                <Route
                  path="/main/home"
                  element={<HomePage handlePlayer={handlePlayer} />}
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
                  clickLike={clickHome}
                  clickHome={clickHome}
                  handleLogin={handleLogin}
                />
              }
            >
              <Route
                path="/main/home"
                element={<HomePage handlePlayer={handlePlayer} />}
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
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
