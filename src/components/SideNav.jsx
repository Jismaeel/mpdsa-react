import { useState } from "react";
import { HashLink as Link,} from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import msdsa1 from "../img/mpddsa-02 1.webp";

const SideNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gray-900 border-b border-gray-200 py-3">
        <div className="px-6 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleNav}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a className="hidden lg:block ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl text-nowrap text-white">
                  The Mitchells Plain Driving Schools Association
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-16 h-auto"
                      src={msdsa1}
                      alt="MSDSA logo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-900 border-r border-gray-200 sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-900">
          <ul className="space-y-2 font-medium">
            <li className="pt-2">
              <Link
                smooth
                to="/"
                className="flex items-center p-2 bg-slate-800 text-white rounded-lg hover:bg-gray-100 hover:text-black group"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#Aboutus"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black group"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">About us</span>
              </Link>
            </li>
            <li>
              <a
                type="button"
                onClick={toggleDropdown}
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black group"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Driving Schools
                </span>
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </a>

              {dropdownOpen && (
                <div className="z-10 divide-y divide-gray-100 rounded-lg shadow w-56 bg-gray-700">
                  <ul className="py-2 text-sm text-gray-200">
                    <li>
                      <a
                        href="./SkylasDrivingSchool"
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Skylas Driving School
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Q's Driving Schools
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Two Lillies Driving Schools
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Eddies Driving School
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Craigs Driving School
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      >
                        Ebenezar Driving School
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/member"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black group"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Membership
                </span>
              </NavLink>
            </li>
            <li>
              <Link
                smooth
                to="#Contactus"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black group"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Contact us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
