import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../redux/ducks/userSlice';
import Appointments from '../components/UserDashboard/Appointments';
import DisplayNameInput from '../components/UserDashboard/DisplayNameInput';

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
    <div className="p-4 flex-1">
      <div className="md:grid grid-cols-2 grid-rows-2 gap-4">
        <div className="flex justify-center items-center bg-white rounded-lg shadow-xl">
          <h1 className="text-3xl text-center md:text-4xl font-medium mb-2 block">
            Welcome, {currentUser.displayName || currentUser.email}, its
            <span className="text-sm">{new Date().toString()}</span>
          </h1>
        </div>
        <div className="flex justify-center items-center bg-white rounded-lg shadow-xl">
          <DisplayNameInput />
        </div>
        <div className="flex justify-center items-center bg-white rounded-lg shadow-xl">
          <Appointments appointments={appointments} />
        </div>
        <div className="bg-white rounded-lg shadow-xl" />
      </div>
    </div>
  );
};

export default UserDashboard;
