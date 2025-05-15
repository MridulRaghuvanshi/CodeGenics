import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CodeGenics.jpg"; // Unused logo image

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10); // trigger blur after scrolling 10px
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 start-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/50 backdrop-blur-md shadow-md"
      : "bg-white"
  }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-60 h-20" alt="CodeGenics Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <Link to="/">
              <p  className="block py-2 px-3 text-gray-900 rounded-sm hover:text-sky-700 md:hover:bg-transparent  transition-all duration-300 ease-out hover:scale-105" aria-current="page">Home</p>
            </Link>
            <Link to="/about">
              <p  className="block py-2 px-3 text-gray-900 rounded-sm hover:text-sky-700 md:hover:bg-transparent  transition-all duration-300 ease-out hover:scale-105">About Us</p>
            </Link >
            <Link to="/symptoms">
              <p className="block py-2 px-3 text-gray-900 rounded-sm hover:text-sky-700 md:hover:bg-transparent  transition-all duration-300 ease-out hover:scale-105">Symptom Checker</p>
            </Link >
<Link to="/docs">
              <p  className="block py-2 px-3 text-gray-900 rounded-sm hover:text-sky-700 md:hover:bg-transparent  transition-all duration-300 ease-out hover:scale-105">Clnical Docs</p>
            </Link >
            <Link to="/contacts">
              <p  className="block py-2 px-3 text-gray-900 rounded-sm hover:text-sky-700 md:hover:bg-transparent  transition-all duration-300 ease-out hover:scale-105">Contact Us</p>
            </Link >
          </ul> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;