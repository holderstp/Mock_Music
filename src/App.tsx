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

function App() {
  const [isPlaying, setIsplaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [genre, setGenre] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [isFavorite, setIsfavotite] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useState([musics]);
  // search Data
  const filterData = musics.filter(
    (music) =>
      search.toLowerCase() === music.name.toLowerCase() ||
      search === music.author.toLowerCase() ||
      search === music.genre.toLowerCase()
  );
  /// favorite data

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
  const handleFavorite = (index: any, i: any) => {
    const updatedFavorites = [...favoriteList]; // Create a copy of favoriteList
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
          )
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
