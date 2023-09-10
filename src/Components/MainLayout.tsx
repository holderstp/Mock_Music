import { NavLink, Outlet, useParams, Route } from "react-router-dom";
interface LayoutProps {
  clickSearch: () => void;
  clickHome: () => void;
  clickLike: () => void;
  clickGenres: () => void;
}

const MainLayout = ({
  clickSearch,
  clickHome,
  clickLike,
  clickGenres,
}: LayoutProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex">
        <ul className="navbar-nav flex justify-start items-center w-1/2 space-x-5 text-xl font-bold ">
          <li className="nav-item" onClick={() => clickHome()}>
            <NavLink to="/main/home">Home Page</NavLink>
          </li>
          <li className="nav-item" onClick={() => clickSearch()}>
            <NavLink to="/main/search">Search</NavLink>
          </li>
          <li className="nav-item" onClick={() => clickLike()}>
            <NavLink to="/main/like">Like</NavLink>
          </li>
          <li className="nav-item" onClick={() => clickGenres()}>
            <NavLink to="/main/genres">Genres</NavLink>
          </li>
        </ul>
        <div className="user w-1/2 ">aaa</div>
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
