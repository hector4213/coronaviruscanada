import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiMinutemailer } from 'react-icons/si';
import { RiLockPasswordLine } from 'react-icons/ri';

// Local dependencies
import { auth, createUserProfileDocument } from '../../firebase/firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [displayName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create user through Firebase auth
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      /**
       * Create a user in firestore (only if you have firestore in use)
       * so you can store user settings and allow them to update
       * their settings later, if you want. For example, you can add
       * a field for them to add a displayName, like a username or
       * something along those lines
       */
      await createUserProfileDocument(user, { displayName });
    } catch (err) {
      console.error('handleSignup error :>>', err);
      setError(err);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Create an Account
      </div>
      <div className="mt-8">
        <form onSubmit={(e) => handleSignup(e)}>
          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <SiMinutemailer />
              </span>
              <input
                type="text"
                id="sign-in-email"
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <RiLockPasswordLine />
              </span>
              <input
                type="password"
                id="password"
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <RiLockPasswordLine />
              </span>
              <input
                type="password"
                id="password-confirm"
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Password confirmation"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center mb-6 -mt-4">
            <div className="flex ml-auto text-xs font-thin text-gray-500 sm:text-sm">
              Already Have an Account?{' '}
              <Link
                className="inline-flex pl-1 text-xs font-thin text-blue-500 sm:text-sm dark:text-blue-100 hover:text-blue-700 dark:hover:text-white"
                to="/login"
              >
                Log In
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <button
              type="submit"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Sign Up
            </button>
            {error && (
              <p className="text-red-500 text-center mt-2">{error.message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
