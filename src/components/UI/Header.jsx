import { NavLink, useNavigate } from "react-router-dom";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => setShow(!show);

  const isLoggedIn = !!localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/admin-login");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          <NavLink to="/">My Shop</NavLink>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={handleOnClick} className="text-3xl text-gray-800 dark:text-white">
            <IoReorderThreeSharp />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "")}>
            About
          </NavLink>
          <NavLink to="/product" className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "")}>
            Product
          </NavLink>
          <NavLink to="/contect" className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "")}>
            Contact
          </NavLink>

          {/* Login / Logout Button */}
          <button
            onClick={isLoggedIn ? handleLogout : handleLogin}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {show && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-800 dark:text-gray-200 font-medium">
          <li>
            <NavLink to="/" onClick={() => setShow(false)} className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setShow(false)} className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" onClick={() => setShow(false)} className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "")}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contect" onClick={() => setShow(false)} className={({ isActive }) => (isActive ? "text-blue-600 font-semibold" : "")}>
              Contact
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                setShow(false);
                isLoggedIn ? handleLogout() : handleLogin();
              }}
              className="w-full text-left text-red-500 hover:text-red-600"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};
