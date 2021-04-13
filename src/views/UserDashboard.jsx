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
      <h1 className="text-2xl">Hello {currentUser.email}</h1>
      <p>You currently have {appointments.length} appointments</p>
      <Appointments appointments={appointments} />
    </div>
  );
};

export default UserDashboard;
