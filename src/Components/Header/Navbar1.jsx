import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar1 = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const [navbarBackground, setNavbarBackground] = useState("none");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        setNavbarBackground(
          "[#000300] shadow-md overflow-hidden shadow-cyan-700/70"
        );
      } else {
        setNavbarBackground("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`bg-${navbarBackground} z-30 sticky top-0 flex justify-between items-center h-[72px]  mx-auto px-12 text-[#00df9a]`}
    >
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">INSTYLE</h1>
      <ul className="hidden md:flex">
        <Link to="/">
          <li
            className={`p-4 rounded-3xl font-semibold hover:bg-[#00df9a] hover:text-black ease-in-out duration-400 ${
              location.pathname === "/"
                ? "bg-red-500 text-black hover:bg-[#00df9a] rounded-3xl"
                : ""
            }`}
          >
            Home
          </li>
        </Link>
        <Link to="/pricing">
          <li
            className={`p-4 rounded-3xl font-semibold hover:bg-[#00df9a] hover:text-black ease-in-out duration-400 ${
              location.pathname === "/pricing"
                ? "bg-red-500 text-black hover:bg-[#00df9a] rounded-3xl"
                : ""
            }`}
          >
            Pricing
          </li>
        </Link>
        <Link to="/about">
          <li
            className={`p-4 rounded-3xl font-semibold hover:bg-[#00df9a] hover:text-black ease-in-out duration-400 ${
              location.pathname === "/about"
                ? "bg-red-500 text-black hover:bg-[#00df9a] rounded-3xl"
                : ""
            }`}
          >
            About
          </li>
        </Link>
        <Link to="/contact">
          <li
            className={`p-4 rounded-3xl font-semibold hover:bg-[#00df9a] hover:text-black ease-in-out duration-400 ${
              location.pathname === "/contact"
                ? "bg-red-500 text-black hover:bg-[#00df9a] rounded-3xl"
                : ""
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          INSTYLE
        </h1>
        <Link to="/">
          <li className="p-4 border-b border-gray-600">Home</li>
        </Link>
        <Link to="/pricing">
          {" "}
          <li className="p-4 border-b border-gray-600">Pricing</li>
        </Link>
        <Link to="/about">
          <li className="p-4 border-b border-gray-600">About</li>
        </Link>
        <Link to="/contact">
          <li className="p-4">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar1;
