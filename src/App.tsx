import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

  const handlePlayer = (index: any) => {
    console.log(index);
    setId((index + 1).toString());
    // setIndex(index);
    setIsplaying(true);
  };
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="w-100vw h-screen ">
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
                />
              }
            >
              <Route path="/main" element={<MainLayout />}>
                <Route
                  path="/main/home"
                  element={<HomePage handlePlayer={handlePlayer} />}
                ></Route>
                <Route
                  path="/main/search"
                  element={
                    <SearchPage search={search} handleSearch={handleSearch} />
                  }
                ></Route>
              </Route>
            </Route>
          ) : (
            <Route path="/main" element={<MainLayout />}>
              <Route
                path="/main/home"
                element={<HomePage handlePlayer={handlePlayer} />}
              ></Route>
              <Route
                path="/main/search"
                element={
                  <SearchPage handleSearch={handleSearch} search={search} />
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
