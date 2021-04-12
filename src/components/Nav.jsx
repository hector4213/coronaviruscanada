import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Local dependencies
import { auth } from '../firebase/firebase';
import Logo from '../assets/coronavirus.png';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();
  console.log(currentUser);
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
                    to="/findvaccine"
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
                {currentUser ? (
                  <button
                    className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    type="button"
                    onClick={() => auth.signOut()}
                  >
                    Log out
                  </button>
                ) : (
                  <button type="button" onClick={() => history.push('/login')}>
                    Sign In
                  </button>
                )}
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
        {/*  Mobile */}
        <div className={`${navOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-gray-800 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/today"
            >
              Today
            </Link>
            <Link
              className="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/trends"
            >
              Trends
            </Link>
            <Link
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/findvaccine"
            >
              Get Vaccinated
            </Link>
            <Link
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
