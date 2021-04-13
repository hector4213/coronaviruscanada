import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../redux/ducks/userSlice';
import Appointments from '../components/UserDashboard/Appointments';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { appointments, currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      dispatch(getAppointments(currentUser.id));
    }
  }, [currentUser]);

  if (!currentUser) {
    return null;
  }

  return (
    <div className="p-4">
      <div className="md:grid grid-cols-2 grid-rows-2">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl text-center md:text-4xl font-medium mb-2 p-8">
            Hello {currentUser.displayName || currentUser.email}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className=" relative ">
            <label htmlFor="display-name" className="text-gray-700">
              Update your display name
              <input
                type="text"
                id="display-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="display-name"
                placeholder="Your name"
              />
            </label>
            <button
              className="py-2 px-4 mt-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Appointments appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
