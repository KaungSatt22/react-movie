import React from "react";
import { useSearch } from "../hooks/useSearch";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { search, searchHandler } = useSearch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    searchHandler(e.target.value);
    navigate("/");
  };
  return (
    <div className=" bg-slate-600 ">
      <nav className="container mx-auto flex flex-col lg:flex-row gap-5 items-center h-[15vh] lg:justify-between lg:h-[10vh] p-3">
        <h2 className="text-xl lg:text-4xl text-white font-bold">
          Heaven Data House
        </h2>
        <div className="flex items-center gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-lg text-white" : ""
            }
            to="/"
          >
            <h2 className="p-1 text-white lg:text-xl lg:p-3 ">Home Page</h2>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-lg text-white" : ""
            }
            to="/favorite"
          >
            <h2 className="p-1 text-white lg:text-xl lg:p-3">Fav Movies</h2>
          </NavLink>
          <div className="relative flex items-center">
            <input
              type="text"
              value={search}
              className="px-2 w-1/3 lg:w-auto lg:p-2 lg:text-xl rounded-md outline-none "
              placeholder="Search Movie Name"
              onChange={handleSearch}
            />
            {search.length > 1 && (
              <button
                className="absolute right-0"
                onClick={() => searchHandler("")}
              >
                ❌
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
