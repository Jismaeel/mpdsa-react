import { Link } from "react-router-dom"; 
import { useState } from "react";
import msdsa1 from "../assets/img/mpddsa-02 1.webp";


const NotFound = () => {
   const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
   setMenuOpen(!menuOpen);
 };


  return (
    <>
      <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={msdsa1} className="h-auto w-20" alt=" Logo" />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to="#Bookingsform1"
                  className="block py-2 px-3 text-white rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0"
                >
                  Book with
                </Link>
              </li>

              <li>
                <Link
                  to="Contactus"
                  className="block py-2 px-3 text-white rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <footer className=" bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={msdsa1} className="w-20 h-auto" alt="msdsa Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
              <li>
                <Link
                  smooth
                  to="#Aboutus"
                  className="hover:underline me-4 md:me-6"
                >
                  About
                </Link>
              </li>
              <li>
                <a className="hover:underline me-4 md:me-6">Why Choose us</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              The Mitchells Plain Drivivng School™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default NotFound
