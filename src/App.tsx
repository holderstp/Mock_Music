import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import HomePage from "./Pages/HomePages";
import SearchPage from "./Pages/SearchPage";
import Player from "./Pages/Player";
import { musics } from "./data/data";

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

  const filterData = musics.filter(
    (music) =>
      search.toLowerCase() === music.name.toLowerCase() ||
      search === music.author.toLowerCase() ||
      search === music.genre.toLowerCase()
  );
  const handlePlayer = (index: any) => {
    setId((index + 1).toString());

    setIsplaying(true);
  };
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handlePlayerSearch = (index: any) => {
    setId(index);
    setIsplaying(true);
  };
  const clickSearch = () => {
    setIsSearch(true);
  };
  const clickHome = () => {
    setIsSearch(false);
  };

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
            </Route>
          )}
          )
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
