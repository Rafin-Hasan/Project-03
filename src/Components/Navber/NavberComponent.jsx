import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <img src="./img/logo.png" alt="logo" />
      </div>
      <ul className="flex roboto font-normal text-[16px] gap-[61px] text-black pt-[7px]">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-600 font-semibold" : "hover:text-gray-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/whatwedo"
            className={({ isActive }) =>
              isActive ? "text-gray-600 font-semibold" : "hover:text-gray-600"
            }
          >
            What We Do
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "text-gray-600 font-semibold" : "hover:text-gray-600"
            }
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "text-gray-600 font-semibold" : "hover:text-gray-600"
            }
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-gray-600 font-semibold" : "hover:text-gray-600"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-gray-600 font-semibold" : "hover:text-gray-600"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
