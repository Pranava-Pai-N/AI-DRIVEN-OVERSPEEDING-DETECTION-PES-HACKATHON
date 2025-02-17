import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white flex justify-between items-center px-6 shadow-md">
      <span className="text-xl font-bold text-orange-400">Bug Smashers</span>
      <ul className="flex gap-6">
        <NavLink
          to="/dashboard"
          className="hover:text-orange-400 transition text-gray-300"
          activeClassName="text-orange-400 font-semibold"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/"
          className="hover:text-orange-400 transition text-gray-300"
          activeClassName="text-orange-400 font-semibold"
        >
          Log Out
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
