import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import navbarLogo from "../assets/navbarLogo.png";
import AuthContext from "../Providers/AuthContext";
import DarkLight from "./DarkLight/DarkLight";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // DropDown Button
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogOut = () => {
    signOutUser();
    toast.success("User Logout success!");
  };

  return (
    <div className="flex items-center justify-between container mx-auto shadow-md bg-base-100 px-2 md:px-4 py-2 dark:bg-gray-900 dark:text-white">
      <div className="flex items-center gap-3">
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open === true ? (
            <AiOutlineClose className="text-[#C71F66]" />
          ) : (
            <AiOutlineMenu className="text-[#C71F66]" />
          )}
        </div>
        <img className="w-10 md:w-20" src={navbarLogo} alt="" />
        <h1 className="text-xl md:text-2xl font-bold text-[#C71F66]">
          ShareServe
        </h1>
      </div>
      <div>
        <ul
          className={`md:flex items-center gap-5 ${
            open
              ? "flex flex-col absolute left-2 p-2 md: mt-6 z-10 text-black bg-white shadow-md rounded-md md:static md:shadow-none md:rounded-none"
              : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#C71F66] font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allServices"
              className={({ isActive }) =>
                `${isActive ? "text-[#C71F66] font-semibold" : ""}`
              }
            >
              All Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${isActive ? "text-[#C71F66] font-semibold" : ""}`
              }
            >
              Services
            </NavLink>
          </li>
          {user && (
            <li className="relative">
              <button onClick={handleDropdownToggle}>Dashboard</button>
              {/* Submenu */}
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md mt-2 p-2 w-40 z-10">
                  <li>
                    <NavLink
                      to="/addService"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Add Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manageService"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Manage Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bookedService"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Booked-Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/serviceTodo"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Service-To-Do
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-3">
            <div title={user.displayName} className="w-10 rounded-full">
              <img
                className="w-10 rounded-full border-[#C71F66] border-2"
                src={user.photoURL}
                alt=""
              />
            </div>
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
        <DarkLight></DarkLight>
      </div>
    </div>
  );
}
