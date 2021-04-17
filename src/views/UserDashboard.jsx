import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
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
  } //  TODO : Do leader

  const humanDate = () => {
    const today = new Date();
    return format(today, 'PPPP');
  };

  return (
    <div className="p-4 flex-1">
      <div className="md:grid grid-cols-2 grid-rows-2 gap-4">
        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-xl">
          <h1 className="text-3xl text-center md:text-4xl font-medium mb-2 block">
            Welcome, {currentUser.displayName || currentUser.email}, its
          </h1>
          <span className="text-lg text-indigo-600">{humanDate()}</span>
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
