import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-1/3 flex flex-col justify-center items-start pt-36 space-y-5 bg-indigo-100">
        <div>
          <nav className="navbar text-3xl">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/main/home">Home Page</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/main/search">Search</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/main/like">Like</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/main/genres">Genres</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-2/3 bg-indigo-100">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
