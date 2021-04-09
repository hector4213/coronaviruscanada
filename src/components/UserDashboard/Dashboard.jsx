import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../../redux/ducks/userSlice';

const Dashboard = () => {
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
    <div>
      <p>Hello {currentUser.email}</p>
      <p>{appointments.map((appointment) => appointment.location)}</p>
    </div>
  );
};

export default Dashboard;
