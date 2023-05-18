import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Bookmark } from "@heroicons/react/solid";
import {
  AiOutlineMenuFold,
  AiFillCloseCircle,
  AiOutlineBulb,
} from "react-icons/ai";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className={`bg-${isDarkMode ? "gray-800" : "white"} text-${
        isDarkMode ? "white" : "gray-800"
      } shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8"
              src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png"
              alt="Logo"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 hover:text-gray-800"
              >
                Home
              </a>
              <a
                href="/pricing"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 hover:text-gray-800"
              >
                pricing
              </a>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <AiFillCloseCircle
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <AiOutlineMenuFold
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div
            className={`absolute top-16 md:hidden bg-${
              isDarkMode ? "gray-800" : "white"
            } w-full`}
            id="mobile-menu"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 hover:text-gray-800"
              >
                Home
              </a>
              <a
                href="/pricing"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 hover:text-gray-800"
              >
                pricing
              </a>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
                isDarkMode ? "gray-800" : "white"
              }`}
            >
              {isDarkMode ? <AiOutlineBulb /> : <AiOutlineBulb />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
