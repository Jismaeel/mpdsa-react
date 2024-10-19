import msdsa1 from "../assets/img/mpddsa-02 1.webp";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={msdsa1} className="w-16 h-auto" alt="msdsa Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
              <li>
                <Link smooth to="#Aboutus" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <a className="hover:underline me-4 md:me-6">
                  Why Choose us
                </a>
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
    </div>
  );
};

export default Footer;
