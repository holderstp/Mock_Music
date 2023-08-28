import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import HomePage from "./Pages/HomePages";
import SearchPage from "./Pages/SearchPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-100vw h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<MainLayout />}>
            <Route path="/main/home" element={<HomePage />}></Route>
            <Route path="/main/search" element={<SearchPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
