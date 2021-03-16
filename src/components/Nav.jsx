import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/coronavirus.png';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className="bg-white dark:bg-gray-800  shadow py-4 ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="h-12 w-12" src={Logo} alt="headericon" />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    to="/today"
                  >
                    Today
                  </Link>
                  <Link
                    className="text-gray-800 dark:text-white  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    to="/trends"
                  >
                    Trends
                  </Link>
                  <Link
                    className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    to="/vaccine"
                  >
                    Get Vaccinated
                  </Link>
                  <Link
                    className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    to="/about"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="md:block -mr-2 flex">
                <form className="flex w-full max-w-sm space-x-3">
                  <div className=" relative ">
                    <input
                      type="text"
                      id='"form-subscribe-Search'
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="search"
                    />
                  </div>
                  <button
                    className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6" />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setNavOpen(!navOpen)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-800 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Today
            </a>
            <a
              className="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Trends
            </a>
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Get Vaccinated
            </a>
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
