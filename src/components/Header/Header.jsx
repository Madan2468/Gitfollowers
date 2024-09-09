import React from "react";
import { Link, NavLink } from "react-router-dom";
import "animate.css";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow sticky z-50 top-0">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center text-3xl font-bold animate__animated animate__fadeIn animate__delay-1s"
          >
            <span className="text-orange-500">Madan</span> Gopal Jha
          </Link>
          <div
            className="hidden lg:flex lg:w-auto animate__animated animate__fadeIn animate__delay-2s"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg duration-200 ${
                      isActive
                        ? "bg-orange-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    } animate__animated animate__fadeIn animate__delay-3s`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg duration-200 ${
                      isActive
                        ? "bg-orange-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    } animate__animated animate__fadeIn animate__delay-4s`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg duration-200 ${
                      isActive
                        ? "bg-orange-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    } animate__animated animate__fadeIn animate__delay-5s`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
