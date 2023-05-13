import React, { useState } from "react";
import navLogo from "../../../assets/images/more/logo1.png";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="">
      <nav className="nav-bg shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center justify-center">
              <img src={navLogo} className="w-14" alt="" />
              <h2 className="text-xl font-semibold text-white ml-2">
                Espresso Emporium
              </h2>{" "}
            </div>
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 focus:text-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setShowMenu(!showMenu)}
              >
                <svg
                  className={`${showMenu ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${showMenu ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex sm:items-center text-white">
              <Link
                to="/"
                href="#"
                className="px-3 py-2 rounded-md text-sm font-semibold hover:text-gray-800  hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/addnew"
                className="px-3 py-2 rounded-md text-sm font-semibold hover:text-gray-800  hover:bg-gray-50"
              >
                Add Product
              </Link>
              <Link
                to="/updateProduct"
                className="px-3 py-2 rounded-md text-sm font-semibold hover:text-gray-800  hover:bg-gray-50"
              >
                Update Product
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`${showMenu ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-3 text-white space-y-1">
            <Link
              to="/"
              href="#"
              className="block px-3 rounded-md text-base font-semibold hover:text-gray-800  hover:bg-gray-50"
            >
              Home
            </Link>
          </div>

          <div className="px-2 space-y-1">
            <Link
              to="/addnew"
              href="#"
              className="block px-3  rounded-md text-base text-white pt-2 font-semibold hover:bg-gray-50 hover:text-gray-800"
            >
              Add Product
            </Link>
          </div>

          <div className="px-2 space-y-1 pb-4">
            <Link
              to="/updateProduct"
              href="#"
              className="block px-3 rounded-md text-base pt-2 text-white font-semibold hover:bg-gray-50 hover:text-gray-800"
            >
              Update Product
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
